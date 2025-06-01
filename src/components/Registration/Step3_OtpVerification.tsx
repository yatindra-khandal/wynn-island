import { useState } from 'react';
import OTPInput from 'react-otp-input';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { useRegistration } from '../../hooks/useRegistration';
import { verifyOtp, requestOtp } from '../../services/registrationService';
import type { OtpMethod } from '../../context/RegistrationContext/reducer';
import SuccessMessage from './SuccessMessage';

const Step3_OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const { state, dispatch } = useRegistration();

  const handleSubmit = async () => {
    try {
      setError('');
      setLoading(true);
      const method = state.selectedMethod;
      const data = await verifyOtp({ method: method as OtpMethod, otp });
      if (data.success) {
        setVerified(true);
      } else {
        setError('Invalid or expired OTP. Please try again.');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      setError('Invalid or expired OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => dispatch({ type: 'PREV_STEP' });

  const handleResend = async () => {
    try {
      setError('');
      await requestOtp({ email: state.form.email, phone: state.form.phone });
    } catch (err) {
      console.error('Failed to resend OTP:', err);
      setError('Failed to resend OTP. Please try again.');
    }
  };

  if (verified) return <SuccessMessage />;

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
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <p className="text-[#667085] text-center">
          Didn't get the code?{' '}
          <button type="button" className="cursor-pointer underline" onClick={handleResend}>
            Click to resend.
          </button>
        </p>
      </Card>
      <div className="flex justify-between gap-4 mt-10">
        <Button label="Back" className="w-[295px]" onClick={handleBack} />
        <Button
          className="w-[295px]"
          variant={'primary'}
          label={loading ? 'Submitting...' : 'Submit'}
          onClick={handleSubmit}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default Step3_OtpVerification;
