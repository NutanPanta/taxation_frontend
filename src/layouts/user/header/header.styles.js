import styled from 'styled-components';
// mui
import { Container } from '@mui/material';
// config
import { HEADER } from '@/config';
// styles
import { SidebarHeaderUserAvatar } from '../sidebar/sidebar.styles';

const { MAIN_DESKTOP_HEIGHT } = HEADER;

export const HeaderContainer = styled(Container)`
  /* height: ${MAIN_DESKTOP_HEIGHT}px; */
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderUserIconWrapper = styled(SidebarHeaderUserAvatar)`
  width: 34px;
  height: 34px;
`;
