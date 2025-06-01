import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Step3_OtpVerification from './Step3_OtpVerification';
import { RegistrationContext } from '../../context/RegistrationContext';
import { requestOtp, verifyOtp } from '../../services/registrationService';

const mockDispatch = vi.fn();
vi.mock('../../services/registrationService', () => ({
  verifyOtp: vi.fn(),
  requestOtp: vi.fn(),
}));

const renderWithContext = (form = {}, selectedMethod = 'email') => {
  return render(
    <RegistrationContext.Provider
      value={{
        state: {
          form: {
            email: 'alice@example.com',
            phone: '+123456789',
            ...form,
          },
          selectedMethod,
        },
        dispatch: mockDispatch,
      }}
    >
      <Step3_OtpVerification />
    </RegistrationContext.Provider>
  );
};

describe('Step3_OtpVerification', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders title and message correctly', () => {
    renderWithContext();
    expect(screen.getByText(/OTP Verification/i)).toBeInTheDocument();
    expect(screen.getByText(/Please check your email/i)).toBeInTheDocument();
  });

  it('displays email when selectedMethod is email', () => {
    renderWithContext({}, 'email');
    expect(screen.getByText(/alice@example\.com/i)).toBeInTheDocument();
  });

  it('displays phone when selectedMethod is phone', () => {
    renderWithContext({}, 'phone');
    expect(screen.getByText(/\+123456789/i)).toBeInTheDocument();
  });

  it('calls verifyOtp on submit', async () => {
    (verifyOtp as vi.Mock).mockResolvedValue({ success: true });
    renderWithContext();
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);
    expect(verifyOtp).toHaveBeenCalled();
  });

  it('triggers PREV_STEP dispatch on Back click', () => {
    renderWithContext();
    const backBtn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backBtn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PREV_STEP' });
  });

  it('triggers requestOtp on resend OTP click', () => {
    (requestOtp as vi.Mock).mockResolvedValue({ success: true });

    renderWithContext();
    const resend = screen.getByText(/Click to resend/i);
    fireEvent.click(resend);
    expect(requestOtp).toHaveBeenCalled();
  });

  it('shows success message after submitting valid OTP', async () => {
    renderWithContext();
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);
    expect(await screen.findByText(/You're all set!/i)).toBeInTheDocument();
  });

  it('shows loading state when submitting', async () => {
    renderWithContext();
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);
    expect(submitBtn).toHaveTextContent(/Submitting/i);
  });

  it('displays error message on failed OTP verification', async () => {
    (verifyOtp as vi.Mock).mockRejectedValueOnce(new Error('Invalid OTP'));

    renderWithContext();
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Invalid or expired OTP/i)).toBeInTheDocument();
  });
});
