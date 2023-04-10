import React from "react";
import "./about.css";
import About_Info from "../../components/About_Info";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <About_Info className="about_p" />;
      <Footer />
    </>
  );
};

export default About;
