import { useRegistration } from '../../hooks/useRegistration';
import Step1_PersonalContactInfo from './Step1_PersonalContactInfo';
import Step2_OtpVerification from './Step2_OtpVerification';
import Step3_Success from './Step3_Success';

const Registration = () => {
  const { state } = useRegistration();

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[630px] space-y-6 pb-6">
        <div className="flex flex-col gap-6 text-[#1D1F22] pb-6">
          <div className="flex flex-wrap items-center justify-between font-big-calson">
            <h2 className="text-4xl">Registration</h2>
            <span className="text-2xl">Step {state.step} of 3</span>
          </div>
          <p>Please enter below information to create your account.</p>
        </div>
        {state.step === 2 && <Step1_PersonalContactInfo />}
        {state.step === 3 && <Step2_OtpVerification />}
        {state.step === 1 && <Step3_Success />}
      </div>
    </main>
  );
};

export default Registration;
