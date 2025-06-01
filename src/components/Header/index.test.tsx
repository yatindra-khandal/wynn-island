import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders logo and nav elements correctly', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /wynn resorts home/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(1);
    const languageSelectors = screen.getAllByTestId('language-selector');
    expect(languageSelectors.length).toBeGreaterThan(0);
    expect(languageSelectors[0]).toBeInTheDocument();
  });

  it('applies base classes for mobile navigation container', () => {
    render(<Header />);
    const nav = screen.getAllByTestId('primary-navigation')[1];
    expect(nav.className).toContain('transition-all duration-300 ease-in-out transform pb-2');
  });

  it('starts with mobile menu closed', () => {
    render(<Header />);
    const nav = screen.getAllByTestId('primary-navigation')[1];
    expect(nav.className).toContain('md:hidden max-h-0 opacity-0');
  });

  it('opens mobile menu on toggle click', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(toggleButton);
    const nav = screen.getAllByTestId('primary-navigation')[1];
    expect(nav.className).toContain('md:hidden max-h-screen opacity-100');
  });

  it('closes mobile menu on second toggle click', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(toggleButton); // open
    fireEvent.click(toggleButton); // close
    const nav = screen.getAllByTestId('primary-navigation')[1];
    expect(nav.className).toContain('md:hidden max-h-0 opacity-0');
  });

  it('closes mobile menu on Escape key press', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });

    fireEvent.click(toggleButton);
    const nav = screen.getAllByTestId('primary-navigation')[1];
    expect(nav.className).toContain('opacity-100');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(nav.className).toContain('opacity-0');
  });

  it('closes mobile menu on menu link click', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    const nav = screen.getAllByTestId('primary-navigation')[1];

    fireEvent.click(toggleButton);
    expect(nav.className).toContain('opacity-100');

    const navLink = nav.querySelector('a');
    fireEvent.click(navLink!);
    expect(nav.className).toContain('opacity-0');
  });

  it('traps focus within navlinks when mobile menu is open and tabbing', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(toggleButton);

    const links = screen.getAllByTestId('primary-navigation')[1].querySelectorAll('a');

    links[0].focus();
    expect(document.activeElement).toBe(links[0]);

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(links[links.length - 1]);

    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(links[0]);
  });
});
