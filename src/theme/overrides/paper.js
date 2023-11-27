const Paper = (theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: theme.palette.grey[50],
            borderRadius: '5px',
          },
        },
      ],

      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
};

export default Paper;
