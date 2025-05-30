import { useState } from 'react';
import OTPInput from 'react-otp-input';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Step3_Success = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    alert(`Submitting OTP: ${otp}`);
  };

  return (
    <div>
      <Card className="flex flex-col items-center">
        <h2 className="text-xl font-big-calson text-[#101828] mb-4">Please check your email.</h2>
        <p className="text-[#667085] mb-6">We've sent a code to "email"</p>
        <div className="flex justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              borderRadius: 4,
              border: '1px solid #5A3A27',
              textAlign: 'center',
              outline: 'none',
            }}
            containerStyle="flex justify-center gap-2.5"
            renderInput={(props) => (
              <input
                {...props}
                className="md:text-5xl text-[#5A3A27] !md:size-20 !size-10 font-semibold"
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
        <Button label="Back" />
        <Button variant={'primary'} label="Submit" />
      </div>
    </div>
  );
};

export default Step3_Success;
