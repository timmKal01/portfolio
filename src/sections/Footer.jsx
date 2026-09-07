import React from "react";
import { Link } from "react-scroll";
import { MENU_LINKS, ABOUT_ME } from "../utils/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#feecdc] mt-10">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium text-black/70">
          Timothy Kelvin &mdash; Full-Stack Developer
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {MENU_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              smooth
              offset={item.offset}
              className="cursor-pointer text-gray-600 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {ABOUT_ME.sociallinks.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-gray-500 hover:text-primary transition-colors duration-300"
            >
              <social.icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#feecdc] py-4 text-center text-xs text-gray-500">
        &copy; {year} Timothy Kalungu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
