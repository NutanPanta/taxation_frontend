import { Link as RouterLink } from 'react-router-dom';
// mui
import { Box, Card, Typography, Link } from '@mui/material';
// styles
import { AuthContainer, AuthWrapper } from '../../../styles/auth.styles';
// components
import LoginForm from './loginForm';

// ----------------------------------------------------------------------

const Login = () => {
  return (
    <AuthContainer>
      <AuthWrapper className='d-flex flex-column'>
        <Card sx={{ boxShadow: 20 }}>
          <div style={{ padding: '56px 40px' }}>
            <div>
              <Box sx={{ pr: 2.5, pl: 2.5, pb: 2.5 }}>
                <div className='d-flex flex-column w-100'>
                  <div className='d-flex flex-column position-relative mb-4'>
                    <Typography variant='h4' gutterBottom>
                      Sign in to Taxation
                    </Typography>
                    <div className='d-flex flex-row'>
                      <Typography
                        variant='body1'
                        align='center'
                        sx={{ mt: 1, mb: 2 }}
                      >
                        Don't have an account yet?
                        <Link
                          className='text-underline-none'
                          variant='subtitle1'
                          to={'/auth/register'}
                          component={RouterLink}
                          sx={{ ml: 1 }}
                        >
                          Register Now
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </div>
                <LoginForm />
              </Box>
            </div>
          </div>
        </Card>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Login;
