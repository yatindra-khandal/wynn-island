import { renderHook } from '@testing-library/react';
import { useRegistration } from './useRegistration';
import { RegistrationProvider } from '../context/RegistrationContext';

describe('useRegistration', () => {
  it('throws error when used outside RegistrationProvider', () => {
    expect(() => renderHook(() => useRegistration())).toThrow(
      'useRegistration must be used within RegistrationProvider'
    );
  });

  it('returns context value when used inside RegistrationProvider', () => {
    const mockContext = {
      state: {
        step: 1,
        form: {
          country: '',
          email: '',
          firstName: '',
          gender: '',
          lastName: '',
          otp: '',
          phone: '',
          termsAccepted: false,
        },
        selectedMethod: '',
      },
      dispatch: () => {},
    };

    const wrapper = ({ children }: any) => <RegistrationProvider>{children}</RegistrationProvider>;

    const { result } = renderHook(() => useRegistration(), { wrapper });
    expect(result.current.state).toEqual(mockContext.state);
    expect(result.current.dispatch).toEqual(expect.any(Function));
  });
});
