import React, { useState } from 'react';
// mui
import { Button, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const DropdownMenu = ({
  rows = [],
  styling,
  showArrow = true,
  transformOrigin,
  anchorOrigin,
  padding,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div role={'button'} style={{ cursor: 'pointer' }} onClick={handleClick}>
        {children}
      </div>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: showArrow ? 'block' : 'none',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            ...styling,
          },
        }}
        transformOrigin={transformOrigin || { horizontal: 0, vertical: 0 }}
        anchorOrigin={anchorOrigin || { horizontal: 0, vertical: 'bottom' }}
      >
        {rows.map(({ show = true, ...row }, key) => (
          <div key={key}>
            {row.divider && <Divider />}
            {show && (
              <Button
                className='d-flex justify-content-start text-reset w-100'
                to={row.path || '#'}
                component={Link}
                variant='text'
                onClick={() =>
                  row?.clickEvent
                    ? (row?.clickEvent(), handleClose())
                    : handleClose()
                }
                startIcon={row.icon ? <row.icon fontSize='small' /> : <></>}
              >
                {row.name}
              </Button>
            )}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
