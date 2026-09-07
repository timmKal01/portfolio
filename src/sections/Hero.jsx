import React from "react";
import { Link } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import Profile_pic from "../assets/images/profile_pic.jpg";
import Icon_1 from "../assets/images/icon_1.png";
import Icon_2 from "../assets/images/icon_2.png";
import Icon_3 from "../assets/images/icon_3.png";
import Icon_4 from "../assets/images/icon_4.png";
import Icon_5 from "../assets/images/icon-5.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="container mx-auto px-6 lg:px-8 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14 mt-[80px] h-full">

        {/* Left Text Section */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left mt-12 lg:mt-0"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl lg:text-2xl font-medium text-secondary">
            Hi, I'm <span className="text-primary">Timothy Kelvin</span>
          </h3>

          <h1
            className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold
                       leading-[50px] lg:leading-[60px] mt-3
                       bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Building Scalable & User-Centric Web Apps
          </h1>

          <p className="w-full lg:w-[520px] text-sm lg:text-base mt-4 text-gray-700">
            I'm a passionate Full-Stack Developer crafting responsive, accessible,
            and dynamic web experiences using{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-secondary font-medium">Node.js</span>, and{" "}
            <span className="text-accent font-medium">TailwindCSS</span>.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-8">
            <Link
              to="projects"
              smooth
              offset={-80}
              className="flex-1 md:flex-none action-btn btn-scale-anim cursor-pointer text-center"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              offset={-80}
              className="flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer text-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="relative w-[300px] md:w-[370px] h-[350px] md:h-[420px] order-1 lg:order-2 flex flex-col items-center"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={Profile_pic}
            alt="Profile"
            className="Profile_pic"
          />

          {/* Icon Group Below */}
          <div className="absolute -bottom-10 flex items-center justify-center gap-4 md:gap-6">
            <img src={Icon_1} alt="Icon 1" className="icon-img rotate-[2deg] translate-y-2" />
            <img src={Icon_2} alt="Icon 2" className="icon-img -rotate-[3deg]" />
            <img src={Icon_3} alt="Icon 3" className="icon-img rotate-[1.5deg] translate-y-1" />
            <img src={Icon_4} alt="Icon 4" className="icon-img -rotate-[2deg] translate-y-3" />
            <img src={Icon_5} alt="Icon 5" className="icon-img rotate-[1deg]" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-12 mt-16 md:mt-24 flex-wrap"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} lable={item.label} />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
