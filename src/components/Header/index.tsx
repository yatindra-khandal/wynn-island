import { useState, useEffect, useRef } from 'react';
import Hamburger from '../../assets/Hamburger';
import CloseIcon from '../../assets/CloseIcon';
import LanguageSelector from './LanguageSelector';
import NavLinks from './NavLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);

      if (isMenuOpen && e.key === 'Tab' && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="px-15 py-6 bg-white">
      <div className="flex items-center justify-between gap-6 flex-wrap sm:flex-nowrap">
        <a
          href="/"
          aria-label="Wynn Resorts Home"
          className="w-28 sm:w-36 md:w-40 lg:w-[160px] shrink-0"
        >
          <h1 className="sr-only">Wynn Resorts</h1>
          <img src="/wynn-logo.svg" alt="Wynn Resorts" />
        </a>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <Hamburger /> : <CloseIcon />}
        </button>
        <NavLinks ref={navRef} className="hidden md:flex" />
        <LanguageSelector containerClass="hidden sm:block" />
      </div>
      <NavLinks
        ref={navRef}
        onMenuSelect={() => setIsMenuOpen(false)}
        className={`md:hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      />
    </header>
  );
};

export default Header;
