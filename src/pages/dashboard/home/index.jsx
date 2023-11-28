import { useEffect, useState } from 'react';
// mui
import { Stack, Alert, AlertTitle } from '@mui/material';
// components
import { Steps } from '@components/index';
import TaxDocs from './taxDocs';
import ReviewDocs from './reviewDocs';
// api
import { useTaxPayerDetailsQuery } from '@features/home/api';

// ----------------------------------------------------------------------

const Home = () => {
  const { data: response, isLoading, isSuccess } = useTaxPayerDetailsQuery();

  const taxDocs = response?.data;

  const hasTaxBeenFilled = Boolean(taxDocs?.name);

  const isReviewed = Boolean(taxDocs?.reviewed);

  const isAccepted = Boolean(taxDocs?.accepted);

  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    'Account Setup',
    'Provide tax docs',
    'Review',
    'Submitted to IRS',
    'Accepted',
  ];

  const nextStep = () => setActiveStep((step) => step + 1);
  const prevStep = () => setActiveStep((step) => step - 1);

  useEffect(() => {
    taxDocs &&
      setActiveStep(isAccepted ? 4 : isReviewed ? 3 : hasTaxBeenFilled ? 2 : 1);
  }, [isSuccess]);

  return isLoading && !isSuccess && !activeStep ? (
    'Loading'
  ) : (
    <Stack direction={'column'} gap={5}>
      {activeStep && <Steps steps={steps} activeStep={activeStep} />}

      {isAccepted || activeStep === 4 ? (
        <Alert severity='success'>
          <AlertTitle>Accpeted</AlertTitle>
          Your tax filing has been accepted. All your tax returns are in order.
        </Alert>
      ) : isReviewed || activeStep === 3 ? (
        <Alert severity='info'>
          <AlertTitle>Info</AlertTitle>
          Your tax filing has been submiited to IRS and is in the process. It
          may take upto 4 business days for your tax filling to be accepted
        </Alert>
      ) : activeStep == 2 ? (
        <ReviewDocs data={taxDocs} nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <TaxDocs
          data={taxDocs}
          hasTaxBeenFilled={hasTaxBeenFilled}
          nextStep={nextStep}
        />
      )}
    </Stack>
  );
};

export default Home;
