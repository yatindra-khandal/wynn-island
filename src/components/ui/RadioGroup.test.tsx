import { render, screen, fireEvent } from '@testing-library/react';
import RadioGroup from './RadioGroup';

describe('RadioGroup Component', () => {
  const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ];

  it('renders all radio options with correct labels', () => {
    render(<RadioGroup name="test" value="a" onChange={() => {}} options={options} />);
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
    expect(screen.getByLabelText('Option B')).toBeInTheDocument();
  });

  it('marks the correct option as checked', () => {
    render(<RadioGroup name="test" value="b" onChange={() => {}} options={options} />);
    const optionB = screen.getByLabelText('Option B') as HTMLInputElement;
    expect(optionB.checked).toBe(true);
  });

  it('calls onChange with the correct value when an option is selected', () => {
    const handleChange = vi.fn();
    render(<RadioGroup name="test" value="a" onChange={handleChange} options={options} />);

    const optionB = screen.getByLabelText('Option B');
    fireEvent.click(optionB);
    expect(handleChange).toHaveBeenCalledWith('b');
  });
});
