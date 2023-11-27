import { Link } from 'react-router-dom';
// mui
import { GridView } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, useTheme } from '@mui/material';
// styles
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarHeader,
  SidebarHeaderLogo,
  SidebarNavItemDetailNameWrapper,
  SidebarNavItemDetailName,
  SidebarNavItemDetailIcon,
  SidebarNavItem,
  SidebarSubNavItem,
  SubItemAccordion,
} from './sidebar.styles';
// images
import Logo from '@assets/images/logo.svg';
// components
import SidebarSubItemHeading from './sidebarSubItemHeading';
// config
import { PATH_AFTER_LOGIN } from '@/config.js';
import { PATH_DASHBOARD } from '@/routes/paths.js';

const Sidebar = ({ isOpenSidebar }) => {
  const {
    palette: { grey, primary },
  } = useTheme();

  const sidebarList = [
    {
      name: 'Home',
      path: PATH_DASHBOARD.general.home,
      icon: <GridView />,
    },
  ];

  return (
    <SidebarContainer isopen={isOpenSidebar.toString()}>
      <SidebarWrapper>
        <SidebarHeader>
          <Link
            className='d-flex flex-row align-items-baseline flex-wrap gap-2'
            to={PATH_AFTER_LOGIN}
          >
            <SidebarHeaderLogo>
              <Logo />
            </SidebarHeaderLogo>
          </Link>
        </SidebarHeader>
        <div className='d-flex flex-column'>
          <ul className='m-0'>
            {sidebarList.map(({ show = true, ...item }, key) =>
              !show ? (
                <div key={key}></div>
              ) : !item.subSidebarList ? (
                <SidebarNavItem
                  hovercolor={grey[100]}
                  activecolor={
                    'linear-gradient(90deg, rgba(255, 240, 235, 0.3) 1.36%, rgba(255, 209, 195, 0.5) 100%)'
                  }
                  maincolor={primary.main}
                  className='d-flex'
                  to={item.path}
                  key={key}
                >
                  <SidebarNavItemDetailIcon>
                    {item.icon}
                  </SidebarNavItemDetailIcon>
                  <SidebarNavItemDetailNameWrapper>
                    <SidebarNavItemDetailName variant='body1'>
                      {item.name}
                    </SidebarNavItemDetailName>
                  </SidebarNavItemDetailNameWrapper>
                </SidebarNavItem>
              ) : (
                <SubItemAccordion key={key} disableGutters>
                  <AccordionSummary
                    hovercolor={grey[100]}
                    activecolor={primary.light}
                    maincolor={primary.main}
                    sx={{
                      padding: 0,
                      margin: 0,
                      '.MuiAccordionSummary-content': {
                        margin: 0,
                      },
                    }}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <SidebarSubItemHeading itemKey={key} item={item} />
                  </AccordionSummary>
                  {item.subSidebarList.map((subItem, index) => (
                    <AccordionDetails
                      key={index}
                      sx={{ padding: 0, margin: 0 }}
                    >
                      <SidebarSubNavItem
                        hovercolor={grey[100]}
                        activecolor={primary.light}
                        maincolor={primary.main}
                        className='d-flex'
                        to={item.path}
                      >
                        <SidebarNavItemDetailIcon>
                          {subItem.icon}
                        </SidebarNavItemDetailIcon>
                        <SidebarNavItemDetailNameWrapper>
                          <SidebarNavItemDetailName variant='body1'>
                            {subItem.name}
                          </SidebarNavItemDetailName>
                        </SidebarNavItemDetailNameWrapper>
                      </SidebarSubNavItem>
                    </AccordionDetails>
                  ))}
                </SubItemAccordion>
              )
            )}
          </ul>
        </div>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
