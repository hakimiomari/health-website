import React from "react";
import "./footer.css";
import { AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneForwardFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top_footer">
        <div className="top_footer_header">
          <span>Health</span>
        </div>
        <div className="top_footer_contacts">
          <div className="top_footer_info">
            <div className="top_footer_contacts_icon">
              <CiLocationOn />
            </div>
            <div className="top_footer_contacts_info">
              <span>Kabul 5</span>
              <span>Afghanistan</span>
            </div>
          </div>
          <div className="top_footer_info">
            <div className="top_footer_contacts_icon">
              <BsFillTelephoneForwardFill />
            </div>
            <div className="top_footer_contacts_info">
              <span>+93781277992</span>
              <span>+93781277992</span>
            </div>
          </div>
          <div className="top_footer_info">
            <div className="top_footer_contacts_icon">
              <HiOutlineMail />
            </div>
            <div className="top_footer_contacts_info">
              <span>freetemplate@gmail.com</span>
              <span>freetemplate@gmail.com</span>
            </div>
          </div>
          <div className="top_footer_info">
            <FaFacebookF className="icons" />
            <BsTwitter className="icons" />
            <AiFillLinkedin className="icons" />
            <AiOutlineGoogle className="icons" />
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <span>
          Copyright 2019 All Right Reserved By{" "}
          <a href="#">Free html Templates</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
