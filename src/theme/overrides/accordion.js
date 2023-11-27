import { red } from "@mui/material/colors";

export default function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.MuiAccordionSummary-gutters": {
                        margin: 0,
                    },
                    '&.Mui-expanded': {
                        // border: "2px solid blue",
                        margin: 0,
                        // height:"10px",
                        //   boxShadow: theme.customShadows.z8,
                        //   borderRadius: theme.shape.borderRadius,
                    },
                    // '&.'
                    '&.Mui-disabled': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    margin: 0,
                    paddingRight: theme.spacing(1),
                    '&.Mui-disabled': {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        '& .MuiTypography-root': {
                            color: 'inherit',
                        },
                    },
                },
                expandIconWrapper: {
                    color: 'inherit',
                },
            },
        },
    };
}