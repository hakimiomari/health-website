import React, { useEffect, useReducer, useRef } from "react";
import "./contact.css";
import Footer from "../../components/footer/Footer";

const initialValue = {
  name: "",
  phone: "",
  email: "",
  coach: "",
};

const win = window.sessionStorage;
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "coach":
      return { ...state, coach: action.payload };
    case "submit":
      return { ...state, name: "", email: "", phone: "", coach: "" };
    case "refreshPage":
      return {
        ...state,
        name: win.getItem("name"),
        email: win.getItem("email"),
        phone: win.getItem("phone"),
        coach: win.getItem("coach"),
      };
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
    win.clear();
  };
  useEffect(() => {
    if (
      win.getItem("name") ||
      win.getItem("email") ||
      win.getItem("phone") ||
      win.getItem("coach")
    ) {
      dispatch({ type: "refreshPage" });
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      win.setItem("name", state.name);
      win.setItem("email", state.email);
      win.setItem("phone", state.phone);
      win.setItem("coach", state.coach);
    }, 200);
  }, [state.name, , state.phone, state.email, state.coach]);
  return (
    <>
      <div className="contact">
        <div className="contact_header">
          <h2>contact us</h2>
        </div>
        <form action="#">
          <div className="form_group">
            <input
              type="text"
              value={state.name}
              name="name"
              id=""
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
              placeholder="Your name"
            />
            <input
              type="text"
              value={state.phone}
              name="phone"
              id=""
              onChange={(e) =>
                dispatch({ type: "phone", payload: e.target.value })
              }
              placeholder="Phone"
            />
          </div>
          <div className="form_group">
            <input
              type="text"
              value={state.email}
              name="email"
              id=""
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
              placeholder="Email"
            />
            <input
              type="text"
              value={state.coach}
              name="coach"
              id=""
              onChange={(e) =>
                dispatch({ type: "coach", payload: e.target.value })
              }
              placeholder="Select Coach"
            />
          </div>
          <div className="btn">
            <button type="submit" onClick={handleClick}>
              Make an Appointmetn
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
