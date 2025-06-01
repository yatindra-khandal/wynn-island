import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { firstName, lastName, email, termsAccepted } = req.body;

  if (!firstName || !lastName || !email || !termsAccepted) {
    return res.status(400).json({ message: 'Missing required registration fields' });
  }

  console.log('Registration data received:', req.body);
  setTimeout(() => res.status(200).json({ message: 'Registration successful' }), 500);
});

app.post('/request-otp', (req, res) => {
  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ message: 'Must provide email or phone for OTP request' });
  }

  console.log('OTP requested for:', req.body);
  setTimeout(() => res.status(200).json({ message: 'OTP sent' }), 300);
});

app.post('/verify-otp', (req, res) => {
  const { otp, method } = req.body;

  if (!otp || !method) {
    return res.status(400).json({ message: 'OTP and method are required' });
  }

  console.log('OTP verification attempt:', req.body);

  if (otp === '1234') {
    return res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
});

app.post('/resend-verification-email', (req, res) => {
  const { method } = req.body;

  if (!method) {
    return res.status(400).json({ message: 'Method is required for resending verification email' });
  }

  console.log('Resend verification email request:', req.body);
  setTimeout(
    () => res.status(200).json({ message: 'Verification email resent successfully' }),
    300
  );
});

app.listen(port, () => {
  console.log(`Mock server running on http://localhost:${port}`);
});
