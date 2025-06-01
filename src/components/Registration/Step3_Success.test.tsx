import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Step3_Success from './Step3_Success';
import { RegistrationContext } from '../../context/RegistrationContext';

const mockDispatch = vi.fn();

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
      <Step3_Success />
    </RegistrationContext.Provider>
  );
};

describe('Step3_Success', () => {
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

  it('triggers alert with OTP value on submit', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithContext();
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitBtn);

    expect(alertMock).toHaveBeenCalledWith('Submitting OTP: ');
    alertMock.mockRestore();
  });

  it('triggers PREV_STEP dispatch on Back click', () => {
    renderWithContext();
    const backBtn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backBtn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PREV_STEP' });
  });

  it('triggers alert on resend OTP click', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderWithContext();
    const resend = screen.getByText(/Click to resend/i);
    fireEvent.click(resend);
    expect(alertMock).toHaveBeenCalledWith('Resend OTP');
    alertMock.mockRestore();
  });
});
