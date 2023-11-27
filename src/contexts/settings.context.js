import { createContext } from 'react';
// hooks
import { useLocalStorage } from '@hooks/index';
// utils
import getColorPresets, {
  colorPresets,
  defaultPreset,
} from '@utils/getColarPresets';
// config
import { defaultSettings } from '../config';

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onChangeBackgroundBlur: () => {},
  onToggleBackgroundBlur: () => {},
  onChangeColor: () => {},
  onResetSetting: () => {},
  setColor: defaultPreset,
  colorOption: [],
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeColorPresets: initialState.themeColorPresets,
    backgroundBlur: initialState.backgroundBlur,
  });

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeBackgroundBlur = (backgroundBlur) => {
    setSettings({
      ...settings,
      backgroundBlur: backgroundBlur,
    });
  };

  const onToggleBackgroundBlur = () => {
    setSettings({
      ...settings,
      backgroundBlur: !settings.backgroundBlur,
    });
  };

  const onChangeColor = (event) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        onToggleMode,
        // Background Blur
        onChangeBackgroundBlur,
        onToggleBackgroundBlur,
        // Color
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        // Reset Setting
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
