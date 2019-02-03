import Typography from 'typography';

export const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 2.4,
  headerFontFamily: [
    'Fira Mono',
    'Consolas',
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    'Arial',
    'sans-serif'
  ],
  headerWeight: 700,
  bodyFontFamily: [
    'Fira Mono',
    'Consolas',
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    'Arial',
    'sans-serif'
  ],
  googleFonts: [
    {
      name: 'Fira Mono',
      styles: ['400', '700']
    }
  ]
});
