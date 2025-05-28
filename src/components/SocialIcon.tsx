type SocialIconProps = {
  href: string;
  label: string;
  imgUrl: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, imgUrl }) => (
  <li className="rounded-full h-7 w-7 bg-white flex justify-center items-center shrink-0">
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
      <img src={imgUrl} alt={label} />
    </a>
  </li>
);

export default SocialIcon;
