/**
 * Jaé — Design tokens para React Native.
 * Gerado a partir da identidade visual oficial (jae.com.br).
 *
 * Fontes: bundle os arquivos e use exatamente estes postscript names.
 *   Comfortaa-Bold / Comfortaa-Regular   (display / logo)
 *   Montserrat-Regular/Medium/Bold/ExtraBold (corpo / títulos)
 *   → expo-font:  useFonts({ 'Montserrat-Bold': require('...') })
 */

export const colors = {
  // primitivas
  green:  { 50: '#eaf6ed', 100: '#cfead6', 300: '#9bd4a8', 500: '#65bc7b', 700: '#4a9a5e', 900: '#2f6b3d' },
  amber:  { main: '#ffc107', deep: '#ffaf00', darker: '#f5ac13' },
  teal:   '#2ed5c4',
  ink:    { 900: '#232323', 800: '#2c2d33', 700: '#2d2d2d', 600: '#303030' },
  gray:   { 500: '#404040', 300: '#e2e2e2' },
  black:  '#000000',
  white:  '#ffffff',

  // semânticas
  primary:      '#65bc7b',
  primaryHover: '#4a9a5e',
  secondary:    '#ffc107',
  accent:       '#2ed5c4',
  bg:           '#ffffff',
  bgInverse:    '#000000',
  surface:      '#ffffff',
  surfaceMuted: '#eaf6ed',
  text:         '#232323',
  textMuted:    '#404040',
  textInverse:  '#ffffff',
  border:       '#e2e2e2',
  success:      '#65bc7b',
  warning:      '#ffc107',
} as const;

export const fontFamily = {
  displayRegular: 'Comfortaa-Regular',
  displayBold:    'Comfortaa-Bold',
  regular:        'Montserrat-Regular',
  medium:         'Montserrat-Medium',
  bold:           'Montserrat-Bold',
  extra:          'Montserrat-ExtraBold',
} as const;

export const fontSize = {
  xs: 12, sm: 14, base: 16, md: 20, lg: 25, xl: 31, '2xl': 39, '3xl': 49,
} as const;

export const lineHeight = { tight: 1.15, normal: 1.5, relaxed: 1.7 } as const;

export const spacing = {
  1: 4, 2: 8, 3: 12, 4: 16, 6: 24, 8: 32, 12: 48, 16: 64, 24: 96,
} as const;

export const radius = { sm: 8, md: 16, lg: 24, pill: 999 } as const;

// sombras: iOS usa shadow*, Android usa elevation — ambos inclusos
export const shadow = {
  sm: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 3,  shadowOffset: { width: 0, height: 1 }, elevation: 2 },
  md: { shadowColor: '#000', shadowOpacity: 0.10, shadowRadius: 20, shadowOffset: { width: 0, height: 6 }, elevation: 6 },
  lg: { shadowColor: '#000', shadowOpacity: 0.14, shadowRadius: 40, shadowOffset: { width: 0, height: 16 }, elevation: 12 },
} as const;

// escala tipográfica pronta (TextStyle) — use como <Text style={typography.h1}>
export const typography = {
  display: { fontFamily: fontFamily.displayBold, fontSize: fontSize['3xl'] },
  h1:      { fontFamily: fontFamily.extra,       fontSize: fontSize['2xl'] },
  h2:      { fontFamily: fontFamily.bold,        fontSize: fontSize.xl },
  h3:      { fontFamily: fontFamily.bold,        fontSize: fontSize.lg },
  body:    { fontFamily: fontFamily.regular,     fontSize: fontSize.base },
  small:   { fontFamily: fontFamily.medium,      fontSize: fontSize.sm, color: colors.textMuted },
} as const;

export const theme = { colors, fontFamily, fontSize, lineHeight, spacing, radius, shadow, typography };
export default theme;
