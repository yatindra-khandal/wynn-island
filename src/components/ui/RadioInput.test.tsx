import { render, screen, fireEvent } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('RadioInput', () => {
  it('renders label and hidden radio input', () => {
    render(
      <RadioInput
        name="preference"
        value="email"
        checked={false}
        onChange={() => {}}
        label="Email"
      />
    );

    const radio = screen.getByLabelText('Email');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio).toHaveClass('sr-only');
  });

  it('calls onChange with value when clicked', () => {
    const handleChange = vi.fn();
    render(
      <RadioInput
        name="preference"
        value="email"
        checked={false}
        onChange={handleChange}
        label="Email"
      />
    );

    fireEvent.click(screen.getByLabelText('Email'));
    expect(handleChange).toHaveBeenCalledWith('email');
  });

  it('renders the checked indicator when selected', () => {
    render(
      <RadioInput
        name="preference"
        value="email"
        checked={true}
        onChange={() => {}}
        label="Email"
      />
    );

    const wrapper = screen.getByLabelText('Email').parentElement;
    const circles = wrapper?.querySelectorAll('span > span');
    expect(circles?.length).toBeGreaterThan(0);
  });

  it('does not render checked indicator when not selected', () => {
    render(
      <RadioInput
        name="preference"
        value="email"
        checked={false}
        onChange={() => {}}
        label="Email"
      />
    );

    const wrapper = screen.getByLabelText('Email').parentElement;
    const circles = wrapper?.querySelectorAll('span > span');
    expect(circles?.length).toBe(0);
  });
});
