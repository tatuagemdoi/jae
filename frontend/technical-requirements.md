# Requisitos Técnicos — App Jaé

> Requisitos não-funcionais do app de bilhetagem digital do Rio. Cada requisito amarra-se aos KPIs da visão e às dores das personas. Onde possível, são mensuráveis e testáveis.

---

## 1. Performance

A performance do Jaé não é luxo: é a diferença entre **embarcar e perder o ônibus**. Marcos perde a viagem quando o app demora; Roberto desiste quando a tela trava.

### 1.1 Metas mensuráveis

| Métrica | Alvo | Por quê |
|---|---|---|
| QR pronto na tela (toque → render) | **< 2s** (p95) | KPI da visão; embarque acima de tudo |
| Cold start até Início interativo | **< 3s** (p95, Android mid-tier) | Marcos abre o app já correndo |
| Tempo até saldo visível | **< 500ms** (do cache) | Saldo é tranquilidade; mostra cache, revalida atrás |
| PIX creditado e saldo atualizado | **< 10s** (p95) | KPI da visão; recarga sem susto |
| Embarque sem falha | **> 99%** | KPI da visão |
| Tamanho do bundle inicial | **< 8 MB** (download) | Conexão 3G, aparelho com pouco espaço |
| Frame rate em listas (extrato) | **60 fps** / sem jank perceptível | Scroll fluido em aparelho antigo |

### 1.2 Estratégias
- **QR sempre cacheado:** manter um QR válido em MMKV; abrir a tela Pagar renderiza o cache imediatamente, renovação acontece em paralelo. Nunca esperar a rede para mostrar algo.
- **Saldo otimista a partir do cache** com rótulo "atualizado há X".
- **Code splitting / lazy load:** Clube, Perfil e detalhes de cartão fora do bundle crítico.
- **Listas virtualizadas** (FlashList) no Extrato.
- **Imagens e ícones** em SVG/vetor; sem PNGs pesados.
- **Skeletons** em vez de spinners em telas de dados, evitando layout shift.
- **Orçamento de performance no CI:** falhar o build se o bundle inicial passar do limite.

---

## 2. Acessibilidade (WCAG 2.1 AA)

Princípio da visão: **acessível para o Rio inteiro**. Roberto (69, menos digital) e usuários com deficiência (gratuidade PCD) são alvo de primeira classe, não exceção.

### 2.1 Conformidade alvo: **WCAG 2.1 nível AA**

| Critério | Requisito Jaé |
|---|---|
| Contraste de texto (1.4.3) | ≥ 4.5:1 corpo, ≥ 3:1 títulos grandes. Texto sobre azul `#0B5FFF` em branco; **nunca texto cinza claro sobre fundo claro**. Amarelo `#FFD400` só com texto grafite `#14171A`. |
| Alvo de toque (2.5.5) | Mínimo **44×44pt**; botões primários e abas maiores. |
| Texto redimensionável (1.4.4) | Suporta Dynamic Type / fonte do sistema até **200%** sem quebrar layout nem cortar conteúdo. |
| Leitor de tela (4.1.2) | VoiceOver/TalkBack: todo elemento interativo com `label` PT-BR, `role` e `state`. Saldo lido como "Saldo: doze reais e cinquenta centavos, não expira". |
| Foco e ordem (2.4.3) | Ordem de foco lógica; foco visível; modais prendem foco (focus trap). |
| Sem depender só de cor (1.4.1) | Sucesso/erro usam ícone + texto, não apenas verde/vermelho. |
| Movimento (2.3.3) | Respeita "reduzir movimento"; animações de Clube viram transições simples. |

### 2.2 Recursos para baixa proficiência digital (Roberto)
- **Modo simples** opcional: fontes maiores, menos elementos, ações primárias destacadas.
- **Linguagem de gente:** "Tá precisando de ajuda?" sempre visível no Perfil; sem jargão.
- **Confirmações claras** antes de ações irreversíveis (bloquear cartão, sair).
- **Aviso proativo de gratuidade** (dor da Ana e do Roberto): notificação e banner antes de expirar — nunca descobrir na catraca.

### 2.3 Testes de acessibilidade
- Lint de a11y (`eslint-plugin-react-native-a11y`).
- Auditoria manual com VoiceOver e TalkBack no fluxo crítico (pagar, recarregar, renovar gratuidade).
- Verificação de contraste automatizada nos tokens.

---

## 3. Offline e resiliência de rede

O Rio tem túnel, estação lotada, 3G instável. O app **não pode falhar no embarque** por causa de rede.

