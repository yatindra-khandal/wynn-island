import { render, screen } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

describe('LanguageSelector', () => {
  it('renders the select input with language options', () => {
    render(<LanguageSelector />);
    const select = screen.getByLabelText(/select language/i);
    expect(select).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ZH')).toBeInTheDocument();
  });

  it('applies containerClass when provided', () => {
    render(<LanguageSelector containerClass="custom-class" />);
    const wrapper = screen.getByLabelText(/select language/i).parentElement;
    expect(wrapper?.className).toContain('custom-class');
  });

  it('renders the custom Chevron icon', () => {
    render(<LanguageSelector />);
    const icon = screen.getByLabelText(/select language/i).parentElement?.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});
