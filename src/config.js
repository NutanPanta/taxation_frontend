// routes
import { PATH_AUTH, PATH_DASHBOARD } from './routes/paths.js';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_END_POINT;
export const NODE_ENV = process.env.NODE_ENV || 'production';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_BEFORE_LOGIN = PATH_AUTH.root;
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.home;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MAIN_DESKTOP_HEIGHT: 76,
};

export const NAVBAR = {
  BASE_WIDTH: 250,
  DASHBOARD_WIDTH: 300,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS

export const defaultSettings = {
  themeMode: 'light',
  themeColorPresets: 'default',
  backgroundBlur: false,
};
