import { render, screen } from '@testing-library/react';
import Registration from './index';
import * as useRegistrationModule from '../../hooks/useRegistration';

vi.mock('../../hooks/useRegistration');

describe('Registration', () => {
  it('renders Step 1 when step is 1', () => {
    vi.spyOn(useRegistrationModule, 'useRegistration').mockReturnValue({
      state: { step: 1, form: {} },
    } as any);

    render(<Registration />);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Info/i)).toBeInTheDocument();
  });

  it.skip('renders Step 2 when step is 2', () => {
    vi.spyOn(useRegistrationModule, 'useRegistration').mockReturnValue({
      state: { step: 2, form: {} },
    } as any);

    render(<Registration />);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it.skip('renders Step 3 when step is 3', () => {
    vi.spyOn(useRegistrationModule, 'useRegistration').mockReturnValue({
      state: { step: 3, form: {} },
    } as any);

    render(<Registration />);
    expect(screen.getByText(/Enter OTP/i)).toBeInTheDocument();
    expect(screen.getByText(/Verify OTP/i)).toBeInTheDocument();
  });
});
