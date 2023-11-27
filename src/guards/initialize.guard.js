import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import { initialize, setCredentials } from '@features/auth/redux/auth.slice';
import { useUserDetailsQuery } from '@features/auth/redux/auth.api';
// hooks
import { useSnackbar } from '@hooks/index';
// cognito
import { logoutUser } from '@features/auth/components/auth';

const InitializeGuard = ({ children }) => {
  const dispatch = useDispatch();

  const { createSnackbar } = useSnackbar();

  const { access, isAuthenticated } = useSelector((state) => state.auth);

  const persisetedAccess = localStorage.getItem('access');
  const persistedRefresh = localStorage.getItem('refresh');

  const { data: response, isSuccess } = useUserDetailsQuery(
    {},
    { skip: !access }
  );

  const initializeUser = async () => {
    try {
      if (access) {
        dispatch(
          initialize({
            isAuthenticated: true,
            user: response?.data,
          })
        );
      }
      if (!access && persisetedAccess) {
        dispatch(
          setCredentials({
            access: persisetedAccess,
            refresh: persistedRefresh,
          })
        );
      }
      if (!persisetedAccess) {
        return dispatch(
          initialize({
            isAuthenticated: false,
            user: null,
          })
        );
      }
    } catch (error) {
      createSnackbar({
        message: error.message || 'Internal Server Error',
      });
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: false,
          isInitialized: false,
          user: null,
        },
      });
      logoutUser(dispatch);
    }
  };

  useEffect(() => {
    initializeUser();
  }, [isAuthenticated, isSuccess]);

  return children;
};

export default InitializeGuard;
