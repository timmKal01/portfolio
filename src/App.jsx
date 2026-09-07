import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
