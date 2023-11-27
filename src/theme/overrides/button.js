const Button = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: '5px',
          '&[disabled], &[aria-disabled="true"]': {
            backgroundColor: theme.palette.background.disabled,
            color: theme.palette.text.disabled,
            fontWeight: 500,
          },
        },
        // contained
        contained: {
          boxShadow: 'none',
          textTransform: 'uppercase',
        },
        containedInherit: {
          color: theme.palette.grey[800],
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.customShadows.primary,
          },
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
          color: theme.palette.grey[0],
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.action.hoverColor,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
};

export default Button;
