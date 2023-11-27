import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// mui
import { Alert, CardActions, Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// form and its validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// components
import { Input } from '@components/index';
// hooks
import useSnackbar from '@hooks/useSnackbar';
// reducers
import { useRegisterUserMutation } from '@features/auth/redux/auth.api';
// config
import { HOST_API } from '@/config';

// ----------------------------------------------------------------------

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const { createSnackbar } = useSnackbar();

  const [registerUser] = useRegisterUserMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      await registerUser({
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .unwrap()
        .then((payload) => {
          createSnackbar({ message: 'Account Created Successfully' });
          navigate('/auth/login');
        })
        .catch((error) => {
          const emptyMessage = 'This field may not be blank.';
          const emailError = error?.data?.errors?.email?.[0];
          const passwordError = error?.data?.errors?.email?.[0];
          if (emailError) {
            setErrorMessage(
              emailError === emptyMessage
                ? 'Email Field Cannot be Empty'
                : emailError
            );
            return;
          } else if (passwordError) {
            setErrorMessage(
              passwordError === emptyMessage
                ? 'Password Field Cannot be Empty'
                : emailError
            );
            return;
          }
          setErrorMessage('Incorrect email or password');
        });
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email cannot be empty'),
      password: Yup.string()
        .required('No password provided')
        .min(8, 'Password must be 8 characters long')
        .matches(
          /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
          'Password must contain at least one letter, one number and one symbol'
        ),
    }),
  });

  const isFielsNull = useMemo(
    () =>
      Object.keys(formik.values).filter((key) => _.isEmpty(formik.values[key])),
    [formik.values.name, formik.values.email, formik.values.password]
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='d-flex flex-column gap-4'>
        {errorMessage && (
          <Alert sx={{ alignItems: 'center' }} severity='error'>
            {errorMessage}
          </Alert>
        )}
        <Input name='email' label='Email' formik={formik} />
        <Input
          name='password'
          label='Password'
          type='password'
          formik={formik}
        />
      </div>
      <CardActions className='d-flex flex-column p-0 pt-1'>
        <LoadingButton
          fullWidth
          sx={{ minHeight: 55, mt: 2 }}
          size='large'
          type='submit'
          variant='contained'
          loading={formik.isSubmitting}
          disabled={
            Object.keys(formik.errors).length > 0 ||
            (Object.keys(formik.touched).length === 0 && isFielsNull.length > 0)
          }
        >
          Register
        </LoadingButton>
        <Typography
          variant='body2'
          align='center'
          sx={{ color: 'text.secondary', mt: 3 }}
        >
          By signing up, I agree to &nbsp;
          <Link
            underline='always'
            color='text.primary'
            href={`${HOST_API}/terms-and-condition.html`}
            target='_blank'
          >
            Terms of Service
          </Link>
          &nbsp; and &nbsp;
          <Link
            underline='always'
            color='text.primary'
            href={`${HOST_API}/privacy-policy.html`}
            target='_blank'
          >
            Privacy Policy
          </Link>
          .
        </Typography>
      </CardActions>
    </form>
  );
};

export default RegisterForm;
