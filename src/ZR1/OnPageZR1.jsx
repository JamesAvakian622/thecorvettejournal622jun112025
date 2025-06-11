import React from "react";
//import { Link } from 'react-router-dom';
import Button from "../components/Button";
import "../styles/Page.css";
export default function OnPageZR1() {
  return (
    <>
      <div className="button-column">
        <Button
          text="Checkered-Flag eShop"
          to="http://www.Checkered-Flag.com"
        />

        {/* <Link to="http://www.checkered-flag.com">   Checkered-Flag.com </Link> */}
        <img src="/check.png" alt="Corvette" />
      </div>
    </>
  );
}
