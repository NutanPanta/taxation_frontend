// mui
import { Box, Stack, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// icons
import { PaperPlane, PaperPlaneRight } from '@phosphor-icons/react';
// components
import EmployersInformations from './employersInformation';
import OtherIncomesInformations from './otherIncomesInformation';
import DeductionsInformations from './deductionsInformation';
// api
import { useReviewTaxPayerDetailsMutation } from '@features/home/api';
import useSnackbar from '@hooks/useSnackbar';

// ----------------------------------------------------------------------

const FormatInformation = ({ title, value }) => {
  return (
    <Stack direction={'row'}>
      <Typography variant='subtitle3' sx={{ width: '250px' }}>
        {title}
      </Typography>
      <Typography variant='subtitle3' sx={{ width: '100px' }}>
        :
      </Typography>
      <Typography variant='subtitle3'>{value} </Typography>
    </Stack>
  );
};

const ReviewDocs = ({ data, nextStep, prevStep }) => {
  const [review] = useReviewTaxPayerDetailsMutation();

  const { createSnackbar } = useSnackbar();

  const submitToIRS = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await review();

    if (response?.data) {
      nextStep();
      createSnackbar({ message: 'Tax Submitted to IRS' });
    }
  };

  return (
    <Stack direction={'column'} columnGap={4}>
      <Box mb={3}>
        <Typography sx={{ mb: 3 }} variant='h6'>
          Personal Information
        </Typography>
        <Stack direction={'column'} gap={3}>
          <FormatInformation title={'Full Name'} value={data?.name} />
          <FormatInformation title={'Address'} value={data?.address} />
          <FormatInformation
            title={'Social Security Number'}
            value={data?.social_security_number}
          />
          <FormatInformation
            title={'Date of Birth'}
            value={data?.date_of_birth}
          />
          <FormatInformation
            title={'Phone Number'}
            value={data?.phone_number}
          />
        </Stack>
      </Box>
      <Box mb={3}>
        <Typography sx={{ mb: 3 }} variant='h6'>
          Employers Informations
        </Typography>
        <EmployersInformations employers={data?.employers} />
      </Box>
      <Box mb={3}>
        <Typography sx={{ mb: 3 }} variant='h6'>
          Other Incomes Information
        </Typography>
        <OtherIncomesInformations other_incomes={data?.other_incomes} />
      </Box>
      <Box mb={3}>
        <Typography sx={{ mb: 3 }} variant='h6'>
          Deductions Information
        </Typography>
        <DeductionsInformations deductions={data?.deductions} />
      </Box>
      <div className='d-flex flex-row gap-3 align-items-center justify-content-between'>
        <Button
          className='mt-3 mb-3'
          variant='contained'
          color='secondary'
          startIcon={<PaperPlane weight='bold' />}
          onClick={prevStep}
          sx={{ minHeight: '40px' }}
          type='submit'
        >
          <Typography className='text-capitalize' variant='subtitle4'>
            Make Changes
          </Typography>
        </Button>
        <LoadingButton
          className='mt-3 mb-3'
          variant='contained'
          color='success'
          startIcon={<PaperPlaneRight weight='bold' />}
          onClick={submitToIRS}
          sx={{ minHeight: '40px' }}
        >
          <Typography className='text-capitalize' variant='subtitle4'>
            Submit to IRS
          </Typography>
        </LoadingButton>
      </div>
    </Stack>
  );
};

export default ReviewDocs;
