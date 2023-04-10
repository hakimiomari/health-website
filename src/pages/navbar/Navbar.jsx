import React, { useContext, useEffect } from "react";
import List from "./List";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { stateContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useContext(stateContext);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h3>Health</h3>
        </Link>
      </div>
      <div className="menu">
        <List className="list" searchIcon="search_icon" />
      </div>
      <div className="nav_icons">
        {show ? (
          <FiMenu className="nav_icon" onClick={() => setShow(false)} />
        ) : (
          <AiFillCloseCircle
            className="nav_icon"
            onClick={() => setShow(true)}
          />
        )}
        {!show ? (
          <List className="toggle_menu" />
        ) : (
          <div className="toggle_menu_change" searchIcon="toggleSearch" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
