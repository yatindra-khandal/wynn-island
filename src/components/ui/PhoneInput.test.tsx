import { render, screen, fireEvent } from '@testing-library/react';
import PhoneInput from './PhoneInput';

describe('PhoneInput', () => {
  it('renders label and tooltip', () => {
    render(
      <PhoneInput
        label="Phone Number"
        name="phone"
        value=""
        onChange={() => {}}
        tooltip="Include country code"
      />
    );

    expect(screen.getByText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByTitle(/include country code/i)).toBeInTheDocument();
  });

  it('calls onChange handler when input changes', () => {
    const handleChange = vi.fn();
    render(<PhoneInput label="Phone" name="phone" value="" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '97150' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error class when error prop is passed', () => {
    render(
      <PhoneInput label="Phone" name="phone" value="" onChange={() => {}} error="Invalid number" />
    );

    const input = screen.getByRole('textbox');
    expect(input.className).toMatch(/!border-\[#B3261E\]/);
  });
});