### 3.1 Requisitos
- **Núcleo offline-first:** saldo (último conhecido), último QR válido e status de gratuidade disponíveis sem rede.
- **Tela Pagar offline:** exibe o último QR válido com aviso "sem internet — usando seu último código" em vez de tela em branco.
- **Detecção de conectividade** (NetInfo) com banner discreto "Você está offline".
- **Fila de operações:** ações não-críticas feitas offline (ex.: marcar missão do Clube) entram em fila e sincronizam ao reconectar.
- **Sem operação financeira offline:** recarga e pagamento que exijam confirmação do servidor são bloqueados com mensagem clara; nunca duplicar cobrança.
- **Reconciliação:** ao voltar online, revalidar saldo/extrato e resolver divergências pelo servidor (fonte de verdade).

### 3.2 Idempotência
- Toda escrita de pagamento usa `Idempotency-Key`; retries não geram cobrança dupla.

---

## 4. Segurança e pagamentos

Dinheiro e dados pessoais (inclusive de menores via Jaézinho e de PCD) exigem rigor. Confiança radical é princípio da marca.

### 4.1 Autenticação e sessão
- Login com token de curta duração + refresh token.
- **Biometria** (Face ID / impressão digital) para reabrir o app e confirmar ações sensíveis.
- Token e dados sensíveis em **Keychain (iOS) / Keystore (Android)**; nunca em AsyncStorage texto puro.
- Logout limpa todo cache sensível (saldo, QR, token).

### 4.2 PIX e recargas
- Geração de cobrança PIX via **PSP homologado**; o app **não manipula chave PIX de destino** manualmente — usa `txid` e `copia-e-cola` retornados pelo backend.
- Confirmação por **webhook do PSP no backend** + polling no app; o app nunca credita saldo localmente.
- Valores sempre em **centavos inteiros**; formatação só na UI.
- Recarga por cartão de crédito: dados de cartão tokenizados pelo gateway (**PCI-DSS**), nunca trafegam/armazenam no app em texto.
- Boleto: exibe linha digitável + copiar; sem dados sensíveis persistidos.

### 4.3 Transporte e armazenamento
- **TLS 1.2+** obrigatório; **certificate pinning** nas chamadas de pagamento e auth.
- Payload do QR **assinado pelo backend** (JWT/HMAC) com TTL curto; o app não forja QR.
- **LGPD:** coleta mínima, consentimento, e dados de gratuidade (estudante/idoso/PCD) tratados como sensíveis. Política clara no Perfil.
- Logs e analytics **sem PII** (sem CPF, sem número de cartão).

### 4.4 Proteções de app
- Detecção de root/jailbreak: aviso e bloqueio de operações financeiras em ambiente comprometido.
- Ofuscação do bundle; segredos fora do código (env no build).
- Anti-screenshot opcional na tela de QR/pagamento (configurável).

---

## 5. Suporte a dispositivos

"Acessível para o Rio inteiro" significa rodar bem no aparelho real do usuário médio, não só no topo de linha.

### 5.1 Plataformas
| Plataforma | Versão mínima | Observação |
|---|---|---|
| Android | **8.0 (API 26)** | cobre a base instalada de aparelhos populares no Rio |
| iOS | **14** | duas gerações de fallback |

### 5.2 Telas e densidades
- Faixa de largura: **320pt a tablets**; layout fluido, sem corte em telas pequenas.
- Saldo e botões primários legíveis em tela pequena com fonte ampliada.
- Orientação **retrato** como padrão (app de uso rápido na rua).

### 5.3 Hardware
- **Câmera** (leitura de QR quando aplicável) com fallback se ausente/sem permissão.
- **Biometria** opcional; degradação graciosa para PIN/senha.
- **NFC** para cartão físico (Jaé/Jaézinho), quando o aparelho suportar.
- Funciona com **pouca memória/armazenamento**: cache enxuto e descartável.

### 5.4 Internacionalização e formatação
- PT-BR como idioma base; datas (`14 de junho`), moeda (`R$ 12,50`) e números no padrão brasileiro.
- Arquitetura preparada para i18n futura, sem strings hardcoded.

---

## 6. Qualidade e observabilidade

- **Crash-free sessions > 99,5%** (Sentry).
- Telemetria dos KPIs: tempo de QR pronto, taxa de embarque sem falha, tempo de crédito PIX, % de renovação de gratuidade no app, NPS.
- **E2E (Maestro)** obrigatório no fluxo de pagamento e recarga como gate de release.
- Alertas se p95 de "QR pronto" ultrapassar 2s ou se falha de embarque subir.

---

## 7. Resumo de aceite (Definition of Done não-funcional)

Uma feature só é "pronta" se:
- [ ] Atende às metas de performance aplicáveis (§1).
- [ ] Passa auditoria de acessibilidade AA com VoiceOver/TalkBack (§2).
- [ ] Degrada graciosamente offline, sem risco financeiro (§3).
- [ ] Não introduz risco de segurança/LGPD; pagamentos idempotentes (§4).
- [ ] Funciona no aparelho mínimo suportado, em tela pequena e com fonte 200% (§5).
- [ ] Emite telemetria dos KPIs relevantes (§6).
