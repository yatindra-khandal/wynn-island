interface FooterSectionProps {
  ariaLabel: string;
  links: { id: string; label: string; href: string }[];
}

const FooterSection = ({ ariaLabel, links }: FooterSectionProps) => (
  <nav aria-label={ariaLabel}>
    <ul className="flex flex-col gap-3 py-1.5">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterSection;
