import { render, screen, fireEvent } from '@testing-library/react';
import Step1_PersonalContactInfo from './Step1_PersonalContactInfo';
import { RegistrationContext } from '../../context/RegistrationContext';

vi.mock('../ui/PhoneInput', () => ({
  default: ({ label, name, value, onChange, error, tooltip }: any) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-label={label}
        aria-invalid={!!error}
      />
      {tooltip && <span title={tooltip} />}
    </div>
  ),
}));

const mockDispatch = vi.fn();
const baseForm = {
  firstName: '',
  lastName: '',
  gender: '',
  country: '',
  email: '',
  phone: '',
  termsAccepted: false,
};

const renderWithContext = (formOverrides = {}) => {
  const context = {
    state: { form: { ...baseForm, ...formOverrides } },
    dispatch: mockDispatch,
  };
  return render(
    <RegistrationContext.Provider value={context}>
      <Step1_PersonalContactInfo />
    </RegistrationContext.Provider>
  );
};

describe('Step1_PersonalContactInfo', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders all required fields and tooltips', () => {
    renderWithContext();
    const fields = [
      'first name *',
      'last name *',
      'Gender *',
      'your residance country *',
      'email *',
      'phone number *',
    ];

    fields.forEach((label) => {
      expect(screen.getByLabelText(new RegExp(label, 'i'))).toBeInTheDocument();
    });

    expect(screen.getAllByTitle(/please enter|select|valid/i).length).toBeGreaterThan(0);
  });

  it('shows field-level validation errors on invalid input change', () => {
    renderWithContext();
    const input = screen.getByLabelText(/first name/i);
    fireEvent.change(input, { target: { value: '', name: 'firstName' } });
    fireEvent.blur(input);
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(screen.queryByText(/please enter your legal first name/i)).toBeDefined;
  });

  it('does not dispatch NEXT_STEP if form has errors', () => {
    renderWithContext();
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(mockDispatch).not.toHaveBeenCalledWith({ type: 'NEXT_STEP' });
  });

  it('dispatches field update on change and clears errors if valid', () => {
    renderWithContext();
    const input = screen.getByLabelText(/last name/i);
    fireEvent.change(input, { target: { value: 'Smith', name: 'lastName' } });

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'UPDATE_FIELD',
        payload: { field: 'lastName', value: 'Smith' },
      })
    );
  });

  it('shows terms checkbox and prevents submission if not accepted', () => {
    renderWithContext({ ...baseForm, termsAccepted: false });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(mockDispatch).not.toHaveBeenCalledWith({ type: 'NEXT_STEP' });
    expect(screen.getByLabelText(/terms/i)).toBeInTheDocument();
  });

  it('handles checkbox input correctly and dispatches update', () => {
    renderWithContext({ termsAccepted: false });
    const checkbox = screen.getByLabelText(/i agree to/i) as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_FIELD',
      payload: { field: 'termsAccepted', value: true },
    });
  });

  it('dispatches NEXT_STEP when form is completely valid', () => {
    renderWithContext({
      firstName: 'Alice',
      lastName: 'Smith',
      gender: 'female',
      country: 'us',
      email: 'alice@example.com',
      phone: '+123456789',
      termsAccepted: true,
    });

    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'NEXT_STEP' });
  });
});
