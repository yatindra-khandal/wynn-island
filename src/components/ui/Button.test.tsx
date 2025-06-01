import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with the given label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies primary variant styles', () => {
    render(<Button label="Primary" variant="primary" />);
    const button = screen.getByRole('button', { name: /primary/i });
    expect(button).toHaveClass('bg-[#006F62]');
    expect(button).toHaveClass('text-white');
  });

  it('applies secondary variant styles by default', () => {
    render(<Button label="Secondary" />);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('text-[#006F62]');
    expect(button).not.toHaveClass('bg-[#006F62]');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(handleClick).toHaveBeenCalled();
  });
});
