import { render, screen, fireEvent } from '@testing-library/react';
import SelectInput from './SelectInput';

describe('SelectInput Component', () => {
  const mockOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ];

  it('renders label and tooltip', () => {
    render(
      <SelectInput
        label="Country"
        name="country"
        value=""
        onChange={() => {}}
        options={mockOptions}
        tooltip="Select your country"
      />
    );
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByTitle(/select your country/i)).toBeInTheDocument();
  });

  it('renders placeholder and options', () => {
    render(
      <SelectInput
        label="Country"
        name="country"
        value=""
        onChange={() => {}}
        options={mockOptions}
        placeholder="Choose one"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Choose one')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    render(
      <SelectInput
        label="Country"
        name="country"
        value=""
        onChange={handleChange}
        options={mockOptions}
        placeholder="Choose one"
      />
    );

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'uk' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies error styling when error is provided', () => {
    render(
      <SelectInput
        label="Country"
        name="country"
        value=""
        onChange={() => {}}
        options={mockOptions}
        error="This field is required"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select.className).toMatch(/border-\[#B3261E\]/);
  });
});
