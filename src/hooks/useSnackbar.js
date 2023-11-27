import { useContext } from 'react';
// context
import { SnackbarContext } from '../contexts';

// ----------------------------------------------------------------------

const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context)
    throw new Error('Snackbar context must be use inside SnackbarProvider');

  return context;
};

export default useSnackbar;
