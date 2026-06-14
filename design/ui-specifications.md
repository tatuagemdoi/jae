# Jaé — Especificações de UI

Especificações de implementação: grid, layout, estados, microinterações e responsividade. Consome os tokens de `design-system.md`. Alvo primário: **mobile** (app nativo / protótipo web mobile).

---

## 1. Grid e layout

- **Viewport de referência:** 390×844 (iPhone 12/13). Faixa suportada: 320–430px de largura.
- **Gutter lateral:** 16px (`--space-4`) constante.
- **Coluna única** de conteúdo; cards ocupam largura total menos gutters.
- **Grade base:** 4px. Todos os espaçamentos verticais e internos são múltiplos de 4.
- **Safe areas:** respeitar notch (topo) e home indicator (base). Bottom nav adiciona padding-bottom = safe area inferior.
- **Hierarquia vertical da home:** saldo (peso máximo) → ações → último uso → Clube. O elemento mais importante fica acima da dobra.

### Zonas de toque
- Polegar alcança facilmente o terço inferior — por isso CTAs de fluxo e bottom nav ficam embaixo.
- A aba **Pagar** (centro-base) é o ponto mais ergonômico — coerente com "embarque acima de tudo".

---

## 2. Especificação do bottom nav

- Altura 64px + safe area. Fundo `--jae-surface`, `--shadow-nav`.
- 5 slots de largura igual; ícone 28px + label 14px (`--text-label`).
- FAB Pagar: círculo ~64px, `--jae-blue`, ícone QR branco, sobe ~16px acima da barra, `--shadow-lg`.
- Ativo: `--jae-blue` (ícone preenchido + label). Inativo: `--jae-gray`.

---

## 3. Estados padrão de cada elemento

Todo elemento interativo especifica:

| Estado | Tratamento visual |
|---|---|
| Repouso | Token base do componente. |
| Hover (web) | Leve escurecimento/elevação (+`--shadow-sm`). |
| Pressionado | Scale 0.97–0.98 + cor `:active` (ex. `--jae-blue-700`). |
| Foco (teclado/leitor) | Anel 2px `--jae-blue`, offset 2px. |
| Desabilitado | Opacidade 40%, sem sombra, sem ponteiro. |
| Carregando | Skeleton shimmer ou spinner; largura travada para não saltar layout. |
| Erro | Borda/texto `--jae-error` + mensagem de gente. |
| Sucesso | `--jae-success` + ícone check + (no embarque) som. |
| Vazio | Ilustração leve + frase encorajadora + CTA. |

### Estados críticos por tela
- **Saldo:** normal / baixo / zerado / oculto / carregando.
- **QR (pagar):** gerando / pronto / sucesso (verde+som) / erro / offline / gratuidade.
- **Recarga:** selecionando / confirmando / creditado (toast) / falha PIX.
- **Gratuidade:** ativa / vence em breve / vencida / em análise.

---

## 4. Microinterações

Suaves, curtas, nunca no caminho do embarque.

| Interação | Comportamento | Duração |
|---|---|---|
| Abertura do QR | Fade-in + brilho de tela sobe automaticamente | < 300ms (QR pronto < 2s total) |
| Catraca aprovada | Overlay verde expande do centro + check + som + leve haptic | ~600ms |
| Catraca recusada | Shake horizontal sutil + overlay erro | ~400ms |
| Recarga creditada | Saldo na home faz count-up até o novo valor + toast | ~800ms |
| Seleção de chip | Preenche fundo + check, scale-in | 150ms |
| Botão pressionado | Scale-down 0.98 | 100ms |
| Card de saldo carregando | Shimmer skeleton | loop até dado |
| Pull-to-refresh (extrato) | Spinner Jaé azul | até resposta |
| Sheet/modal | Slide-up + scrim fade | 250ms |
| Badge "vence em breve" | Pulso suave de atenção (1x ao abrir) | 1s |

**Regra:** com `prefers-reduced-motion`, todas as animações viram fade simples ou são removidas. O sucesso do embarque mantém o sinal redundante (cor + som + texto) sem depender de movimento.

---

## 5. Tipografia aplicada

- Saldo e tarifa: `--text-display`, tabular-nums, sem quebra.
- Títulos de tela: `--text-h2`, peso 600.
- Itens de lista: título `--text-body`, valor `--text-body-strong`, metadado `--text-caption`.
- Botões: `--text-label` (14/500) ou `--text-body-strong` em CTAs primários.
- Nunca abaixo de 12px. Corpo nunca abaixo de 16px.

---

## 6. Cor e contraste na prática

- Texto sobre azul → branco; sobre amarelo → grafite (regra dura).
- Status sempre = cor + ícone + texto (sol forte / daltonismo / Roberto).
- Modais no extrato: cor da sigla conforme tabela de modais; sigla textual sempre presente.
- Saldo baixo/zerado usa `--jae-error` com parcimônia, sempre com CTA encorajador (sem alarmismo).

---

## 7. Responsividade mobile

| Largura | Ajuste |
|---|---|
| 320–359px (pequeno) | Ações rápidas podem empilhar 2+1; chips de valor 2 por linha; saldo reduz para `--text-h1`. |
| 360–430px (padrão) | Layout de referência; ações rápidas em linha de 3; chips 3 por linha. |
| > 430px / tablet | Conteúdo centralizado com largura máx. ~480px; sem esticar cards. |
| Fonte do sistema aumentada | Layout flui em coluna, sem corte; botões crescem em altura, nunca truncam label. |
| Paisagem | Suportado em pagar (QR centralizado); demais telas mantêm coluna rolável. |

- **Imagens/ícones:** vetoriais (SVG) para nitidez em qualquer densidade.
- **Toque:** alvos ≥ 48px mantidos em todas as larguras.

---

## 8. Performance e percepção

- **QR pronto < 2s** (meta da visão): pré-gerar/cachear; mostrar skeleton, nunca tela branca.
- **Skeletons** para saldo e listas em vez de spinners de tela cheia.
- **Offline-first no embarque:** QR válido sem rede; banner discreto informa modo offline.
- **Otimização de dados (Marcos):** assets leves, sem vídeos pesados na home.

---

## 9. Acessibilidade de implementação

- Rótulos de leitor de tela em todos os ícones (ex. botão Pagar = "Pagar com QR Code").
- Ordem de foco lógica (topo→base, esquerda→direita).
- Alvos de toque e contraste conforme `design-system.md` §7.
- Confirmação de embarque com feedback redundante (visual + sonoro + háptico).
- "Modo simples": reduz a home às 3 ações essenciais e aumenta a tipografia (diretriz para o Roberto).

---

*Implementação fiel a estes specs garante coerência com a marca e com as metas da visão (QR < 2s, PIX < 10s, embarque > 99%).*
