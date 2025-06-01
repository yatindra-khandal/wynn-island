import { render, screen, fireEvent } from '@testing-library/react';
import SuccessMessage from './SuccessMessage';

describe('SuccessMessage', () => {
  it('renders the success title and message', () => {
    render(<SuccessMessage />);
    expect(screen.getByText(/You're all set!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/We’ve sent a verification link to your email address/i)
    ).toBeInTheDocument();
  });

  it('renders the Resend Email button', () => {
    render(<SuccessMessage />);
    const button = screen.getByRole('button', { name: /resend email/i });
    expect(button).toBeInTheDocument();
  });

  it('calls alert when Resend Email button is clicked', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<SuccessMessage />);
    fireEvent.click(screen.getByRole('button', { name: /resend email/i }));
    expect(alertMock).toHaveBeenCalledWith('Resend verification link');
    alertMock.mockRestore();
  });
});
