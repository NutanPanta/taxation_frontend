import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// images
import Logo from '@assets/images/logo.svg';
//components
import MainFooter from './mainFooter';
import MainHeader from './mainHeader';

// ----------------------------------------------------------------------

const MainLayout = () => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo />
            <Typography variant='caption' component='p'>
              © All rights reserved
            </Typography>
          </Container>
        </Box>
      )}
    </Stack>
  );
};

export default MainLayout;
