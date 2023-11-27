import { useContext } from 'react';
import { SettingsContext } from '../contexts';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
