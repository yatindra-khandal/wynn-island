import { render, screen, fireEvent } from '@testing-library/react';
import Step2_OtpVerification from './Step2_OtpVerification';
import { RegistrationContext } from '../../context/RegistrationContext';

const mockDispatch = vi.fn();

const renderWithContext = (overrides = {}) => {
  const defaultContext = {
    state: {
      selectedMethod: '',
      ...overrides,
    },
    dispatch: mockDispatch,
  };

  return render(
    <RegistrationContext.Provider value={defaultContext}>
      <Step2_OtpVerification />
    </RegistrationContext.Provider>
  );
};

describe('Step2_OtpVerification', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders section title and radio options', () => {
    renderWithContext();
    expect(screen.getByText(/otp verification/i)).toBeInTheDocument();
    expect(screen.getByText(/how would you like to receive the code/i)).toBeInTheDocument();
  });

  it('calls dispatch with selected OTP method', () => {
    renderWithContext();
    const radio = screen.getByLabelText(/email/i);
    fireEvent.click(radio);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_OTP_SELECTED_METHOD',
      payload: 'email',
    });
  });

  it('dispatches NEXT_STEP when method is selected and next is clicked', () => {
    renderWithContext({ selectedMethod: 'email' });
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'NEXT_STEP' });
  });

  it('does not dispatch NEXT_STEP when no method is selected', () => {
    renderWithContext({ selectedMethod: '' });
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(mockDispatch).not.toHaveBeenCalledWith({ type: 'NEXT_STEP' });
  });

  it('dispatches PREV_STEP when back is clicked', () => {
    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /back/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PREV_STEP' });
  });
});
