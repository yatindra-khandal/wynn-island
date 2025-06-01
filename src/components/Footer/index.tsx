import FOOTER_LINKS from '../../constants/footer-links';
import SocialIcon from '../ui/SocialIcon';
import FooterSection from './FooterSection';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5A3A27] py-10 px-4 sm:px-10 md:px-20 xl:px-32 2xl:px-40 flex flex-col gap-6 sm:gap-8 text-white text-[11px] tracking-tight">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        <FooterSection ariaLabel="Shop links" links={FOOTER_LINKS.SHOP_LINKS} />
        <FooterSection ariaLabel="Corporate links" links={FOOTER_LINKS.CORPORATE_LINKS} />
        <FooterSection ariaLabel="Destinations" links={FOOTER_LINKS.DESTINATIONS} />

        <div className="flex flex-col gap-3 py-1.5">
          <address className="flex flex-col gap-3 not-italic">
            <p>Wynn and Encore Las Vegas</p>
            <p>3131 Las Vegas Blvd. Las Vegas, NV 89109</p>
            <p>
              <a href="tel:+17027707000" target="_blank" rel="noopener noreferrer">
                +1 (702) 770-7000
              </a>
            </p>
          </address>
          <div>
            <h3 className="leading-6 tracking-[1px]">Connect with us.</h3>
            <nav aria-label="Social media">
              <ul className="flex flex-wrap gap-x-6 gap-y-4 py-1.5">
                {FOOTER_LINKS.SOCIAL_LINKS.map((link) => (
                  <SocialIcon
                    key={link.id}
                    href={link.href}
                    label={link.label}
                    imgUrl={link.imgUrl}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section
        className="flex flex-col gap-2.5 items-center w-full text-center"
        aria-label="Legal and Copyright"
      >
        <p className="text-xs">Do Not Sell Or Share My Data</p>
        <small className="text-xs md:text-[11px]">
          &copy; {new Date().getFullYear()} Wynn Resorts Holdings, LLC. All rights reserved.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
