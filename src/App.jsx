// styles
import { GlobalStylesPresets } from '@/styles';
// theme
import ThemeProvider from '@/theme';
// components
import { ScrollToTop, Snackbar, ThemeColorPresets } from '@components/index';
// routes
import Routes from '@/routes';
// contexts
import { SettingsProvider, SnackbarProvider } from '@contexts/index';
// guards
import { ErrorGuard, InitializeGuard } from '@guards/index';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <ThemeColorPresets>
          <SnackbarProvider>
            <ErrorGuard>
              <GlobalStylesPresets />
              <ScrollToTop />
              <Snackbar />
              <InitializeGuard>
                <Routes />
              </InitializeGuard>
            </ErrorGuard>
          </SnackbarProvider>
        </ThemeColorPresets>
      </ThemeProvider>
    </SettingsProvider>
  );
};

export default App;
