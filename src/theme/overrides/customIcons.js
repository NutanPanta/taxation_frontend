// @mui
import { SvgIcon } from '@mui/material';

// ----------------------------------------------------------------------

// Using for Alert
export function InfoIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,11 C11,10.4477153 11.4477153,10 12,10 C12.5522847,10 13,10.4477153 13,11 L13,16 Z M12,9 C11.4477153,9 11,8.55228475 11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 C13,8.55228475 12.5522847,9 12,9 Z' />
    </SvgIcon>
  );
}

export function WarningIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M22.56,16.3 L14.89,3.58 C14.2597186,2.59400001 13.1702353,1.99737652 12,1.99737652 C10.8297647,1.99737652 9.74028139,2.59400001 9.11,3.58 L1.44,16.3 C0.888546003,17.2192471 0.869485343,18.3628867 1.39,19.3 C1.99197363,20.3551378 3.11522982,21.0046397 4.33,21 L19.67,21 C20.8765042,21.0128744 21.9978314,20.3797441 22.61,19.34 C23.146086,18.3926382 23.1269508,17.2292197 22.56,16.3 L22.56,16.3 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,9 C11,8.44771525 11.4477153,8 12,8 C12.5522847,8 13,8.44771525 13,9 L13,13 Z' />
    </SvgIcon>
  );
}

export function SuccessIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M16.3,9.61 L11.73,15.61 C11.5412074,15.855247 11.2494966,15.9992561 10.94,16.0000145 C10.6322197,16.001658 10.3408221,15.861492 10.15,15.62 L7.71,12.51 C7.49028166,12.2277602 7.43782669,11.8497415 7.57239438,11.5183399 C7.70696206,11.1869384 8.00810836,10.9525017 8.36239438,10.9033399 C8.7166804,10.8541782 9.07028166,10.9977602 9.29,11.28 L10.92,13.36 L14.7,8.36 C14.917932,8.07418751 15.2717886,7.92635122 15.6282755,7.97217964 C15.9847624,8.01800806 16.2897207,8.25053875 16.4282755,8.58217966 C16.5668304,8.91382056 16.517932,9.29418753 16.3,9.58 L16.3,9.61 Z' />
    </SvgIcon>
  );
}

export function ErrorIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,9.3478351 20.9464316,6.80429597 19.0710678,4.92893219 C17.195704,3.0535684 14.6521649,2 12,2 Z M12,17 C11.4477153,17 11,16.5522847 11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 C13,16.5522847 12.5522847,17 12,17 Z M13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 L13,13 Z' />
    </SvgIcon>
  );
}

// Using for Select Input
export function InputSelectIcon(props) {
  return (
    <SvgIcon
      {...props}
      sx={{
        right: 12,
        fontSize: 16,
        position: 'absolute',
        pointerEvents: 'none',
      }}
    >
      <path d='M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z' />
    </SvgIcon>
  );
}