import React, { useContext } from "react";
import MeetMeComponent from "../../components/meetMeComponent/MeetMeComponent";
import Footer from "../../components/footer/Footer";
import { stateContext } from "../../App";

const Meet = () => {
  const [show, setShow] = useContext(stateContext);
  return (
    <>
      <MeetMeComponent show={show} />
      <Footer />
    </>
  );
};

export default Meet;
