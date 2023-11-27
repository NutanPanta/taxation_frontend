import { Suspense, useState } from 'react';
import { useLocation } from 'react-router';
// components
import { LoadingScreen } from '@components/index';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  const { pathname } = useLocation();

  const loadingScreen = (
    <LoadingScreen
      isDashboard={
        pathname.includes('/dashboard') || pathname.includes('/admin')
      }
      isAuth={pathname.includes('/auth')}
    />
  );

  return (
    <Suspense fallback={loadingScreen}>{<Component {...props} />}</Suspense>
  );
};

export default Loadable;
