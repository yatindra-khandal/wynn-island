import { render, screen, fireEvent } from '@testing-library/react';
import SuccessMessage from './SuccessMessage';
import { resendVerificationEmail } from '../../services/registrationService';
import { RegistrationContext } from '../../context/RegistrationContext';
import type { State } from '../../context/RegistrationContext/reducer';

vi.mock('../../services/registrationService', () => ({
  resendVerificationEmail: vi.fn(),
}));

const mockState = {
  step: 3,
  selectedMethod: 'email', // Corrected type to OtpMethod
  form: {
    email: '',
    phone: '',
  },
} as State;

const renderWithContext = () =>
  render(
    <RegistrationContext.Provider value={{ state: mockState, dispatch: vi.fn() }}>
      <SuccessMessage />
    </RegistrationContext.Provider>
  );

describe('SuccessMessage', () => {
  it('renders the success title and message', () => {
    renderWithContext();
    expect(screen.getByText(/You're all set!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/We’ve sent a verification link to your email address/i)
    ).toBeInTheDocument();
  });

  it('renders the Resend Email button', () => {
    renderWithContext();
    const button = screen.getByRole('button', { name: /resend email/i });
    expect(button).toBeInTheDocument();
  });

  it('calls resendVerificationEmail when Resend Email button is clicked', () => {
    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /resend email/i }));
    expect(resendVerificationEmail).toHaveBeenCalledWith({ method: 'email', otp: '' });
  });
});
