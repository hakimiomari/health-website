import React from "react";
import "./whatCompnent.css";
import img from "../Images";
import { Link } from "react-router-dom";

const WhatComponent = ({ show }) => {
  console.log(show);
  return (
    <>
      {show ? (
        <div className="what_header">
          <h2>What we de</h2>
        </div>
      ) : (
        ""
      )}
      <div className="what_we_do">
        <div className="top_what_we_do">
          <h2>Why You Nedd A Coach?</h2>
          <p>A Health Coach Helps Make Change Safer and Better for Your Body</p>
        </div>
        <div className="middle_what_we_do">
          <div className="middle_left_what_we_do">
            <div className="middle_left_first">
              <img src={img.flower} alt="" />
              <span>I will create your everyday nutrition strategies</span>
            </div>
            <div className="middle_left_second">
              <img src={img.healthCare} alt="" />
              <span>
                I will help you understand why you have gained the weight
              </span>
            </div>
          </div>
          <div className="middle_right_what_we_do">
            <div className="middle_right_first">
              <img src={img.body} alt="" />
              <span>I will help you have enough time for yourself</span>
            </div>
            <div className="middle_right_second">
              <img src={img.healthCare} alt="" />
              <span>Will Make Change Safer and Better for Your Body</span>
            </div>
          </div>
        </div>
        {!show ? (
          <div className="bottom_what_we_do">
            <Link to="/what_we_do">
              <button>read more</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WhatComponent;
