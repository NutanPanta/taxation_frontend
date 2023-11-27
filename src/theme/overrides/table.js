// ----------------------------------------------------------------------

const Table = (theme) => {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          // '&:nth-of-type(2n+1)': {
          //   backgroundColor: `${theme.palette.background.stripe} !important`,
          // },
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,

            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '18px !important',
          borderBottom: 'none',
        },

        body: {
          '&:first-of-type': {
            paddingLeft: theme.spacing(3),
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(3),
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: `solid 1px ${theme.palette.divider}`,
        },
        toolbar: {
          height: 64,
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: -4,
        },
      },
    },
  };
};

export default Table;
