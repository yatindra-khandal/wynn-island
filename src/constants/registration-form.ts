import type { OtpMethod } from '../context/RegistrationContext/reducer';

type CODE_MODE_OPTION = {
  label: string;
  value: OtpMethod;
};

export const SEND_CODE_MODE: CODE_MODE_OPTION[] = [
  {
    label: 'Send to Phone',
    value: 'mobile',
  },
  { label: 'Send to Email', value: 'email' },
];
