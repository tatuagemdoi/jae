# Arquitetura Frontend — App Jaé

> Bilhetagem digital oficial do transporte do Rio. Este documento define a arquitetura técnica do app mobile do Jaé, fiel à visão ("atravessar a cidade sem fricção") e às personas (Marcos, Ana, Roberto).

---

## 1. Princípios de arquitetura

A arquitetura existe para servir três objetivos de produto inegociáveis:

1. **Embarque acima de tudo** — a tela `pagar` (QR Code) precisa abrir e renderizar o código em **< 2s**, mesmo com saldo desatualizado ou rede ruim. Tudo o mais é secundário.
2. **Saldo é tranquilidade** — saldo e último uso devem estar sempre disponíveis, inclusive offline, com indicação clara de "atualizado há X".
3. **Acessível para o Rio inteiro** — funciona em Android antigo, tela pequena, conexão 3G e para usuários menos digitais (Roberto).

Decorrências técnicas:
- **Offline-first** no núcleo crítico (saldo, último QR válido, dados de gratuidade).
- **Otimização de cold start**: a rota inicial e a rota de pagamento entram no bundle principal; o resto é lazy-loaded.
- **Estado previsível**: uma fonte única de verdade para saldo e sessão, sem duplicação entre telas.

---

## 2. Stack sugerida

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **React Native (Expo, dev client)** | Um código para iOS/Android, OTA updates (corrigir bug de catraca sem esperar review de loja), acesso nativo a câmera/biometria/NFC. |
| Linguagem | **TypeScript** (strict) | Tipagem de contratos de bilhetagem (valores monetários, status de transação) reduz erro em produção. |
| Navegação | **React Navigation** (Native Stack + Bottom Tabs) | Bottom-nav de 5 abas com aba central destacada; stack para fluxos modais (recarregar, confirmar). |
| Estado servidor | **TanStack Query (React Query)** | Cache, revalidação, retry e estados de loading/erro padronizados para saldo, extrato, cartões. |
| Estado cliente | **Zustand** | Sessão, preferências, flag offline. Leve, sem boilerplate — adequado a app de poucas telas globais. |
| Persistência | **MMKV** | Storage síncrono e rápido para token, último saldo conhecido, último QR. |
| Formulários | **React Hook Form + Zod** | Validação de recarga (valor, método) com mensagens em PT-BR. |
| Estilo | **Tokens próprios + StyleSheet** (Tamagui opcional) | Design tokens centralizados (ver §6). |
| QR | **react-native-qrcode-svg** (geração) | QR de pagamento renderizado localmente a partir de payload assinado pelo backend. |
| Pagamentos | **SDK PIX do PSP** + copia-e-cola/deep link | Geração de cobrança PIX, polling/webhook de confirmação. |
| Observabilidade | **Sentry** + analytics de eventos | Medir North Star (embarques pagos/semana) e KPIs (QR pronto, falha de embarque). |
| Testes | **Jest + RN Testing Library + Maestro (E2E)** | E2E cobrindo o fluxo crítico de pagamento. |

> **Alternativa avaliada:** Flutter. Descartada para manter alinhamento com competências de time web/React e reuso de lógica TS com um futuro portal web de VT corporativo.

> **Nota sobre o protótipo navegável:** a entrega de alta fidelidade (telas hi-fi) é feita em **web (HTML/CSS, fonte Poppins via Google Fonts)** para demonstração rápida; a arquitetura React Native acima é o destino de produção. Os design tokens (§6) são idênticos nas duas pontas.

---

## 3. Estrutura de pastas

```
src/
├── app/
│   ├── App.tsx                  # providers (Query, navegação, tema, i18n)
│   └── navigation/
│       ├── RootNavigator.tsx    # onboarding (stack) vs app (tabs)
│       ├── BottomTabs.tsx       # inicio · extrato · pagar(central) · clube · perfil
│       └── routes.ts            # nomes/tipos de rota
├── features/
│   ├── onboarding/              # splash "Vem ser Jaé", login/entrar
│   ├── inicio/                  # saldo, ações rápidas, último uso, banner Clube
│   ├── pagar/                   # QR grande, valor da tarifa, seletor de modal
│   ├── recarregar/              # chips de valor, método, confirmar
│   ├── extrato/                 # lista agrupada por data, filtro
│   ├── cartoes/                 # Jaé virtual, Jaézinho, bloquear/2ª via
│   ├── clube/                   # pontos, nível, missões, recompensas
│   └── perfil/                  # dados, gratuidades, ajuda, config, sair
│       └── (cada feature) -> components/ hooks/ screens/ api/ model.ts
├── shared/
│   ├── ui/                      # Button(pill), Card, Chip, BalanceText, Sheet, EmptyState
│   ├── tokens/                  # cores, tipografia, espaçamento, raios, sombras
│   ├── icons/                   # ícones de modal: BRT, VLT, SPPO, STPL, STPC
│   ├── format/                  # money (R$), data PT-BR, máscara
│   └── a11y/                    # helpers de acessibilidade (labels, foco)
├── services/
│   ├── api/                     # cliente HTTP, interceptors, contratos
│   ├── billing/                 # saldo, transações, geração de QR
│   ├── payments/                # PIX, cartão, boleto
│   ├── auth/                    # sessão, token, biometria
│   └── offline/                 # fila, cache crítico, sync
├── store/                       # zustand slices (session, ui, offlineFlag)
└── config/                      # env, feature flags, endpoints
```

