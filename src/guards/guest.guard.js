import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// components
import { LoadingScreen } from '@components/index';
// config
import { PATH_AFTER_LOGIN } from '@/config';

// ----------------------------------------------------------------------

const GuestGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useSelector((state) => state.auth);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    return <Navigate to={PATH_AFTER_LOGIN} />;
  }

  return children;
};

export default GuestGuard;
