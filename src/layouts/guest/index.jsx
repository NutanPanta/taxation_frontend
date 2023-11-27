import { Outlet } from 'react-router-dom';
// mui
import { useTheme } from '@mui/material';
// styles
import {
  BackgroundBackdrop,
  GuestContainer,
  LogoContainer,
  LogoWrapper,
} from '../../styles/auth.styles';
// images
import Logo from '../../assets/images/logo.svg';
import BackgroundOverlay from '../../assets/images/layer.png';
// config
import { PATH_BEFORE_LOGIN } from '../../config';

// ----------------------------------------------------------------------

const GuestLayout = () => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <GuestContainer>
      <LogoContainer to={PATH_BEFORE_LOGIN}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </LogoContainer>

      <div className='d-flex flex-column h-100 w-100 min-vh-100 min-vw-100'>
        <BackgroundBackdrop
          theme={mode}
          backdrop={BackgroundOverlay}
          opacitylight={'0'}
          opacitydark={'0.9'}
        ></BackgroundBackdrop>
        <Outlet />
      </div>
    </GuestContainer>
  );
};

export default GuestLayout;
