import { Link } from "react-router-dom";
import React from "react";

export default function Photos5() {
  return (
    <>
      <div classNames="polaroid">
        <img src="/img_5terre.png" alt="5 Terre" style="width:100%" />
        <div classNames="container">
          <p>Cinque Terre</p>
        </div>
      </div>
      <div classNames="polaroid">
        <img
          src="/lights600x400.png"
          alt="Norther Lights"
          style="/width:100%"
        />
        <div classNames="container">
          <p>Northern Lights</p>
        </div>
      </div>
    </>
  );
}
