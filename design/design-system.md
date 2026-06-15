# Jaé — Design System

> "Vem ser Jaé." Este é o documento-fonte dos fundamentos visuais e de interação do app Jaé — a bilhetagem digital oficial do transporte do Rio. Tudo aqui serve a três pessoas: o **Marcos** na catraca em horário de pico, a **Ana** renovando a gratuidade pelo celular e o **Roberto** que precisa enxergar e confiar.

Os tokens deste arquivo são a fonte da verdade. Componentes (`components.md`), telas (`screens.md`) e o protótipo consomem estes valores — não inventam cores, raios ou espaçamentos novos.

---

## 1. Princípios de design

Derivados diretamente dos princípios de produto da visão. Quando houver conflito, **embarque vence**.

1. **Embarque acima de tudo.** A tela do QR Code é sagrada. Contraste sob sol forte, alvo de toque enorme, zero distração. Nenhum token (sombra, animação, banner) pode atrasar quem está na catraca.
2. **Saldo é tranquilidade.** O saldo é o maior número da home. O selo "não expira" é parte do componente de saldo, não um detalhe.
3. **Fala de gente.** Microcopy conversacional, encorajadora, em PT-BR próximo. Erros explicam e oferecem saída — nunca "Erro 0x04".
4. **Justiça é função.** Gratuidades (estudante, idoso, PCD) e VT têm linguagem visual digna — o amarelo Jaé, não um cinza de exceção.
5. **Acessível para o Rio inteiro.** Contraste AA mínimo, alvos de 48px, tipografia legível, modo simples possível. O Roberto é o piso de usabilidade.
6. **Transparência.** Cada movimento de dinheiro tem cor, ícone e horário. Verde credita, vermelho debita/erro, sempre rastreável.

---

## 2. Cores

### 2.1 Paleta de marca

| Token | Hex | Uso |
|---|---|---|
| `--jae-blue` | `#0B5FFF` | Cor primária. Ações principais, navegação ativa, links, header. A identidade Jaé. |
| `--jae-yellow` | `#FFD400` | Destaque e gratuidade. Banner do Clube, badges de gratuidade/VT, selo "não expira", aba Pagar central. Sempre com texto grafite por cima (nunca branco). |
| `--jae-ink` | `#14171A` | Texto principal, títulos, números de saldo. Grafite quase preto. |
| `--jae-bg` | `#F4F6FA` | Fundo de tela. Cinza-azulado claro que faz os cards brancos "flutuarem". |
| `--jae-surface` | `#FFFFFF` | Superfície de cards, modais, bottom nav, campos. |
| `--jae-gray` | `#6B7280` | Texto secundário, legendas, ícones inativos, placeholders, divisores. |
| `--jae-success` | `#16A34A` | Sucesso. Recarga creditada, embarque OK, status "aprovado". |
| `--jae-error` | `#DC2626` | Erro e atenção crítica. Falha, saldo zerado, gratuidade vencida, ação destrutiva. |

### 2.2 Tons derivados (gerados a partir da paleta; nunca cores avulsas)

| Token | Valor | Uso |
|---|---|---|
| `--jae-blue-700` | `#0A4FD6` | Estado `:active`/pressionado do azul. |
| `--jae-blue-50` | `#E7EFFF` | Fundo de chip selecionado, container informativo azul. |
| `--jae-yellow-50` | `#FFF8DB` | Fundo de badge de gratuidade, container do Clube. |
| `--jae-success-50` | `#E8F7EE` | Fundo de toast/linha de crédito. |
| `--jae-error-50` | `#FDECEC` | Fundo de alerta/erro, container de gratuidade vencida. |
| `--jae-ink-60` | `rgba(20,23,26,.60)` | Texto de menos ênfase que `--jae-gray`. |
| `--jae-border` | `#E5E8EF` | Bordas de 1px de cards, campos e divisores. |
| `--jae-overlay` | `rgba(20,23,26,.48)` | Scrim atrás de modais e bottom sheets. |

### 2.3 Cores por modal (extrato e tela Pagar)

Cada modal municipal tem cor de ícone consistente, sempre apoiada por rótulo de texto (cor nunca é o único sinal).

| Modal | Sigla | Cor de ícone |
|---|---|---|
| BRT | BRT | `--jae-blue` |
| VLT | VLT | `#0EA5A5` (teal) |
| Ônibus | SPPO | `--jae-ink` |
| Vans | STPL | `--jae-gray` |
| Cabritinhos | STPC | `#7C3AED` (roxo) |

> Cores de modal são tokens fechados; não se criam outras fora desta tabela.

### 2.4 Regras de contraste

