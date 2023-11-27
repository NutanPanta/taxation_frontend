import { useEffect, useState } from 'react';
// mui
import { LinearProgress, Box, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '@features/auth/redux/auth.slice';
// images
import Logo from '@assets/images/logo.svg';
import GreyLogo from '@assets/images/logo_grey.svg';
// ----------------------------------------------------------------------

const LoadingScreen = ({ isDashboard, isAuth = false }) => {
  const dispatch = useDispatch();

  const [changeFillColor, setChangeFillColor] = useState(false);

  const [activeBox, setActiveBox] = useState(-1);

  const currentUserDetails = useSelector((state) => state.auth);

  useEffect(() => {
    const changeSvgColor = setInterval(() => {
      setChangeFillColor(true);
    }, 500);

    return () => {
      clearInterval(changeSvgColor);
    };
  }, []);

  useEffect(() => {
    const activeBoxInterval = setInterval(() => {
      setActiveBox((prev) => {
        return prev === 3 ? 0 : prev + 1;
      });
    }, 700);

    return () => {
      clearInterval(activeBoxInterval);
    };
  }, []);

  useEffect(() => {
    if (activeBox === 3 && currentUserDetails?.isInitialized) {
      dispatch(
        initialize({
          ...currentUserDetails,
          isLoadingScreenLoaded: true,
        })
      );
    }
  }, [activeBox]);

  return (
    <Box
      sx={{
        bottom: '0',
        right: '0',
        top: '0',
        left: '0',
        width: '100%',
        position: 'absolute',
      }}
    >
      {!isAuth && (
        <Box
          sx={{
            width: isDashboard && '20%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            svg: {
              animation: 'scaleAnimation 1s 500ms forwards',
            },

            '@keyframes scaleAnimation': {
              from: {
                transform: 'scale(1)',
              },
              to: {
                transform: 'scale(1.5)',
              },
            },
          }}
        >
          {!isDashboard && !changeFillColor ? (
            <GreyLogo />
          ) : !isDashboard && changeFillColor ? (
            <Logo />
          ) : (
            <LinearProgress color='inherit' />
          )}
        </Box>
      )}
    </Box>
  );
};

export default LoadingScreen;
