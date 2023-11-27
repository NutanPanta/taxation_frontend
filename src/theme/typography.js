import { pxToRem, responsiveFontSizes } from '@utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Raleway, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h3Semi: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 26, lg: 28 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h4Semi: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 20 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(21),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(20),
  },
  subtitle3: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(18),
  },
  subtitle4: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(16),
  },
  subtitle5: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(22),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(20),
  },
  body3: {
    lineHeight: pxToRem(26),
    fontSize: pxToRem(18),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    textTransform: 'uppercase',
  },
  sideInfo: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(14),
  },
  sideInfo1: {
    fontWeight: 500,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(14),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
    textTransform: 'capitalize',
  },
};

export default typography;
