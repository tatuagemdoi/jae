# Prompt 04 — Alta Fidelidade (Protótipo Navegável Hi-Fi)

> Briefing reutilizável para gerar as **telas em alta fidelidade** e um **protótipo navegável** do app Jaé. Consolida marca, telas e navegação num único pedido. Os `{{campos}}` permitem focar em telas específicas.

---

## Papel

Você é **UI designer/engenheiro(a) de protótipo** especialista em interfaces fintech mobile. Gere telas hi-fi pixel-caprichadas e um protótipo navegável de app mobile (viewport ~390×844, moldura de celular), 100% fiel à identidade do Jaé.

## Entregável

Um **protótipo web navegável** (HTML único + CSS + JS, sem dependências de build) que simula o app mobile Jaé, com troca de telas via bottom-nav e ações. Fonte **Poppins (Google Fonts)** com fallback `system-ui`. Pronto para abrir no navegador e demonstrar.

## Identidade visual (fiel — não desvie)

### Cores
| Token | Hex | Uso |
|---|---|---|
| Azul primário | `#0B5FFF` | marca, botões primários, aba ativa |
| Amarelo destaque | `#FFD400` | gratuidade, destaques, aba Pagar (com texto grafite) |
| Grafite/ink | `#14171A` | texto principal |
| Fundo | `#F4F6FA` | background do app |
| Superfície | `#FFFFFF` | cards |
| Cinza neutro | `#6B7280` | texto secundário |
| Verde sucesso | `#16A34A` | confirmações |
| Vermelho erro | `#DC2626` | erros, ação destrutiva |

### Estilo
- Tipografia: **Poppins** (geométrica, amigável, arredondada). Saldo em peso bold e grande.
- **Cards com raio 18px**, **botões pill**, **sombras suaves**, visual fintech moderno, limpo e acessível.
- Amarelo `#FFD400` sempre com texto grafite `#14171A` (contraste).
- Logo: wordmark **"Jaé"** em sans arredondada.

### Tom de voz (microcopy)
Conversacional, encorajador, PT-BR, sem jargão. Use os bordões reais: **"Vem ser Jaé"**, **"Tá precisando de ajuda?"**, **"Seu saldo não expira"**.

## Telas a produzir (ordem e conteúdo)

1. **onboarding** — splash com wordmark "Jaé" + "Vem ser Jaé"; botão Entrar/Login. Fora da bottom-nav; ao entrar vai para `inicio`.
2. **inicio** — **saldo grande** com selo "não expira"; ações rápidas **Recarregar · Pagar · Cartões**; card "última viagem/último uso"; banner do **Clube Jaé**.
3. **pagar** — **QR Code grande** com "Aproxime do validador"; valor da tarifa; seletor de modal (BRT/VLT/ônibus).
4. **recarregar** — chips de valor **R$10/20/50/100 + Outro**; método **PIX · Cartão · Boleto**; botão **Confirmar** (→ volta para `inicio`).
5. **extrato** — transações **agrupadas por data**, com ícone do modal, valor e saldo; filtro.
6. **cartoes** — meus cartões (**Jaé virtual**, **Jaézinho**); ações **Bloquear · 2ª via · Adicionar cartão**.
7. **clube** — **pontos**, **nível/progresso** (barra), **missões**, **recompensas** resgatáveis.
8. **perfil** — dados do usuário, **gratuidades** (estudante/idoso/PCD), **"Tá precisando de ajuda?"**, configurações, **Sair**.

## Bottom nav (5 abas — `pagar` central em destaque)

`Início` · `Extrato` · **`Pagar` (QR, central, elevado, destacado)** · `Clube` · `Perfil`.
A aba Pagar é um botão circular/pill elevado, em destaque (azul ou amarelo), maior que as demais.

## Navegação do protótipo

- `onboarding` → (Entrar) → `inicio`.
- Ações rápidas do `inicio` → `recarregar`, `pagar`, `cartoes`.
- `recarregar` → (Confirmar) → volta para `inicio` (mostrar saldo atualizado e toast de sucesso verde).
- Bottom-nav troca entre `inicio · extrato · pagar · clube · perfil`.
- Estado de aba ativa visível (cor/realce).

---

## Sua tarefa

Gere o protótipo hi-fi navegável para: `{{telas em foco, ex.: "todas as 8 telas" ou "inicio + pagar + recarregar"}}`.

### Requisitos
- HTML/CSS/JS em **um arquivo**, sem build; Poppins via `<link>` do Google Fonts.
- Moldura de celular centralizada; troca de telas por JS (mostra/esconde seções).
- Conteúdo de exemplo **realista** (ex.: "Saldo R$ 23,50 · não expira", "BRT — Av. Brasil — R$ 4,30", "Olá, Ana 👋").
- Estados visíveis onde fizer sentido: sucesso da recarga (toast verde), vazio do extrato, aviso de gratuidade a vencer.
- **Acessível:** contraste AA, alvos ≥ 44px, foco visível, `aria-label` PT-BR nas abas e botões, semântica de saldo.
- Responsivo dentro da moldura; nada cortado com fonte ampliada.
- QR pode ser um SVG/placeholder estilizado (não precisa ser funcional).

### Critérios de aceite
- [ ] As 8 telas presentes e fiéis à descrição.
- [ ] Cores, raios (18px/pill) e tipografia (Poppins) exatos.
- [ ] Bottom-nav com Pagar central destacado e estado ativo.
- [ ] Fluxos de navegação funcionam (onboarding→inicio; recarregar→confirmar→inicio).
- [ ] Microcopy no tom do Jaé, com os bordões.
- [ ] Saldo com aviso "não expira"; gratuidades visíveis no Perfil.
- [ ] Acessibilidade AA (contraste, toque, aria, foco).

## Restrições
- Não use frameworks pesados nem CDN além do Google Fonts.
- Não invente cores fora da paleta nem telas fora da lista.
- Mantenha coerência com `architecture.md` e os wireframes do Prompt 02.
