import { render, screen } from '@testing-library/react';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders the title inside a heading', () => {
    render(<SectionTitle title="Personal Info" />);
    expect(screen.getByRole('heading', { name: /personal info/i })).toBeInTheDocument();
  });

  it('applies the custom className to the wrapper', () => {
    render(<SectionTitle title="Contact" className="mt-10" />);
    const wrapper = screen.getByText('Contact').parentElement;
    expect(wrapper?.className).toContain('mt-10');
  });

  it('renders underline div with correct style', () => {
    render(<SectionTitle title="Contact" />);
    const underline = screen.getByText('Contact').nextSibling as HTMLDivElement;
    expect(underline).toBeInTheDocument();
    expect(underline.style.width).toBe('calc(100% + 20px)');
  });
});
