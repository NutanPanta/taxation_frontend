import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// components
import { LoadingScreen } from '@components/index';
// config
import { PATH_AFTER_LOGIN, PATH_BEFORE_LOGIN } from '@/config';

// ----------------------------------------------------------------------

const AdminGuard = ({ children }) => {
  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  const {
    isAuthenticated,
    isInitialized,
    isConfirmed,
    isAdmin,
    isLoadingScreenLoaded,
  } = useSelector((state) => state.auth);

  if (!isInitialized || !isLoadingScreenLoaded) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_BEFORE_LOGIN} />;
  }

  if (!isAuthenticated || (isAuthenticated && !isConfirmed)) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_BEFORE_LOGIN} />;
  }

  if (!isAdmin) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_AFTER_LOGIN} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default AdminGuard;
