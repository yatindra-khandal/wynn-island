import { render, screen } from '@testing-library/react';
import FooterSection from './FooterSection';

describe('FooterSection', () => {
  const mockLinks = [
    { id: '1', label: 'Privacy Policy', href: '/privacy' },
    { id: '2', label: 'Terms of Service', href: '/terms' },
  ];

  it('renders aria-label correctly', () => {
    render(<FooterSection ariaLabel="Legal Links" links={mockLinks} />);
    expect(screen.getByLabelText('Legal Links')).toBeInTheDocument();
  });

  it('renders all links', () => {
    render(<FooterSection ariaLabel="Legal Links" links={mockLinks} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockLinks.length);
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toHaveAttribute('href', link.href);
    });
  });
});
