import { navLinks } from '../../constants';
import LanguageSelector from './LanguageSelector';

type NavLinksProps = {
  className?: string;
  ref: React.Ref<HTMLDivElement>;
  onMenuSelect?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ className = '', ref, onMenuSelect }) => {
  return (
    <nav
      data-testid="primary-navigation"
      id="primary-navigation"
      ref={ref}
      className={`${className} 
      transition-all duration-300 ease-in-out transform pb-2
      md:overflow-x-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 md:opacity-100
       md:max-h-full md:transform-none`}
    >
      <LanguageSelector containerClass="sm:hidden mb-4" />
      {navLinks.map((link) => (
        <a
          href="#"
          key={link.id}
          onClick={onMenuSelect}
          className="font-avenir font-semibold text-sm tracking-tight leading-5 uppercase whitespace-nowrap"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
