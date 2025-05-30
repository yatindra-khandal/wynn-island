import { useState } from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import Button from '../ui/Button';
import Card from '../ui/Card';
import RadioGroup from '../ui/RadioGroup';
import SectionTitle from '../ui/SectionTitle';

type OtpMethod = 'mobile' | 'email';

const SEND_CODE_MODE = [
  {
    label: 'Send to Phone',
    value: 'mobile',
  },
  { label: 'Send to Email', value: 'email' },
];

const Step2_OtpVerification = () => {
  const { dispatch } = useRegistration();
  const [selectedMethod, setSelectedMethod] = useState<OtpMethod | null>(null);

  const handleBack = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const handleSubmit = () => {
    if (selectedMethod) {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  return (
    <div>
      <SectionTitle title="OTP Verification" />
      <Card className="mb-8 mt-7 px-11">
        <div className="flex flex-col gap-4 items-center">
          <span className="font-big-calson text-[#101828] font-medium text-xl">Send Code</span>
          <span className="text-[#667085]">How would you like to receive the code?</span>
        </div>
        <RadioGroup
          className="py-5"
          name="otpMethod"
          value={selectedMethod || ''}
          onChange={(e) => setSelectedMethod(e.target.value as OtpMethod)}
          options={SEND_CODE_MODE}
        />
      </Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={handleBack} variant={'primary'} label="Back" />
        <Button variant="primary" onClick={handleSubmit} label="Next" />
      </div>
    </div>
  );
};

export default Step2_OtpVerification;
