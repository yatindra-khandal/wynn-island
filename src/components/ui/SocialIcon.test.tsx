import { render, screen } from '@testing-library/react';
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
  const props = {
    href: 'https://example.com',
    label: 'Example',
    imgUrl: 'example.png',
  };

  it('renders a list item with a link', () => {
    render(<SocialIcon {...props} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();

    const link = screen.getByRole('link', { name: props.label });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveAttribute('aria-label', props.label);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    expect(screen.getByAltText(props.label)).toHaveAttribute('src', props.imgUrl);
  });
});
