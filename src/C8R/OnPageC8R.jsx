import React from "react";
import Button from "../components/Button";

import { Link } from "react-router-dom";
export default function OnPageC8R() {
  return (
    <>
      <div className="button-column">
        <Button
          text="Checkered-Flag eShop"
          to="http://www.Checkered-Flag.com"
        />

        {/* <Link to="http://www.checkered-flag.com">   Checkered-Flag.Com </Link> */}
        <img src="/check.png" alt="Corvette" />
      </div>
    </>
  );
}
