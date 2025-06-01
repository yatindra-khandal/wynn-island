import { render, screen, fireEvent } from '@testing-library/react';
import NewsLetter from './NewsLetter';

describe('NewsLetter Component', () => {
  it('renders heading and description', () => {
    render(<NewsLetter />);
    expect(screen.getByRole('heading', { name: /Get News & Updates/i })).toBeInTheDocument();
    expect(screen.getByText(/Get latest developments/i)).toBeInTheDocument();
  });

  it('submits email and shows thank you message', () => {
    render(<NewsLetter />);

    const input = screen.getByPlaceholderText(/Your email address/i);
    const button = screen.getByRole('button', { name: /Join the Newsletter/i });

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
  });
});
