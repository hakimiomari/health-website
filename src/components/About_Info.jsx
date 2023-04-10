import React from "react";
import img from "./Images";
import { Link } from "react-router-dom";

const About_Info = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h2>About Us</h2>
      </div>
      <img src={img.aboutImage} alt="about" />
      <div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packaged by th
        </p>
      </div>
      <Link to="/about">
        <button
          style={
            className == "about_p" ? { display: "none" } : { display: "block" }
          }
        >
          Read More
        </button>
      </Link>
    </div>
  );
};

export default About_Info;
