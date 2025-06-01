import { render, screen } from '@testing-library/react';
import RegistrationPage from './RegistrationPage';

describe('RegistrationPage Component', () => {
  it('renders Registration and NewsLetter components inside RegistrationProvider', () => {
    render(<RegistrationPage />);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByText(/NewsLetter/i)).toBeInTheDocument();
  });
});
