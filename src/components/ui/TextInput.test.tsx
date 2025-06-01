import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders label and input', () => {
    render(<TextInput label="First Name" name="firstName" value="" onChange={() => {}} />);
    const input = screen.getByLabelText(/first name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'firstName');
  });

  it('calls onChange when input changes', () => {
    const handleChange = vi.fn();
    render(
      <TextInput
        label="First Name"
        name="firstName"
        value=""
        onChange={handleChange}
        placeholder="Your name"
      />
    );
    const input = screen.getByPlaceholderText(/your name/i);
    fireEvent.change(input, { target: { value: 'Alice' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('sets aria-invalid and error classes when error is provided', () => {
    render(
      <TextInput
        label="First Name"
        name="firstName"
        value=""
        onChange={() => {}}
        error="Required"
      />
    );
    const input = screen.getByLabelText(/first name/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.className).toMatch(/border-\[#B3261E\]/);
  });

  it('renders tooltip when provided', () => {
    render(
      <TextInput
        label="First Name"
        name="firstName"
        value=""
        onChange={() => {}}
        tooltip="This is your legal name"
      />
    );
    expect(screen.getByTitle(/legal name/i)).toBeInTheDocument();
  });
});