- Texto sobre `--jae-blue`: sempre branco (`#FFFFFF`).
- Texto sobre `--jae-yellow`: sempre `--jae-ink` — **nunca branco**.
- Texto corpo sobre `--jae-bg`/`--jae-surface`: `--jae-ink` ou `--jae-gray` (secundário).
- Sucesso/erro nunca dependem só da cor: acompanham ícone + texto.

---

## 3. Tipografia

**Família:** Poppins (Google Fonts) — geométrica, arredondada, amigável. Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

```
--font-family: "Poppins", system-ui, -apple-system, Roboto, sans-serif;
```

### Escala (mobile, base 16px / 1rem)

| Token | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|
| `--text-display` | 40px | 700 | 1.1 | Saldo na home, valor da tarifa no QR. |
| `--text-h1` | 28px | 700 | 1.2 | Título de tela grande / valor em recarga. |
| `--text-h2` | 22px | 600 | 1.25 | Títulos de seção, título do app bar. |
| `--text-h3` | 18px | 600 | 1.3 | Subtítulos, nome do cartão, título de card. |
| `--text-body` | 16px | 400 | 1.5 | Texto corrido, itens de lista. Mínimo de corpo. |
| `--text-body-strong` | 16px | 600 | 1.5 | Ênfase em corpo, valores em lista. |
| `--text-label` | 14px | 500 | 1.4 | Rótulos de botão, chips, legendas de nav. |
| `--text-caption` | 12px | 500 | 1.4 | Metadados, horário, hint. **Piso absoluto.** |

### Regras
- Pesos: 400, 500, 600, 700. Sem light (300) — prejudica leitura ao sol.
- Saldo/tarifa usam `font-variant-numeric: tabular-nums`.
- Sem ALL CAPS em frases; só em siglas de modal (BRT, VLT).
- Títulos curtos. O Roberto não lê parágrafos.

---

## 4. Espaçamento

Grade base **4px**.

| Token | Valor | | Token | Valor |
|---|---|---|---|---|
| `--space-1` | 4px | | `--space-5` | 20px |
| `--space-2` | 8px | | `--space-6` | 24px |
| `--space-3` | 12px | | `--space-8` | 32px |
| `--space-4` | 16px | | `--space-10` | 40px |

- **Gutter de tela:** 16px. **Entre cards:** 12–16px. **Padding de card:** 20px.
- **Altura do bottom nav:** 64px + safe area inferior.

---

## 5. Raios

| Token | Valor | Uso |
|---|---|---|
| `--radius-card` | 18px | Cards, modais, containers. |
| `--radius-input` | 14px | Campos, dropdowns. |
| `--radius-chip` | 12px | Chips de valor, badges. |
| `--radius-pill` | 999px | Botões (pill), abas, toggles. |
| `--radius-qr` | 24px | Card do QR Code (o mais arredondado). |

---

## 6. Sombras (elevação)

Suaves, difusas, de tom azulado — nada de preto duro.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(11,95,255,.06)` | Cards em repouso. |
| `--shadow-md` | `0 6px 16px rgba(11,95,255,.10)` | Card de saldo, card do QR, foco. |
| `--shadow-lg` | `0 12px 32px rgba(20,23,26,.16)` | Modais, sheets, FAB Pagar. |
| `--shadow-nav` | `0 -4px 16px rgba(20,23,26,.06)` | Sombra superior do bottom nav. |

---

## 7. Acessibilidade (não-negociável)

- **Alvos de toque:** mínimo **48×48px**; ações primárias ≥ 56px de altura.
- **Contraste:** texto normal AA (4.5:1), grande AA (3:1). Amarelo+branco proibido.
- **Cor nunca sozinha:** todo status carrega ícone + texto.
- **Tipografia mínima:** corpo 16px; legenda 12px.
- **Foco visível:** anel 2px `--jae-blue`, offset 2px.
- **Movimento:** respeitar `prefers-reduced-motion`; o QR nunca depende de animação.
- **Embarque redundante:** confirmação de catraca = tela verde + som (pensado para o Roberto).
- **Linguagem:** PT-BR claro, frases curtas. Erros dizem o que houve e o que fazer.
- **Modo simples:** layouts toleram aumento de fonte do sistema; home pode reduzir às 3 ações essenciais.

---

## 8. Iconografia

- Estilo **outline**, traço ~2px, cantos arredondados (coerente com Poppins).
- Tamanhos: 24px (padrão), 28px (nav), 20px (inline em lista).
- Cor herda do contexto: `--jae-gray` inativo, `--jae-blue` ativo, branco sobre azul.
- Ícones de modal acompanham SEMPRE a sigla em texto.

---

*Documento vivo. Qualquer cor, raio ou espaçamento usado no produto deve existir nesta página.*
