import React, { useContext } from "react";
import WhatComponent from "../../components/whatComponent/WhatComponent";
import Footer from "../../components/footer/Footer";
import { stateContext } from "../../App";

const What = () => {
  const [show, setShow] = useContext(stateContext);
  return (
    <>
      <WhatComponent show={show} />
      <Footer />
    </>
  );
};

export default What;
