import { z } from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.string().min(1, 'Gender is required'),
  country: z.string().min(1, 'Country is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms & conditions' }),
  }),
});
