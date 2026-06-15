/** Jaé — Tailwind preset gerado a partir dos design tokens.
 *  Uso: import jaePreset from './design-tokens/tailwind.config.js'
 *       export default { presets: [jaePreset], content: [...] }
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        jae: {
          green:   { DEFAULT: '#65bc7b', 50: '#eaf6ed', 100: '#cfead6', 300: '#9bd4a8', 700: '#4a9a5e', 900: '#2f6b3d' },
          amber:   { DEFAULT: '#ffc107', deep: '#ffaf00', darker: '#f5ac13' },
          teal:    '#2ed5c4',
          ink:     { DEFAULT: '#232323', 800: '#2c2d33', 700: '#2d2d2d', 600: '#303030' },
          gray:    { DEFAULT: '#404040', light: '#e2e2e2' },
        },
        // aliases semânticos
        primary:   '#65bc7b',
        secondary: '#ffc107',
        accent:    '#2ed5c4',
      },
      fontFamily: {
        display: ['Comfortaa', 'Montserrat', 'sans-serif'],
        sans:    ['Montserrat', 'Roboto', 'system-ui', 'sans-serif'],
      },
      fontWeight: { regular: '400', medium: '500', bold: '700', extra: '800' },
      fontSize: {
        xs: '12px', sm: '14px', base: '16px', md: '20px',
        lg: '25px', xl: '31px', '2xl': '39px', '3xl': '49px',
      },
      borderRadius: { sm: '8px', md: '16px', lg: '24px', pill: '999px' },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,.08)',
        md: '0 6px 20px rgba(0,0,0,.10)',
        lg: '0 16px 40px rgba(0,0,0,.14)',
      },
      spacing: { // múltiplos extras de 4px além do padrão do Tailwind
        '18': '4.5rem', '22': '5.5rem',
      },
    },
  },
};
