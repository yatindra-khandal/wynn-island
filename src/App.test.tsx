vi.mock('./pages/RegistrationPage', () => ({
  default: () => <section aria-label="Registration">Mocked Registration Page</section>,
}));

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Header, RegistrationPage, and Footer', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toContainElement(
      screen.getByRole('heading', { level: 1, name: /wynn resorts/i })
    );
    expect(screen.getByLabelText(/registration/i)).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
