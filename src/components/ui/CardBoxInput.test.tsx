import { render, screen, fireEvent } from '@testing-library/react';
import CheckBoxInput from './CheckBoxInput';

describe('CheckBoxInput', () => {
  it('renders checkbox and label', () => {
    render(<CheckBoxInput name="terms" label="Accept Terms" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(
      <CheckBoxInput name="terms" label="Accept Terms" checked={false} onChange={handleChange} />
    );
    fireEvent.click(screen.getByLabelText(/accept terms/i));
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error styling when error is provided', () => {
    render(
      <CheckBoxInput
        name="terms"
        label="Accept Terms"
        checked={false}
        onChange={() => {}}
        error="Required"
      />
    );
    const input = screen.getByLabelText(/accept terms/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.className).toContain('ring-1');
  });

  it('displays tooltip when provided', () => {
    render(
      <CheckBoxInput
        name="terms"
        label="Accept Terms"
        checked={false}
        onChange={() => {}}
        tooltip="More info"
      />
    );
    expect(screen.getByTitle(/more info/i)).toBeInTheDocument();
  });
});
