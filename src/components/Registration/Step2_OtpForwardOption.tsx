import { useState } from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import { requestOtp } from '../../services/registrationService';
import Button from '../ui/Button';
import Card from '../ui/Card';
import RadioGroup from '../ui/RadioGroup';
import SectionTitle from '../ui/SectionTitle';
import type { OtpMethod } from '../../context/RegistrationContext/reducer';
import { SEND_CODE_MODE } from '../../constants/registration-form';

const Step2_OtpForwardOption = () => {
  const { state, dispatch } = useRegistration();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBack = () => dispatch({ type: 'PREV_STEP' });

  const handleOTPMethodChange = (method: OtpMethod) => {
    dispatch({ type: 'UPDATE_OTP_SELECTED_METHOD', payload: method });
  };

  const handleSubmit = async () => {
    if (!state.selectedMethod) return;

    setLoading(true);
    setError(null);

    const res = await requestOtp({
      email: state.form.email,
      phone: state.form.phone,
    });

    setLoading(false);

    if (!res.success) {
      setError(res.error ?? 'Failed to send OTP');
      return;
    }

    dispatch({ type: 'NEXT_STEP' });
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
          value={state.selectedMethod}
          onChange={handleOTPMethodChange}
          options={SEND_CODE_MODE}
        />
      </Card>
      <div className="flex justify-between gap-5 mt-5">
        <Button onClick={handleBack} label="Back" className="w-[295px]" />
        <Button
          variant="primary"
          onClick={handleSubmit}
          label={loading ? 'Loading...' : 'Next'}
          className="w-[295px]"
          disabled={loading}
        />
      </div>
      {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
    </div>
  );
};

export default Step2_OtpForwardOption;
