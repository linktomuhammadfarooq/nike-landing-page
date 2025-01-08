import { facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">
        {title}
      </h4>
      <ul>
        {links?.map((link) => (
          <li
            key={link.name}
            className="mt-3 text-base leading-normal text-white-400 hover:text-slate-gray font-montserrat"
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between gap-20 max-lg:flex-col flex-warp">
        <div className="flex flex-col items-start">
          <a href="#home">
            <img
              src={footerLogo}
              alt="home logo"
              width={150}
              height={150}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 sm:max-w-sm text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <img src={facebook} alt="facebook" width={24} height={24} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <img src={twitter} alt="facebook" width={24} height={24} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <img src={instagram} alt="facebook" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-20 lg-gap-10">
          {footerLinks.map((item) => (
            <FooterLinks
              key={item.title}
              title={item.title}
              links={item.links}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between mt-16 sm:flex-row">
        <p className="text-base leading-7 text-center text-white-400 font-montserrat">
          &copy; 2025 Copyright. All Rights Reserved.
        </p>
        <p className="text-base leading-7 text-center text-white-400 font-montserrat">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
