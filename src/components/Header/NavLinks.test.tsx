import { render, screen, fireEvent } from '@testing-library/react';
import NavLinks from './NavLinks';

vi.mock('../../constants', () => ({
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
}));

vi.mock('./LanguageSelector', () => ({
  default: ({ containerClass }: { containerClass: string }) => (
    <div data-testid="language-selector" className={containerClass}>
      LanguageSelector
    </div>
  ),
}));

describe('NavLinks', () => {
  it('renders all nav links', () => {
    const mockRef = { current: null };
    const mockHandler = vi.fn();

    render(<NavLinks ref={mockRef} onMenuSelect={mockHandler} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls onMenuSelect when a link is clicked', () => {
    const mockRef = { current: null };
    const mockHandler = vi.fn();

    render(<NavLinks ref={mockRef} onMenuSelect={mockHandler} />);

    fireEvent.click(screen.getByText('About'));
    expect(mockHandler).toHaveBeenCalled();
  });

  it('renders LanguageSelector', () => {
    const mockRef = { current: null };
    const mockHandler = vi.fn();

    render(<NavLinks ref={mockRef} onMenuSelect={mockHandler} />);
    expect(screen.getByTestId('language-selector')).toBeInTheDocument();
  });
});
