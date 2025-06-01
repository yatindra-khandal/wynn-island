import { render, screen, fireEvent } from '@testing-library/react';
import Step2_OtpForwardOption from './Step2_OtpForwardOption';
import { RegistrationContext } from '../../context/RegistrationContext';
import { requestOtp } from '../../services/registrationService';

vi.mock('../../services/registrationService', () => ({
  requestOtp: vi.fn(),
}));

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
      <Step2_OtpForwardOption />
    </RegistrationContext.Provider>
  );
};

describe('Step2_OtpForwardOption', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    (requestOtp as vi.Mock).mockClear();
  });

  it('renders correctly', () => {
    renderWithContext();
    expect(screen.getByText(/otp verification/i)).toBeInTheDocument();
    expect(screen.getByText(/how would you like to receive the code/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('dispatches PREV_STEP when back is clicked', () => {
    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /back/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'PREV_STEP' });
  });

  it('dispatches UPDATE_OTP_SELECTED_METHOD when method changes', () => {
    renderWithContext();
    const radio = screen.getByRole('radio', { name: /email/i });
    fireEvent.click(radio);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_OTP_SELECTED_METHOD',
      payload: 'email',
    });
  });

  it('dispatches NEXT_STEP when method is selected and next is clicked', async () => {
    (requestOtp as vi.Mock).mockResolvedValue({ success: true });
    renderWithContext({
      selectedMethod: 'email',
      form: { email: 'test@example.com', phone: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(await screen.findByRole('button', { name: /next/i })).toBeInTheDocument();
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'NEXT_STEP' });
  });

  it('shows error if requestOtp fails', async () => {
    (requestOtp as vi.Mock).mockResolvedValue({ success: false, error: 'Network error' });
    renderWithContext({
      selectedMethod: 'email',
      form: { email: 'test@example.com', phone: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });

  it('disables next button while loading', async () => {
    let resolvePromise: (value?: unknown) => void;
    const promise = new Promise((resolve) => (resolvePromise = resolve));
    (requestOtp as vi.Mock).mockReturnValue(promise);

    renderWithContext({
      selectedMethod: 'email',
      form: { email: 'test@example.com', phone: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(screen.getByRole('button', { name: /loading/i })).toBeDisabled();
  });
});
