import { Outlet, Link } from "react-router-dom";
import React from "react";

import Default from "./ZR1SpecsNew.png";
import "./styles/globals.css";
const Layout = () => {
  return (
    <>
      {/*<M4VPlayer/> */}
      <div className="photoZR1">
        <img src={Default} alt="ZR1"></img>
      </div>
      <h5>Reprinted from YouTube"ZR1 Reveal", Chevrolet</h5>

      <Outlet />
    </>
  );
};

export default Layout;
