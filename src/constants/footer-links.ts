type FooterLink = {
  id: string;
  label: string;
  href: string;
};

type SocialLink = FooterLink & {
  imgUrl: string;
};

type FooterLinks = {
  SHOP_LINKS: FooterLink[];
  CORPORATE_LINKS: FooterLink[];
  DESTINATIONS: FooterLink[];
  SOCIAL_LINKS: SocialLink[];
};

const FOOTER_LINKS: FooterLinks = {
  SHOP_LINKS: [
    {
      id: 'Shop Home Collection',
      label: 'Shop Home Collection',
      href: '/#shop-Home-collection',
    },
    {
      id: 'Gift Cards',
      label: 'Gift Cards',
      href: '/#gift-cards',
    },
    {
      id: 'Wynn Stories',
      label: 'Wynn Stories',
      href: '/#wynn-stories',
    },
    {
      id: 'Wynn Slots App',
      label: 'Wynn Slots App',
      href: '/#wynn-slots-app',
    },
    {
      id: 'Mobile App',
      label: 'Mobile App',
      href: '/#mobile-app',
    },
    {
      id: 'Responsible Gaming',
      label: 'Responsible Gaming',
      href: '/#responsible-gaming',
    },
  ],
  CORPORATE_LINKS: [
    {
      id: 'About Us',
      label: 'About Us',
      href: '/#about-us',
    },
    {
      id: 'Careers',
      label: 'Careers',
      href: '/#careers',
    },
    {
      id: 'Investor Relations',
      label: 'Investor Relations',
      href: '/#investor-relations',
    },
    {
      id: 'Privacy Notice',
      label: 'Privacy Notice',
      href: '/#privacy-notice',
    },
    {
      id: 'Cookie Notice',
      label: 'Cookie Notice',
      href: '/#cookie-notice',
    },
    {
      id: 'Terms of Use',
      label: 'Terms of Use',
      href: '/#terms-of-use',
    },
    {
      id: 'Hotel Information & Directory',
      label: 'Hotel Information & Directory',
      href: '/#hotel-information-directory',
    },
  ],
  DESTINATIONS: [
    {
      id: 'Wynn Palace Cotai',
      label: 'Wynn Palace Cotai',
      href: '/#wynn-palace-cotai',
    },
    {
      id: 'Encore Boston Harbor',
      label: 'Encore Boston Harbor',
      href: '/#encore-boston-harbor',
    },
    {
      id: 'Wynn Macau',
      label: 'Wynn Macau',
      href: '/#wynn-macau',
    },
  ],
  SOCIAL_LINKS: [
    {
      id: 'Facebook',
      imgUrl: '/social-icons/facebook.svg',
      href: '',
      label: 'Facebook',
    },
    {
      id: 'Android App',
      imgUrl: '/social-icons/android.svg',
      href: '',
      label: 'Android App',
    },
    {
      id: 'iOS App',
      imgUrl: '/social-icons/ios.svg',
      href: '',
      label: 'iOS App',
    },
    {
      id: 'Instagram',
      imgUrl: '/social-icons/instagram.svg',
      href: '',
      label: 'instagram',
    },
    {
      id: 'Twitter',
      imgUrl: '/social-icons/x.svg',
      href: '',
      label: 'twitter (X)',
    },
  ],
};

export default FOOTER_LINKS;
