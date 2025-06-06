export type OtpMethod = 'mobile' | 'email' | '';

export type State = {
  step: number;
  selectedMethod: OtpMethod;
  form: {
    firstName: string;
    lastName: string;
    gender: string;
    country: string;
    email: string;
    phone: string;
    termsAccepted: boolean;
    otp: string;
  };
};

export type Action =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_OTP_SELECTED_METHOD'; payload: OtpMethod }
  | { type: 'UPDATE_FIELD'; payload: { field: keyof State['form']; value: string | boolean } };

export const initialState: State = {
  step: 1,
  selectedMethod: '',
  form: {
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    email: '',
    phone: '',
    termsAccepted: false,
    otp: '',
  },
};

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_OTP_SELECTED_METHOD':
      return { ...state, selectedMethod: action.payload };
    case 'UPDATE_FIELD':
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
}
