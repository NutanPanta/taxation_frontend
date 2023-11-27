import React, { useState } from 'react';
// mui
import { ExpandMoreRounded } from '@mui/icons-material';
import { useTheme } from '@mui/material';
// styles
import {
  SidebarNavItem,
  SidebarNavItemDetailIcon,
  SidebarNavItemDetailName,
  SidebarNavItemDetailNameWrapper,
} from './sidebar.styles';

const SidebarSubItemHeading = ({ item, itemKey }) => {
  const {
    palette: { grey, primary },
  } = useTheme();

  const [showAccordion, setShowAccordion] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setShowAccordion((prev) => !prev);
  };

  return (
    <SidebarNavItem
      hovercolor={grey[100]}
      activecolor={primary.light}
      maincolor={primary.main}
      className='d-flex'
      to={item.path}
      key={itemKey}
      onClick={clickHandler}
    >
      <SidebarNavItemDetailIcon>{item.icon}</SidebarNavItemDetailIcon>
      <SidebarNavItemDetailNameWrapper>
        <SidebarNavItemDetailName variant='body2'>
          {item.name}
        </SidebarNavItemDetailName>
      </SidebarNavItemDetailNameWrapper>
      {/* Icon  */}
      <ExpandMoreRounded
        sx={{
          transform: `${showAccordion ? 'rotate(0)' : 'rotate(-90deg)'}`,
          transition: '0.3s all ease-in-out',
        }}
      />
    </SidebarNavItem>
  );
};

export default SidebarSubItemHeading;
