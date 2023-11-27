import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// components
import { LoadingScreen } from '@components/index';
// config
import { PATH_BEFORE_LOGIN } from '@/config';

// ----------------------------------------------------------------------

const UserGuard = ({ children }) => {
  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  const { isAuthenticated, isInitialized, isLoadingScreenLoaded } = useSelector(
    (state) => state.auth
  );

  if (!isInitialized || !isLoadingScreenLoaded) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={PATH_BEFORE_LOGIN} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return children;
};

export default UserGuard;
