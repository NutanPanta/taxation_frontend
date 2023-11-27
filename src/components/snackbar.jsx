import { useMemo } from 'react';
// mui
import { Snackbar as SnackbarComponent, Slide } from '@mui/material';
// hooks
import { useSnackbar } from '@hooks/index';

// ----------------------------------------------------------------------

const Snackbar = () => {
  const { value } = useSnackbar();

  const SlideTransition = (props) => {
    return <Slide {...props} direction='up' />;
  };

  const currentMessage = useMemo(() => value?.message, [value?.message]);

  const messageAvailabel = Boolean(currentMessage);

  return (
    <SnackbarComponent
      open={messageAvailabel}
      onClose={() => !messageAvailabel}
      TransitionComponent={SlideTransition}
      key={SlideTransition.name}
      message={currentMessage}
    />
  );
};

export default Snackbar;
