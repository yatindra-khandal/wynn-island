import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders all footer sections', () => {
    render(<Footer />);
    expect(screen.getByLabelText(/Shop links/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Corporate links/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Destinations/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Social media/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Legal and Copyright/i)).toBeInTheDocument();
  });

  it('renders address and phone number', () => {
    render(<Footer />);
    expect(screen.getByText(/Wynn and Encore Las Vegas/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 \(702\) 770-7000/i)).toBeInTheDocument();
  });

  it('renders connect heading', () => {
    render(<Footer />);
    expect(screen.getByText(/Connect with us/i)).toBeInTheDocument();
  });

  it('renders all social media links correctly', () => {
    vi.mock('../../constants/footer-links', () => ({
      default: {
        SOCIAL_LINKS: [
          {
            id: 'Facebook',
            imgUrl: '/social-icons/facebook.svg',
            href: '',
            label: 'Facebook',
          },
          {
            id: 'Twitter',
            imgUrl: '/social-icons/x.svg',
            href: '',
            label: 'twitter (X)',
          },
        ],
        CORPORATE_LINKS: [],
        SHOP_LINKS: [],
        DESTINATIONS: [],
      },
    }));

    render(<Footer />);
    [
      {
        id: 'Facebook',
        imgUrl: '/social-icons/facebook.svg',
        href: '',
        label: 'Facebook',
      },
      {
        id: 'Twitter',
        imgUrl: '/social-icons/x.svg',
        href: '',
        label: 'twitter (X)',
      },
    ].forEach((link) => {
      const socialLink = screen.getByLabelText(link.label);
      expect(socialLink).toHaveAttribute('href', link.href);
    });
  });
});
