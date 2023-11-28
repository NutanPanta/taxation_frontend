// mui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// form and its validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
// components
import { LabeledInput, Select } from '@components/form';
// icons
import { Coins, ListPlus, Trash } from '@phosphor-icons/react';
// api
import {
  useCreateTaxPayerDetailsMutation,
  useUpdateTaxPayerDetailsMutation,
} from '@features/home/api';
// hooks
import useSnackbar from '@hooks/useSnackbar';

// ----------------------------------------------------------------------

const TaxDocs = ({ data, hasTaxBeenFilled, nextStep }) => {
  const [createTaxPayerDetail] = useCreateTaxPayerDetailsMutation();
  const [updateTaxPayerDetail] = useUpdateTaxPayerDetailsMutation();

  const { createSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      name: data?.name || '',
      social_security_number: data?.social_security_number || '',
      date_of_birth: data?.date_of_birth || '',
      address: data?.address || '',
      phone_number: data?.phone_number || '',
      employers: data?.employers || [
        {
          employer_name: '',
          income: 0,
          taxes_withheld: 0,
        },
      ],
      other_incomes: data?.other_incomes || [
        {
          income_type: '',
          amount: 0,
        },
      ],
      deductions: data?.deductions || [
        {
          deduction_type: '',
          amount: 0,
        },
      ],
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = hasTaxBeenFilled
        ? await updateTaxPayerDetail({ data: values })
        : await createTaxPayerDetail({ data: values });

      if (response.errors) {
      }
      if (response?.data) {
        createSnackbar({
          message: `Data ${
            hasTaxBeenFilled ? 'updated' : 'created'
          } successfully`,
        });
        nextStep();
      }
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name cannot be empty'),
      address: Yup.string().required('Address cannot be empty'),
      social_security_number: Yup.string().required(
        'Social security number cannot be empty'
      ),
      phone_number: Yup.string().required('Phone number cannot be empty'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction={'column'} columnGap={4}>
        <Box>
          <Typography sx={{ mb: 3 }} variant='h6'>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <LabeledInput
                name={'name'}
                label={'Full Name'}
                size='small'
                formik={formik}
                outerStyles={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LabeledInput
                name={'address'}
                label={'Address'}
                size='small'
                formik={formik}
                outerStyles={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LabeledInput
                name={'social_security_number'}
                label={'Social Security Number'}
                size='small'
                formik={formik}
                outerStyles={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LabeledInput
                name={'date_of_birth'}
                label={'Date of Birth'}
                type='date'
                size='small'
                formik={formik}
                outerStyles={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LabeledInput
                name={'phone_number'}
                label={'Phone Number'}
                placeholder={'+977 1234567890'}
                size='small'
                formik={formik}
                outerStyles={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography sx={{ mb: 3 }} variant='h6'>
            Employer Information
          </Typography>
          {formik.values.employers.map((_, key) => (
            <Grid container spacing={2} key={key}>
              <Grid item xs={4}>
                <LabeledInput
                  name={`employers.${key}.employer_name`}
                  label={'Employer Name'}
                  size='small'
                  formik={formik}
                  outerStyles={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <LabeledInput
                  name={`employers.${key}.income`}
                  label={'Income'}
                  type='number'
                  size='small'
                  formik={formik}
                  outerStyles={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LabeledInput
                  name={`employers.${key}.taxes_withheld`}
                  label={'Taxes Withheld'}
                  type='number'
                  size='small'
                  formik={formik}
                  outerStyles={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                />
              </Grid>

              <Grid className='align-self-end' item xs={1}>
                <Button
                  className='mb-3'
                  variant='contained'
                  color='error'
                  startIcon={<Trash weight='bold' />}
                  sx={{ minHeight: '40px' }}
                  onClick={() =>
                    formik.values.employers.length !== 1 &&
                    formik.setFieldError(
                      'employers',
                      formik.values.employers.splice(key, 1)
                    )
                  }
                >
                  <Typography className='text-capitalize' variant='subtitle4'>
                    Delete
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          ))}

          <div className='d-flex justify-content-center mt-4'>
            <Button
              className='mb-3'
              variant='contained'
              color='secondary'
              startIcon={<ListPlus weight='bold' />}
              sx={{ minHeight: '40px' }}
              onClick={() =>
                formik.setFieldValue('employers', [
                  ...formik.values.employers,
                  { employer_name: '', income: 0, taxes_withheld: 0 },
                ])
              }
            >
              <Typography className='text-capitalize' variant='subtitle4'>
                Add Employer
              </Typography>
            </Button>
          </div>
        </Box>
        <Box>
          <Typography sx={{ mb: 3 }} variant='h6'>
            Other Income Information
          </Typography>
          {formik.values.other_incomes.map((_, key) => (
            <Grid container spacing={2} key={key}>
              <Grid item xs={6}>
                <Select
                  name={`other_incomes.${key}.income_type`}
                  label={'Income Types'}
                  formik={formik}
                  selectKey='id'
                  selectValue='type'
                  values={[
                    { id: 'self_employment', type: 'Self-Employment Income' },
                    { id: 'rental', type: 'Rental Income' },
                    { id: 'interest', type: 'Interest Income' },
                    { id: 'dividend', type: 'Dividend Income' },
                    { id: 'capital_gains', type: 'Capital Gains' },
                    { id: 'royalties', type: 'Royalties' },
                    { id: 'alimony', type: 'Alimony' },
                    { id: 'business', type: 'Business Income' },
                    {
                      id: 'unemployment_compensation',
                      type: 'Unemployment Compensation',
                    },
                    { id: 'social_security', type: 'Social Security Benefits' },
                    { id: 'pension', type: 'Pension Income' },
                    { id: 'gambling_winnings', type: 'Gambling Winnings' },
                    { id: 'prizes_awards', type: 'Prizes and Awards' },
                  ]}
                />
              </Grid>
              <Grid item xs={5}>
                <LabeledInput
                  name={`other_incomes.${key}.amount`}
                  label={'Amount'}
                  type='number'
                  size='small'
                  formik={formik}
                  outerStyles={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                />
              </Grid>

              <Grid className='align-self-end' item xs={1}>
                <Button
                  className='mb-3'
                  variant='contained'
                  color='error'
                  startIcon={<Trash weight='bold' />}
                  sx={{ minHeight: '40px' }}
                >
                  <Typography
                    className='text-capitalize'
                    variant='subtitle4'
                    onClick={() =>
                      formik.values.employers.length !== 1 &&
                      formik.setFieldError(
                        'other_incomes',
                        formik.values.other_incomes.splice(key, 1)
                      )
                    }
                  >
                    Delete
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          ))}

          <div className='d-flex justify-content-center mt-4'>
            <Button
              className='mb-3'
              variant='contained'
              color='secondary'
              startIcon={<ListPlus weight='bold' />}
              sx={{ minHeight: '40px' }}
              onClick={() =>
                formik.setFieldValue('other_incomes', [
                  ...formik.values.other_incomes,
                  {
                    income_type: '',
                    amount: 0,
                  },
                ])
              }
            >
              <Typography className='text-capitalize' variant='subtitle4'>
                Add Other Income Source
              </Typography>
            </Button>
          </div>
        </Box>
        <Box>
          <Typography sx={{ mb: 3 }} variant='h6'>
            Deduction Information
          </Typography>
          {formik.values.deductions.map((_, key) => (
            <Grid container spacing={2} key={key}>
              <Grid item xs={6}>
                <Select
                  name={`deductions.${key}.deduction_type`}
                  label={'Deduction Types'}
                  formik={formik}
                  selectKey='id'
                  selectValue='type'
                  values={[
                    { id: 'standard', type: 'Standard Deduction' },
                    { id: 'itemized', type: 'Itemized Deductions' },
                    { id: 'education', type: 'Educational Expenses' },
                    { id: 'business', type: 'Business Expenses' },
                    {
                      id: 'hsa',
                      type: 'Health Savings Account (HSA) Contributions',
                    },
                    { id: 'retirement', type: 'Retirement Contributions' },
                    { id: 'job_related', type: 'Job-Related Expenses' },
                  ]}
                />
              </Grid>
              <Grid item xs={5}>
                <LabeledInput
                  name={`deductions.${key}.amount`}
                  type='number'
                  label={'Amount'}
                  size='small'
                  formik={formik}
                  outerStyles={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                />
              </Grid>

              <Grid className='align-self-end' item xs={1}>
                <Button
                  className='mb-3'
                  variant='contained'
                  color='error'
                  startIcon={<Trash weight='bold' />}
                  sx={{ minHeight: '40px' }}
                >
                  <Typography
                    className='text-capitalize'
                    variant='subtitle4'
                    onClick={() =>
                      formik.values.employers.length !== 1 &&
                      formik.setFieldError(
                        'deductions',
                        formik.values.deductions.splice(key, 1)
                      )
                    }
                  >
                    Delete
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          ))}
          <div className='d-flex justify-content-center mt-4'>
            <Button
              className='mb-3'
              variant='contained'
              color='secondary'
              startIcon={<ListPlus weight='bold' />}
              sx={{ minHeight: '40px' }}
              onClick={() =>
                formik.setFieldValue('deductions', [
                  ...formik.values.deductions,
                  {
                    deduction_type: '',
                    amount: 0,
                  },
                ])
              }
            >
              <Typography className='text-capitalize' variant='subtitle4'>
                Add Deduction
              </Typography>
            </Button>
          </div>
        </Box>
        <LoadingButton
          className='mt-3 mb-3'
          variant='contained'
          color='secondary'
          loading={formik.isSubmitting}
          startIcon={<Coins weight='bold' />}
          sx={{ minHeight: '40px' }}
          type='submit'
        >
          <Typography className='text-capitalize' variant='subtitle4'>
            File Tax Returns
          </Typography>
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default TaxDocs;
