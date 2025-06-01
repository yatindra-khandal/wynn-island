import type { OtpMethod } from '../context/RegistrationContext/reducer';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
}

export interface OtpRequestData {
  email?: string;
  phone?: string;
}

export interface OtpVerifyData {
  otp: string;
  method: OtpMethod;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
