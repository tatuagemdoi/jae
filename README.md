# Jaé — Redesign Kit

Cópia editável da landing page da Jaé + design tokens da identidade visual,
para uso no redesign do app.

> ⚠️ Material de marca da Jaé. Use como base de trabalho **para a Jaé**.
> Não republicar como criação própria.

## Estrutura

```
jae-redesign/
├── style-guide.html      ← folha visual: logo, paleta, tipografia, componentes
├── landing/
│   ├── index.html        ← cópia fiel da landing (abre offline, editável)
│   └── assets/           ← CSS, fontes, imagens e logo (100 arquivos, locais)
└── design-tokens/
    ├── tokens.css        ← CSS variables (cores, tipografia, espaçamento…)
    ├── tokens.json       ← mesmos tokens em JSON (Style Dictionary etc.)
    └── tailwind.config.js← preset Tailwind pronto (cores jae-*, fontes, raios)
```

## Style guide

Abra `style-guide.html` no navegador — é a apresentação visual da identidade
(logo em positivo/negativo, paleta com hex, escala tipográfica, botões e
estados). Bom para alinhar com o time/cliente antes do redesign.

## Landing page

- Abra `landing/index.html` direto no navegador — tudo carrega local.
- É o HTML real do site (tema Avada/WordPress), com os caminhos reescritos
  para `assets/`. Edite à vontade para testar alterações.
- Links de navegação (menu, central de ajuda, app.jae.com.br) ainda apontam
  para o site real — são links, não afetam o visual.

## Design tokens (para o app)

Use `tokens.css` como base do redesign:

```html
<link rel="stylesheet" href="design-tokens/tokens.css">
```
```css
.botao-primario {
  background: var(--color-primary);     /* verde Jaé #65bc7b */
  color: var(--color-text-inverse);
  font-family: var(--font-body);        /* Montserrat */
  border-radius: var(--radius-pill);
  padding: var(--space-3) var(--space-6);
}
```

### Resumo da identidade
| Token | Valor |
|---|---|
| Primária (verde) | `#65BC7B` |
| Secundária (amarelo) | `#FFC107` |
| Acento (turquesa) | `#2ED5C4` |
| Texto | `#232323` |
| Display / logo | Comfortaa |
| Títulos + corpo | Montserrat (400/500/700/800) |

O `tokens.json` segue o padrão de design tokens — dá para importar em
Style Dictionary, gerar tema Tailwind ou plugar no código do app direto.

## React Native (app)

- `design-tokens/theme.ts` — tokens tipados (cores, tipografia, spacing,
  radius, shadow com `elevation` p/ Android) + escala `typography` pronta.
- `app/components/` — kit de componentes-base da marca:
  `Button`, `Card`, `Input`, `Pill`, `TabBar`, `ListItem`.
- `app/*.example.tsx` — telas de exemplo: `LoginScreen`, `HomeScreen`,
  `CardScreen`, `ProfileScreen`.
- `app-preview.html` — **mockup visual** das 4 telas lado a lado (abra no
  navegador pra ver o resultado sem precisar rodar o RN).

```tsx
import { colors, typography, radius } from './design-tokens/theme';
<Text style={typography.h1}>Vem ser Jaé</Text>
```

⚠️ **Fontes:** bundle Comfortaa e Montserrat no app (ex.: `expo-font`) usando
os nomes em `fontFamily` do `theme.ts` — RN não tem as fontes da marca por padrão.
