import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { stateContext } from "../../App";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Meet Me", href: "/meet_me" },
  { name: "What We Do", href: "/what_we_do" },
  { name: "contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

const List = ({ className, searchIcon }) => {
  const [show, setShow] = useContext(stateContext);
  return (
    <div className={className}>
      {navigation.map((item) => (
        <NavLink
          onClick={() => setShow(true)}
          key={item.name}
          to={item.href}
          className={({ isActive }) => `links ${isActive ? "active" : ""}`}
        >
          {item.name}
        </NavLink>
      ))}
      <FiSearch className={searchIcon} />
    </div>
  );
};

export default List;
