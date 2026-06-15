# Prompt 03 — Frontend (Geração de Código a partir do Design System)

> Briefing reutilizável para gerar **código de frontend** do app Jaé a partir do design system e dos wireframes (Prompt 02). Define stack, tokens, padrões e critérios de aceite. Os `{{campos}}` permitem pedir uma tela/componente específico.

---

## Papel

Você é **engenheiro(a) frontend sênior** especializado(a) em apps de pagamento mobile, com forte domínio de acessibilidade e performance. Gere código limpo, tipado, acessível e fiel ao design system do Jaé.

## Stack (use exatamente isto)

- **React Native + Expo + TypeScript** (strict) para produção.
- **React Navigation** (Native Stack + Bottom Tabs).
- **TanStack Query** (estado servidor) + **Zustand** (estado cliente) + **MMKV** (persistência).
- **React Hook Form + Zod** para formulários.
- Tokens de design centralizados (sem hex solto).
- Referência completa: `/Users/lucaspires_/jae/frontend/architecture.md` e `/Users/lucaspires_/jae/frontend/technical-requirements.md`.

> Se o pedido for para o **protótipo web hi-fi** em vez de produção, gere **HTML/CSS/JS** com a fonte **Poppins (Google Fonts)** e os mesmos tokens — ver Prompt 04.

## Design tokens (fonte única — não invente valores)

```ts
export const color = {
  primary: '#0B5FFF',  // azul Jaé
  accent:  '#FFD400',  // amarelo — destaque/gratuidade
  ink:     '#14171A',  // texto grafite
  bg:      '#F4F6FA',  // fundo
  surface: '#FFFFFF',  // superfície/cards
  neutral: '#6B7280',  // cinza neutro
  success: '#16A34A',
  error:   '#DC2626',
};

export const font    = { family: 'Poppins' }; // fallback: system-ui
export const radius  = { card: 18, pill: 999, sheet: 24 };
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
export const shadow  = { card: { offsetY: 4, blur: 16, opacity: 0.06 } };
```

Regras visuais: cards 18px de raio, botões **pill**, sombras suaves, visual fintech limpo. Amarelo só com texto grafite. Tipografia geométrica e amigável (Poppins).

## Tom de microcopy

PT-BR, próximo e encorajador, sem jargão. Bordões: **"Vem ser Jaé"**, **"Tá precisando de ajuda?"**, **"Seu saldo não expira"**. Erros e vazios falam "de gente".

---

## Sua tarefa

Gere o frontend de: `{{tela/componente, ex.: "tela inicio" ou "componente BalanceCard" — ou "todas as telas"}}`.

### O que entregar

1. **Componentes de UI base** (`shared/ui`) que a tela usar, já acessíveis:
   - `Button` (pill, variantes primário/secundário/destrutivo), `Card`, `Chip` (valores de recarga), `BalanceText`, `TransactionItem`, `CardItem`, `Sheet`/bottom sheet, `EmptyState`, `BottomTabBar` (5 abas, Pagar central destacado).

2. **Tela completa** seguindo o wireframe e a IA do Prompt 02, com:
   - Layout fiel aos tokens; conteúdo de exemplo realista.
   - Integração com hooks de dados (`useSaldo`, `useExtrato`, `useCartoes`, etc.) usando React Query (mocke o `queryFn` se a API não existir).
   - Todos os **estados**: loading (skeleton), erro (mensagem PT-BR + "Tentar de novo"), vazio (ilustração + copy), sucesso.

3. **Acessibilidade** embutida (obrigatório):
   - `accessibilityRole`, `accessibilityLabel`, `accessibilityState`, `accessibilityHint` em PT-BR.
   - Alvos de toque ≥ 44pt; contraste AA; suporte a fonte ampliada.
   - Saldo lido por leitor de tela com semântica ("doze reais e cinquenta, não expira").

4. **Formatação**:
   - Dinheiro a partir de centavos inteiros via util `formatBRL`; datas em PT-BR.

### Padrões de código
- TypeScript estrito; sem `any`.
- Componentes pequenos e reutilizáveis; props tipadas.
- Sem cores/medidas mágicas — só tokens.
- Sem lógica de rede em componente de UI; isolada em hooks/`services`.
- Comentários só onde agregam; nomes em PT-BR/EN consistentes com o codebase.

### Critérios de aceite (Definition of Done)
- [ ] Usa exclusivamente os design tokens.
- [ ] Cobre loading/erro/vazio/sucesso (e offline quando aplicável).
- [ ] Passa critérios de acessibilidade AA (labels, contraste, toque).
- [ ] Microcopy no tom do Jaé.
- [ ] Tela de Pagar/QR nunca depende de rede para renderizar (usa cache).
- [ ] Tipos batem com os contratos descritos em `architecture.md`.

## Restrições
- Não introduza bibliotecas fora da stack sem justificar.
- Não hardcode segredos nem endpoints (use `config/`).
- Não quebre a estrutura de pastas definida na arquitetura.
