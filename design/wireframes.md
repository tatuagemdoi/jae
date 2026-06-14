# Jaé — Wireframes

Wireframes de baixa fidelidade (ASCII) das 8 telas do protótipo, na ordem do app. Estrutura e hierarquia, não pixel-perfect. Referência: viewport ~390px. Componentes citados existem em `components.md`.

Legenda: `[ ]` botão · `(•)` radio/seleção · `▓` QR · `★` destaque · `≡` lista · `⌂ ↻ ☰ ◎ 𐰢` ícones de nav.

---

## 1. Onboarding — `onboarding`

```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│            Jaé              │  ← wordmark
│                             │
│       Vem ser Jaé           │  ← bordão (h1, branco)
│  O jeito mais simples de    │
│  pagar o transporte do Rio  │
│                             │
│                             │
│   [      Entrar       ]     │  ← botão pill
│        Criar conta          │  ← link
└─────────────────────────────┘
   (fundo azul · sem bottom nav)
```

---

## 2. Início — `inicio`

```
┌─────────────────────────────┐
│ Oi, Marcos 👋          🔔  │  ← app bar saudação
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Seu saldo               │ │
│ │ R$ 42,50   [Não expira]★│ │  ← card de saldo (azul)
│ │ VT do mês: R$ 88,00 ✓   │ │
│ └─────────────────────────┘ │
│                             │
│  [Recarregar][Pagar][Cartões]│ ← ações rápidas
│                             │
│ Último uso                  │
│ ┌─────────────────────────┐ │
│ │ BRT  Hoje 06:12  -4,30  │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ★ Clube Jaé  120 pts  › │ │  ← banner amarelo
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ ⌂Início ↻Extr [▓]Pagar ★Clube 𐰢│ ← bottom nav
└─────────────────────────────┘
```

---

## 3. Pagar — `pagar`

```
┌─────────────────────────────┐
│ ✕                           │  ← app bar imersiva
│                             │
│    Aproxime do validador    │  ← instrução (h2)
│                             │
│      ┌───────────────┐      │
│      │ ▓▓▓ ▓ ▓▓▓▓ ▓ │      │
│      │ ▓ Jaé ▓▓ ▓ ▓▓│      │  ← QR grande (≥240px)
│      │ ▓▓ ▓▓▓ ▓ ▓▓▓ │      │
│      └───────────────┘      │
│                             │
│       Tarifa: R$ 4,30       │
│   [BRT] [VLT] [Ônibus]      │  ← chips de modal
│   ⓘ Funciona sem internet   │
└─────────────────────────────┘
  Sucesso → overlay verde ✓ "Pode passar!" + som
  Erro    → "Não rolou. Tenta de novo?"
```

---

## 4. Recarregar — `recarregar`

```
┌─────────────────────────────┐
│ ‹  Recarregar               │  ← app bar c/ voltar
├─────────────────────────────┤
│ Você tem R$ 4,30            │
│                             │
│ Quanto quer adicionar?      │
│  [ R$10 ] [ R$20 ] [ R$50✓]│  ← chips de valor
│  [ R$100 ] [  Outro  ]      │
│                             │
│ Como quer pagar?            │
│  (•) PIX — cai na hora      │  ← método (PIX default)
│  ( ) Cartão de crédito      │
│  ( ) Boleto                 │
│                             │
│ Vai recarregar R$ 50 via PIX│
│   [   Recarregar agora   ]  │  ← CTA primário
└─────────────────────────────┘
   confirmar → toast "Recarga feita!" → volta p/ início
```

---

## 5. Extrato — `extrato`

```
┌─────────────────────────────┐
│ Extrato                  ⚲ │  ← app bar + filtro
├─────────────────────────────┤
│ [Período][Modal][Tipo]      │  ← chips de filtro
│                             │
│ ── Hoje ──────────────────  │
│ ↻ BRT     06:12    -R$4,30  │
│ ◎ VLT     08:40   [Gratuid.]│  ← gratuidade (amarela)
│ + Recarga 12:00  +R$50,00   │  ← crédito (verde)
│ ── Ontem ─────────────────  │
│ ↻ Ônibus  18:22    -R$4,30  │
│ ↻ BRT     07:05    -R$4,30  │
│        (rolar p/ mais)      │
├─────────────────────────────┤
│ ⌂ ↻Extrato● [▓] ★ 𐰢         │
└─────────────────────────────┘
```

---

## 6. Cartões — `cartoes`

```
┌─────────────────────────────┐
│ ‹  Meus cartões             │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Jaé virtual      Ativo  │ │  ← card azul
│ │ •••• 4821               │ │
│ └─────────────────────────┘ │
│  [Bloquear] [2ª via] [Cancel]│
│                             │
│ ┌─────────────────────────┐ │
│ │ Jaézinho  (infantil)    │ │  ← card amarelo
│ │ •••• 0917        Ativo   │ │
│ └─────────────────────────┘ │
│                             │
│   [   + Adicionar cartão  ] │
├─────────────────────────────┤
│ bottom nav                  │
└─────────────────────────────┘
  Cancelar/Bloquear → modal de confirmação
```

---

## 7. Clube — `clube`

```
┌─────────────────────────────┐
│ Clube Jaé                   │
├─────────────────────────────┤
│   120 pontos · Nível 2      │
│   ▓▓▓▓▓▓░░░░  faltam 30 pts │  ← progresso
│                             │
│ Missões                     │
│ ┌─────────────────────────┐ │
│ │ 5 viagens na semana 3/5 │ │
│ │ ▓▓▓░░  +50 pts          │ │
│ └─────────────────────────┘ │
│ Recompensas                 │
│ ┌─────────────────────────┐ │
│ │ R$5 de saldo  [Resgatar]│ │  ← pill amarela
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ ⌂ ↻ [▓] ★Clube● 𐰢           │
└─────────────────────────────┘
```

---

## 8. Perfil — `perfil`

```
┌─────────────────────────────┐
│ Perfil                      │
├─────────────────────────────┤
│ 👤 Roberto Silva            │
│    roberto@email.com        │
│                             │
│ Gratuidades                 │
│ [ Idoso · ativa ✓ ]★        │  ← badge amarela
│                             │
│ ┌─────────────────────────┐ │
│ │ ❓ Tá precisando de ajuda?│ │  ← card destaque
│ └─────────────────────────┘ │
│                             │
│ ≡ Configurações           › │
│ ≡ Modo simples / contraste › │
│ ≡ Esconder saldo          › │
│ [        Sair         ]     │  → onboarding
├─────────────────────────────┤
│ ⌂ ↻ [▓] ★ 𐰢Perfil●          │
└─────────────────────────────┘
```

---

*Wireframes de estrutura. Cores, raios e tipografia finais seguem `design-system.md`; comportamento e estados seguem `ui-specifications.md`.*
