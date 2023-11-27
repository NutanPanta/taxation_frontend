import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import UserLayout from '@layouts/user';
import GuestLayout from '@layouts/guest';
import LogoOnlyLayout from '@layouts/logoOnlyLayout';
// guards
import { UserGuard, GuestGuard } from '@guards/index';
// utils
import { Loadable } from '@utils/index';
// config
import { PATH_DASHBOARD } from './paths';

// ----------------------------------------------------------------------

const Router = () => {
  return useRoutes([
    // Guest Routes
    {
      path: '/auth',
      element: (
        <GuestGuard>
          <GuestLayout />
        </GuestGuard>
      ),
      children: [
        { element: <Login />, index: true },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
    // User Routes
    {
      path: `/${PATH_DASHBOARD.root}`,
      element: (
        <UserGuard>
          <UserLayout />
        </UserGuard>
      ),
      children: [
        { element: <UserHome />, index: true },
        { path: 'home', element: <UserHome /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '403', element: <Forbidden /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    // Guest Routes
    {
      path: '/',
      element: <GuestLayout />,
      children: [{ element: <HomePage />, index: true }],
    },

    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
};

export default Router;

// Authentication
const Login = Loadable(lazy(() => import('@pages/auth/login')));
const Register = Loadable(lazy(() => import('@pages/auth/register')));

//  User Dashboard
const UserHome = Loadable(lazy(() => import('@pages/dashboard/home')));

// Main
const HomePage = Loadable(lazy(() => import('@pages/home')));
const Page500 = Loadable(lazy(() => import('@pages/page500')));
const NotFound = Loadable(lazy(() => import('@pages/page404')));
const Forbidden = Loadable(lazy(() => import('@pages/page403')));
