import React from "react";
import "./meetme.css";
import { Link } from "react-router-dom";
import img from "../Images";

const MeetMeComponent = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="meet_me_header">
          <h2>Meet Me</h2>
        </div>
      ) : (
        ""
      )}
      <div className="meet_me">
        <div className="left_meet_me">
          <h2>get</h2>
          <div>
            <span>RESULTS 100%</span>
            <span>GUARANTEED</span>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packaged by th
          </p>
          <Link to={show ? "/" : "/meet_me"}>
            <button>{show ? "back to home" : "get started"}</button>
          </Link>
        </div>
        <div className="right_meet_me">
          <img src={img.request} alt="request" />
        </div>
      </div>
    </>
  );
};

export default MeetMeComponent;
