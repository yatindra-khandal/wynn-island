import { resendVerificationEmail } from '../../services/registrationService';
import { useRegistration } from '../../hooks/useRegistration';

const SuccessMessage = () => {
  const { state } = useRegistration();
  return (
    <div className="max-w-md mx-auto text-center p-6 rounded shadow bg-white">
      <h2 className="text-2xl font-semibold text-[#1D1F22] mb-4">You're all set!</h2>
      <p className="text-sm text-gray-600 mb-6">
        We’ve sent a verification link to your email address. Please check your inbox and click the
        link to activate your account.
      </p>
      <button
        type="button"
        className="bg-[#006F62] text-white px-6 py-3 rounded cursor-pointer"
        onClick={() => resendVerificationEmail({ method: state.selectedMethod, otp: '' })}
      >
        Resend Email
      </button>
    </div>
  );
};

export default SuccessMessage;
