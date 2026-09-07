import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import Profile_pic from "../assets/images/profile_pic.jpg";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="lg:block w-[200px] section-title text-left lg:text-left m-2">About Me</h4>
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">

        {/* Profile Picture */}
        <motion.div
          className="w-[300px] min-w-[378px] h-[350px] min-h-[428px] bg-primary/20 rounded-[32px] overflow-hidden mx-auto shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={Profile_pic}
            alt="Profile Pic"
            className="w-full h-full object-cover profile-pic"
          />
        </motion.div>

        {/* About Me Text Section */}
        <motion.div
          className="flex-1"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="hidden lg:block w-[200px] section-title text-left lg:text-left">About Me</h4>
          <p className="text-sm md:text-base text-justify leading-6 mt-4 text-black/80 whitespace-pre-line">
            {ABOUT_ME.content}
            <br/><br/>
            {ABOUT_ME.contentTwo}
          </p>
          <div className="flex items-center mt-4">
            {ABOUT_ME.sociallinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="cursor-pointer group"
              >
                <social.icon className="m-2 text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary"/>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