**Regra de dependência:** `features/*` podem importar de `shared/` e `services/`, nunca de outra feature. Comunicação entre features acontece via navegação ou store global.

---

## 4. Gestão de estado

### 4.1 Fonte única do saldo
O saldo é o dado mais sensível. Ele vive em **uma** query (`useSaldo()`):

```ts
useQuery({
  queryKey: ['saldo'],
  queryFn: billing.getSaldo,
  staleTime: 30_000,
  // mostra o último saldo conhecido (MMKV) enquanto revalida
  placeholderData: () => storage.getLastSaldo(),
})
```

- Início, Pagar e Recarregar **consomem a mesma query** — nunca refazem a busca por conta própria.
- Após recarga confirmada: `invalidateQueries(['saldo','extrato'])`, então o usuário volta ao Início já vendo o valor novo.
- A UI sempre exibe **"atualizado há X"**; se offline, mostra o último valor com rótulo claro. Reforço da promessa: **"Seu saldo não expira"**.

### 4.2 Estado servidor vs cliente

| Tipo | Ferramenta | Exemplos |
|---|---|---|
| Servidor (remoto, cacheável) | React Query | saldo, extrato, cartões, missões/pontos do Clube, status de gratuidade |
| Cliente (local, síncrono) | Zustand | sessão/token, aba ativa, modal selecionado em Pagar, flag offline, preferências de acessibilidade |
| Persistente | MMKV | token (encriptado), último saldo, último QR válido, onboarding visto |

### 4.3 Slices Zustand
- `sessionSlice`: usuário, token, gratuidades ativas, `logout()`.
- `uiSlice`: tema, tamanho de fonte (acessibilidade), banner do Clube dispensado.
- `offlineSlice`: `isOnline`, `lastSyncAt`.

---

## 5. Navegação

### 5.1 Topologia
```
RootNavigator (Native Stack)
├── OnboardingStack            # se não autenticado
│   ├── Splash ("Vem ser Jaé")
│   └── Login / Entrar
└── AppTabs (Bottom Tabs)      # se autenticado → entra em "inicio"
    ├── Inicio
    ├── Extrato
    ├── Pagar      (botão central destacado, pill azul/amarelo, elevado)
    ├── Clube
    └── Perfil

Stacks modais sobre as tabs:
- RecarregarStack (Recarregar → Confirmar → volta a Inicio)
- CartaoDetalheStack (bloquear, 2ª via, virtual)
```

### 5.2 Fluxos
- **onboarding → inicio**: após login, `reset` da stack para evitar voltar ao splash.
- **Ações rápidas do Início**: `Recarregar`, `Pagar`, `Cartões` navegam para as respectivas rotas; `Pagar` foca a aba central.
- **recarregar → confirmar → inicio**: ao confirmar, `navigation.navigate('Inicio')` com `invalidateQueries`.
- **Pagar é prioridade**: a aba central tem destaque visual e é alcançável em 1 toque de qualquer aba.

### 5.3 Bottom nav (5 abas)
| Rota | Label | Ícone | Destaque |
|---|---|---|---|
| inicio | Início | casa | — |
| extrato | Extrato | lista | — |
| pagar | Pagar | QR | **central, pill, elevado** |
| clube | Clube | estrela | badge de missão nova |
| perfil | Perfil | pessoa | badge de gratuidade a vencer |

Acessibilidade: cada aba expõe `accessibilityRole="tab"`, `accessibilityState={{selected}}` e label PT-BR. Pagar tem `accessibilityHint="Abre o QR Code para pagar a tarifa"`.

---

## 6. Design tokens

Tokens centralizados em `shared/tokens`, consumidos por todos os componentes. Fonte única — nenhum hex solto no código.

### 6.1 Cores
```ts
export const color = {
  primary:   '#0B5FFF', // azul Jaé
  accent:    '#FFD400', // amarelo — destaque/gratuidade
  ink:       '#14171A', // texto grafite
  bg:        '#F4F6FA', // fundo
  surface:   '#FFFFFF', // superfície/cards
  neutral:   '#6B7280', // cinza neutro
  success:   '#16A34A', // verde
  error:     '#DC2626', // vermelho
}
```

