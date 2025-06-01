import { useState } from 'react';
import OTPInput from 'react-otp-input';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { useRegistration } from '../../hooks/useRegistration';

const Step3_Success = () => {
  const [otp, setOtp] = useState('');
  const { state, dispatch } = useRegistration();

  const handleSubmit = () => {
    alert(`Submitting OTP: ${otp}`);
  };

  const handleBack = () => dispatch({ type: 'PREV_STEP' });

  return (
    <div>
      <SectionTitle title="OTP Verification" />
      <Card className="flex flex-col items-center mt-5">
        <p className="text-xl font-big-calson text-[#101828] mb-4">Please check your email.</p>
        <p className="text-[#667085] mb-6">
          We've sent a code to{' '}
          {state.selectedMethod === 'email' ? state.form.email : state.form.phone}
        </p>
        <div className="flex justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{}}
            containerStyle="flex justify-center gap-2.5"
            renderInput={({ style, ...props }) => (
              <input
                {...props}
                className="w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 sm:text-3xl md:text-5xl text-[#5A3A27] 
                font-semibold text-center rounded border border-[#5A3A27] outline-none"
              />
            )}
          />
        </div>
        <p className="text-[#667085] text-center">
          Didn't get the code?{' '}
          <button
            type="button"
            className="cursor-pointer underline"
            onClick={() => alert('Resend OTP')}
          >
            Click to resend.
          </button>
        </p>
      </Card>
      <div className="flex justify-between gap-4 mt-10">
        <Button label="Back" className="w-[295px]" onClick={handleBack} />
        <Button className="w-[295px]" variant={'primary'} label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Step3_Success;
