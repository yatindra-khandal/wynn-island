import { navLinks } from '../constants';

const Header = () => (
  <header className="px-[60px] py-[24px] bg-white">
    <div className="flex items-center justify-between">
      <a href="/" aria-label="Wynn Resorts Home">
        <img src="/wynn-logo.svg" alt="Wynn Resorts" />
      </a>
      <nav className="flex justify-between gap-[41px]">
        {navLinks.map((link) => (
          <a
            href="#"
            key={link.id}
            className="font-avenir font-semibold text-sm leading-[17px] tracking-[0.5px] uppercase"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="wynn-lang">
        <button className="lang-btn" aria-label="Select Language">
          EN <span aria-hidden="true">▼</span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
