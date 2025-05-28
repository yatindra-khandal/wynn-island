const Footer = () => {
  return (
    <footer className="bg-[#5A3A27] py-[40px] px-[160px] flex flex-col gap-[30px] text-white text-[11px] tracking-[0.5px]">
      <div className="flex flex-wrap justify-between w-full gap-1">
        <nav aria-label="Shop links">
          <ul className="flex flex-col gap-[12px] py-[6px]">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Shop Home Collection
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Wynn Stories
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Wynn Slots App
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Mobile App
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Responsible Gaming
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Corporate links">
          <ul className="flex flex-col gap-[12px] py-[6px]">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy Notice
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Cookie Notice
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Hotel Information & Directory
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Destinations">
          <ul className="flex flex-col gap-[12px] py-[6px]">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Wynn Palace Cotai
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Encore Boston Harbor
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Wynn Macau
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-[12px] py-[6px]">
          <address className="flex flex-col gap-[12px] not-italic">
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
              <ul className="flex gap-8 py-1.5">
                <li className="rounded-full h-[28px] w-[28px] bg-white flex justify-center items-center">
                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/social-icons/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li className="rounded-full h-[28px] w-[28px] bg-white flex justify-center items-center">
                  <a
                    href="#androip-app"
                    aria-label="Android App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/social-icons/android.svg" alt="android" />
                  </a>
                </li>
                <li className="rounded-full h-[28px] w-[28px] bg-white flex justify-center items-center">
                  <a href="#ios-app" aria-label="iOS App" target="_blank" rel="noopener noreferrer">
                    <img src="/social-icons/ios.svg" alt="ios" />
                  </a>
                </li>
                <li className="rounded-full h-[28px] w-[28px] bg-white flex justify-center items-center">
                  <a
                    href="#instagram"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/social-icons/instagram.svg" alt="instagram" />
                  </a>
                </li>
                <li className="rounded-full h-[28px] w-[28px] bg-white flex justify-center items-center">
                  <a
                    href="#twitter (X)"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/social-icons/x.svg" alt="twitter (X)" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section
        className="flex flex-col gap-[10px] items-center w-full text-center"
        aria-label="Legal and Copyright"
      >
        <p className="text-xs">Do Not Sell Or Share My Data</p>
        <small className="text-[11px]">
          &copy; 2024 Wynn Resorts Holdings, LLC. All rights reserved.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
