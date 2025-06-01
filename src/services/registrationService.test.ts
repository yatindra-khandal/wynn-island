import {
  submitRegistration,
  requestOtp,
  verifyOtp,
  resendVerificationEmail,
} from '../services/registrationService';
import { post } from '../services/comms';

vi.mock('../services/comms', () => ({
  post: vi.fn(),
}));

describe('registrationService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('submitRegistration', () => {
    it('returns success response on success', async () => {
      (post as vi.Mock).mockResolvedValue({ data: {} });
      const res = await submitRegistration({} as any);
      expect(res.success).toBe(true);
    });

    it('returns error response on failure', async () => {
      (post as vi.Mock).mockRejectedValue({ response: { data: { message: 'fail' } } });
      const res = await submitRegistration({} as any);
      expect(res.success).toBe(false);
      expect(res.error).toBe('fail');
    });
  });

  describe('requestOtp', () => {
    it('returns success response on success', async () => {
      (post as vi.Mock).mockResolvedValue({ data: {} });
      const res = await requestOtp({ email: 'test@example.com' });
      expect(res.success).toBe(true);
    });

    it('returns error response on failure', async () => {
      (post as vi.Mock).mockRejectedValue({ response: { data: { message: 'otp error' } } });
      const res = await requestOtp({ email: 'test@example.com' });
      expect(res.success).toBe(false);
      expect(res.error).toBe('otp error');
    });
  });

  describe('verifyOtp', () => {
    it('returns success response on success', async () => {
      (post as vi.Mock).mockResolvedValue({ data: {} });
      const res = await verifyOtp({ otp: '1234', method: 'email' });
      expect(res.success).toBe(true);
    });

    it('returns error response on failure', async () => {
      (post as vi.Mock).mockRejectedValue({ response: { data: { message: 'verify fail' } } });
      const res = await verifyOtp({ otp: '1234', method: 'email' });
      expect(res.success).toBe(false);
      expect(res.error).toBe('verify fail');
    });
  });

  describe('resendVerificationEmail', () => {
    it('returns success response on success', async () => {
      (post as vi.Mock).mockResolvedValue({ data: {} });
      const res = await resendVerificationEmail({ otp: '', method: 'email' });
      expect(res.success).toBe(true);
    });

    it('returns error response on failure', async () => {
      (post as vi.Mock).mockRejectedValue({ response: { data: { message: 'resend error' } } });
      const res = await resendVerificationEmail({ otp: '', method: 'email' });
      expect(res.success).toBe(false);
      expect(res.error).toBe('resend error');
    });
  });
});