### 6.2 Tipografia
```ts
export const font = {
  family: 'Poppins',           // fallback: system-ui (sans geométrica, cantos arredondados)
  display: { size: 40, weight: '700' }, // saldo grande
  h1:      { size: 24, weight: '600' },
  body:    { size: 16, weight: '400' },
  caption: { size: 13, weight: '400' },
}
```
- Saldo na tela Início usa `display` com `tabular-nums`.
- Suporte a **escala de fonte do sistema** (Roberto): nada de tamanho fixo travando Dynamic Type.

### 6.3 Espaçamento, raios, sombras
```ts
export const radius  = { card: 18, pill: 999, sheet: 24 };
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
export const shadow  = {
  card: { offsetY: 4, blur: 16, opacity: 0.06 }, // suave, fintech
};
```
- Botões: **pill** (`radius.pill`).
- Cards: `radius.card` (18px), sombra suave.
- Modais (recarregar/seletor de modal): bottom sheet com `radius.sheet`.

### 6.4 Tom na UI
Microcopy vem de um dicionário PT-BR (`shared/copy`), reaproveitando bordões reais: **"Vem ser Jaé"**, **"Tá precisando de ajuda?"**, **"Seu saldo não expira"**. Estados vazios e erros falam "de gente", sem jargão.

---

## 7. Integração com a API de bilhetagem

### 7.1 Cliente HTTP
- Base em `axios`/`fetch` com interceptors para: token Bearer, `traceId`, timeout agressivo na rota de pagamento, retry exponencial **exceto** em escrita de pagamento (idempotência via `Idempotency-Key`).

### 7.2 Contratos principais (`services/billing` e `services/payments`)

| Domínio | Endpoint (ex.) | Notas |
|---|---|---|
| Saldo | `GET /v1/saldo` | `{ centavos, atualizadoEm, naoExpira: true }` |
| QR de pagamento | `POST /v1/qr` | payload assinado + `validadeSeg`; gerado server-side, renderizado local |
| Tarifa/modais | `GET /v1/tarifas` | valores por modal (BRT/VLT/SPPO/STPL/STPC) |
| Extrato | `GET /v1/transacoes?desde=&ate=` | paginado, agrupável por data |
| Cartões | `GET /v1/cartoes` · `POST /v1/cartoes/{id}/bloquear` · `/segunda-via` | Jaé, Jaézinho, virtual |
| Recarga PIX | `POST /v1/recargas/pix` | retorna `copiaECola`, `qrPix`, `txid` |
| Recarga cartão/boleto | `POST /v1/recargas/cartao` · `/boleto` | — |
| Gratuidades | `GET /v1/gratuidades` · `POST /v1/gratuidades/renovar` | estudante/idoso/PCD; status + validade |
| Clube | `GET /v1/clube` · `POST /v1/clube/resgatar` | pontos, nível, missões |

### 7.3 Valores monetários
- **Sempre em centavos (inteiro)** no transporte; formatação para `R$` só na borda de UI (`shared/format/money`). Nunca `float` para dinheiro.

### 7.4 Confirmação de PIX (tempo real)
- Após `POST /recargas/pix`, abre-se tela "aguardando" com **polling** (`refetchInterval` decrescente) e/ou **push/WebSocket** quando disponível.
- KPI alvo: **PIX creditado < 10s**. Ao confirmar, invalida `saldo`/`extrato` e retorna ao Início com feedback de sucesso (verde).

### 7.5 Geração de QR e validade
- O app pede um QR ao backend; o backend devolve token assinado com TTL curto. O app:
  1. Mantém **um QR válido em cache** (MMKV) para abrir instantaneamente.
  2. Renderiza imediatamente e, em paralelo, renova se expirado.
  3. Exibe contagem de validade discreta; nunca bloqueia a tela esperando rede.

### 7.6 Tratamento de erro e resiliência
- Estados padronizados via React Query: `loading` (skeleton), `error` (mensagem PT-BR + "Tentar de novo"), `empty` (ilustração + copy encorajador).
- Falha de rede na tela Pagar: mostra **último QR válido** com aviso, em vez de tela em branco — embarque acima de tudo.

---

## 8. Acessibilidade na arquitetura
- Componentes de `shared/ui` já nascem com `accessibilityRole`, `accessibilityLabel` e alvos de toque ≥ 44pt.
- Modo de fonte ampliada e alto contraste como flags em `uiSlice`.
- Detalhamento completo em `technical-requirements.md`.

---

## 9. Build, ambientes e entrega
- Ambientes: `dev`, `staging`, `prod` via `config/env`.
- Feature flags para liberar Clube/gratuidades gradualmente.
- OTA (Expo Updates) para correções rápidas no fluxo de embarque.
- CI: lint + type-check + testes unitários + E2E Maestro do fluxo de pagamento como gate de release.
