import React, { useContext } from "react";
import { stateContext } from "../../App";
import "./home.css";
import Slider from "./Slider";
import About_Info from "../../components/About_Info";
import Footer from "../../components/footer/Footer";
import WhatComponent from "../../components/whatComponent/WhatComponent";
import MeetMeComponent from "../../components/meetMeComponent/MeetMeComponent";

const Home = () => {
  const [show, setShow] = useContext(stateContext);
  return (
    <div className="home" onClick={() => setShow(true)}>
      <Slider />
      <About_Info className="about" />
      <WhatComponent show={!show} />
      <MeetMeComponent show={!show} />
      <Footer />
    </div>
  );
};

export default Home;
