import React, { createContext, useState } from "react";
import "./app.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import About from "./pages/about/About";
import Meet from "./pages/Meet/Meet";
import What from "./pages/what/What";
import Contact from "./pages/contact/Contact";

export const stateContext = createContext();

const App = () => {
  const [show, setShow] = useState(true);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/meet_me"
          element={
            <>
              <Navbar />
              <Meet />
            </>
          }
        />
        <Route
          path="/what_we_do"
          element={
            <>
              <Navbar />
              <What />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </>
    )
  );
  return (
    <stateContext.Provider value={[show, setShow]}>
      <RouterProvider router={router} />
    </stateContext.Provider>
  );
};

export default App;
