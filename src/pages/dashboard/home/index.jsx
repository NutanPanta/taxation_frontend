import { useState } from 'react';
// mui
import { Stack } from '@mui/material';
// components
import { Steps } from '@components/index';
import TaxDocs from './taxDocs';

// ----------------------------------------------------------------------

const Home = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    'Account Setup',
    'Provide tax docs',
    'Provide Missing info',
    'Tax Return In Progress',
    'Review',
    'Esign',
    'Submitted to IRS',
    'Accepted',
  ];
  return (
    <Stack direction={'column'} gap={5}>
      <Steps steps={steps} activeStep={activeStep} />

      {activeStep == 1 ? <TaxDocs /> : <>Step</>}
    </Stack>
  );
};

export default Home;
