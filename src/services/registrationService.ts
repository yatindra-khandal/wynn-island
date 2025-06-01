import { post } from './comms';
import type { RegistrationData, ApiResponse, OtpRequestData, OtpVerifyData } from './type';

export async function submitRegistration(data: RegistrationData): Promise<ApiResponse<void>> {
  try {
    const response = await post<void>('/register', data);
    return { success: true, data: response.data };
  } catch (err: any) {
    return { success: false, error: err.response?.data?.message || err.message };
  }
}

export async function requestOtp(data: OtpRequestData): Promise<ApiResponse<void>> {
  try {
    const response = await post<void>('/request-otp', data);
    return { success: true, data: response.data };
  } catch (err: any) {
    return { success: false, error: err.response?.data?.message || err.message };
  }
}

export async function verifyOtp(data: OtpVerifyData): Promise<ApiResponse<void>> {
  try {
    const response = await post<void>('/verify-otp', data);
    return { success: true, data: response.data };
  } catch (err: any) {
    return { success: false, error: err.response?.data?.message || err.message };
  }
}

export async function resendVerificationEmail(data: OtpVerifyData): Promise<ApiResponse<void>> {
  try {
    const response = await post<void>('/resend-verification-email', data);
    return { success: true, data: response.data };
  } catch (err: any) {
    return { success: false, error: err.response?.data?.message || err.message };
  }
}
