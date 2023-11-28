import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
// mui
import { Alert, CardActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// form and its validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// components
import { Input } from '@components/index';
// reducers
import { login } from '@features/auth/redux/auth.slice';
// hooks
import { useLoginUserMutation } from '@features/auth/redux/auth.api';

// ----------------------------------------------------------------------

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [loginUser] = useLoginUserMutation();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      is_checked: false,
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await loginUser({
        data: { email: values.email, password: values.password },
      });

      const error = response.error;

      if (error) {
        const errorMessage =
          error?.status === 401 || error?.status === 400
            ? 'Invalid Email or Password'
            : error?.data?.detail || 'Internal Server Error';
        setErrorMessage(errorMessage);
        return;
      }

      dispatch(login(response?.data));

      // Store tokens in local storage
      localStorage.setItem('access', response?.data?.access);
      values.is_checked &&
        localStorage.setItem('refresh', response?.data?.refresh);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Username cannot be empty'),
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
    [formik.values.email, formik.values.password]
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
        <div className='d-flex justify-content-between align-items-center w-100 mb-3'>
          <Input
            name='is_checked'
            label='Remember Me'
            type='checkbox'
            className='text-secondary'
            formik={formik}
          />
        </div>
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
          Login
        </LoadingButton>
      </CardActions>
    </form>
  );
};

export default LoginForm;
