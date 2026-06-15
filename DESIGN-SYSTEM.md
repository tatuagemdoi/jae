# JAE Redesign

Projeto de reformulação da plataforma Jaé.

---

## Design System Kit (tokens + componentes RN)

Kit de identidade visual e componentes adicionado ao projeto, extraído da
identidade oficial da Jaé (jae.com.br).

```
design-tokens/         tokens da marca em 4 formatos
├── tokens.css         CSS variables (cores, tipografia, espaçamento…)
├── tokens.json        mesmos tokens em JSON (Style Dictionary etc.)
├── tailwind.config.js preset Tailwind (cores jae-*, fontes, raios)
└── theme.ts           tokens tipados p/ React Native (+ shadow/elevation)

app/                   kit React Native
├── components/        Button · Card · Input · Pill · TabBar · ListItem
└── *.example.tsx      telas: Login · Home · Card · Profile

style-guide.html       folha visual: logo, paleta, tipografia, componentes
app-preview.html       mockup das 4 telas do app (abre no navegador)
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

### Uso (React Native)
```tsx
import { colors, typography, radius } from './design-tokens/theme';
<Text style={typography.h1}>Vem ser Jaé</Text>
```
⚠️ Bundle as fontes **Comfortaa** e **Montserrat** (ex.: `expo-font`) com os
nomes em `fontFamily` do `theme.ts` — RN não traz essas fontes por padrão.

> A cópia espelhada do site jae.com.br é mantida apenas localmente, fora do
> versionamento (ver `.gitignore` e `NOTICE.md`).

---

## Unificação com o `prototype/`

O repositório tinha **dois** sistemas visuais conflitantes: o `prototype/` (HTML)
era **azul** (`#0B5FFF`), enquanto a identidade real da Jaé é **verde**
(`#65BC7B`, confirmado no CSS de jae.com.br). Decisão: **verde oficial** como
fonte única da verdade.

**Fonte única da verdade:** `design-tokens/` (cores, tipografia, raios, sombras).
Todo o resto (RN e protótipo) deve refletir esses valores.

O `prototype/` foi **realinhado** ao verde oficial:
- `--blue*` → `--primary*` (verde `#65BC7B` / hover `#4A9A5E` / tint `#EAF6ED`)
- amarelo `#FFD400` → `#FFC107`; tinta `#14171A` → `#232323`
- `--shadow-blue` → `--shadow-brand` (glow verde)
- fonte **Poppins** → **Montserrat** + **Comfortaa** (display)
- `--green` permanece como cor de **sucesso** (distinta da marca)

### Mapa: telas do protótipo ↔ componentes RN
| `prototype/screens/` | Tela RN (`app/`) | Componentes |
|---|---|---|
| `inicio.html` | `HomeScreen` ✅ | Card, Pill, Button, Input, TabBar |
| `cartoes.html` | `CardScreen` ✅ | Card, Pill, Button |
| `perfil.html` | `ProfileScreen` ✅ | Card, ListItem, Pill |
| `recarregar.html` | (parcial no Home) | Card, Input, Button |
| `onboarding.html` | *(a fazer)* | Button |
| `pagar.html` | *(a fazer)* | Card, Button |
| `extrato.html` | *(a fazer)* | Card, ListItem |
| `clube.html` | *(a fazer)* | Card, Pill, Button |

`LoginScreen` (RN) não tem equivalente no protótipo — é tela nova.
