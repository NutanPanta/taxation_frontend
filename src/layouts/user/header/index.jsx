import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
// mui
import { Box, IconButton, useTheme } from '@mui/material';
import { Logout, Menu } from '@mui/icons-material';
// components
import BreadCrumb from '../breadcrumb';
import { DropdownMenu } from '@components/index';
import { logoutUser } from '@features/auth/components/auth';
// styles
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderUserIconWrapper,
} from './header.styles';
import { SidebarHeaderLogo } from '../sidebar/sidebar.styles';
// images
import Logo from '@assets/images/logo.svg';
// config
import { PATH_AFTER_LOGIN } from '@/config';

// ----------------------------------------------------------------------

const Header = ({ onToggleSidebar }) => {
  const {
    palette: { grey },
  } = useTheme();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const dropwdownRows = [
    {
      name: 'Logout',
      icon: Logout,
      clickEvent: () => logoutUser(dispatch),
    },
  ];

  return (
    <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.50' }}>
      <HeaderContainer maxWidth='false'>
        <HeaderWrapper>
          <Box
            className='flex-wrap align-items-center gap-3'
            sx={{ display: { lg: 'none', xs: 'flex' } }}
          >
            <IconButton
              onClick={onToggleSidebar}
              aria-label='menu'
              component='label'
            >
              <Menu />
            </IconButton>
            <RouterLink
              className='d-flex flex-row align-items-baseline flex-wrap gap-3'
              to={PATH_AFTER_LOGIN}
            >
              <SidebarHeaderLogo>
                <img src={Logo} alt='' />
              </SidebarHeaderLogo>
            </RouterLink>
          </Box>
          <Box
            className='flex-wrap align-items-center gap-3'
            sx={{ display: { lg: 'flex', xs: 'none' } }}
          >
            <BreadCrumb />
          </Box>
          <div className='d-flex flex-row align-items-center gap-3'>
            <IconButton
              sx={{ p: 0 }}
              aria-label='notification'
              component='label'
            >
              <DropdownMenu rows={dropwdownRows}>
                <HeaderUserIconWrapper
                  primarycolor={grey[0]}
                  primary={grey[300]}
                >
                  {_.upperCase(user?.email?.slice(0, 1))}
                </HeaderUserIconWrapper>
              </DropdownMenu>
            </IconButton>
          </div>
        </HeaderWrapper>
      </HeaderContainer>
    </Box>
  );
};

export default Header;
