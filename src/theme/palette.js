import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const createGradient = (color1, color2) => {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
};

// SETUP COLORS
const PRIMARY = {
  lighter: alpha('#fb6900', 0.06),
  light: '#fff5eb',
  main: '#fb6900',
  dark: '#FB6900',
  darker: '#FB6900',
  5: '#FCFBFA',
  10: '#FCF9F7',
  25: '#FFF5F2',
  50: '#FFF0EB',
  100: '#FFE0D7',
  200: '#FFD1C3',
  300: '#FFC1B0',
  400: '#FFB19C',
  500: '#FEA188',
  600: '#FC9074',
  700: '#F97F5F',
  800: '#F66D49',
  900: '#FB6900',
  1000: '#D24C28',
  1100: '#B44021',
  1200: '#96341A',
  1300: '#792813',
  1400: '#5E1D0C',
  1500: '#431306',
  1600: '#2B0903',
  1700: '#140301',
  1800: '#030000',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: alpha('#0065FF', 0.06),
  light: '#0065FF',
  main: '#0065FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#3EB2680D',
  light: '#3EB268',
  main: '#01A63E',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#F5C452',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: alpha('#EB3223', 0.05),
  light: '#F20C0C',
  main: '#EB3223',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const INTITAL = {
  lighter: '#FFFFFF',
  light: '#E3E3E3',
  main: '#353535',
  dark: '#0D0D0D',
  darker: alpha('#626262', 0.08),
};

const GREY = {
  0: '#FFFFFF',
  10: '#F7F7F7',
  20: '#F2F2F2',
  25: '#F2F2F2',
  50: '#E3E3E3',
  75: '#FAFAFA',
  100: '#C8C8C8',
  200: '#ADADAD',
  300: '#939393',
  400: '#7A7A7A',
  500: '#626262',
  600: '#4B4B4B',
  700: '#353535',
  800: '#202020',
  900: '#0D0D0D',
  500_8: alpha('#626262', 0.08),
  500_12: alpha('#626262', 0.12),
  500_16: alpha('#626262', 0.16),
  500_24: alpha('#626262', 0.24),
  500_32: alpha('#626262', 0.32),
  500_48: alpha('#626262', 0.48),
  500_56: alpha('#626262', 0.56),
  500_80: alpha('#626262', 0.8),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const SEVERITY_COLORS = {
  critical: '#F20C0C',
  high: '#FF6A00',
  medium: '#FFAB00',
  low: '#36B37E',
  info: '#0065FF',
  unknown: '#809CFF',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  severity: {
    critical: alpha(SEVERITY_COLORS.critical, 0.05),
    high: alpha(SEVERITY_COLORS.high, 0.05),
    medium: alpha(SEVERITY_COLORS.medium, 0.05),
    low: alpha(SEVERITY_COLORS.low, 0.05),
    info: alpha(SEVERITY_COLORS.info, 0.05),
    unknown: alpha(SEVERITY_COLORS.unknown, 0.05),
  },
};

const COLORS = {
  blue: '#0065FF',
  purple: '#6554C0',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  intital: { ...INTITAL, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  severity: SEVERITY_COLORS,
  colors: COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[700], secondary: GREY[600], disabled: GREY[500] },
    background: {
      paper: '#fff',
      default: '#FAFAFA',
      stripe: '#FCFCFC',
      gradient:
        'linear-gradient(90deg, rgba(255, 240, 235, 0.3) 1.36%, rgba(255, 209, 195, 0.5) 100%)',
      neutral: GREY[200],
    },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[500] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
