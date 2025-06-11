import React from "react";
//import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarZ06() {
  return (
    <>
      <div className="button-column">
        <Button text="  Z06 Introduction " to="/Z06/PageZ06" />

        <Button text=" Z06 Features" to="/Z06/PageZ06Features" />
        <Button text=" Z06 Car Brand" to="/Z06/PageZ06Brand" />
        <Button text="Z06 Exterior" to="/Z06/PageZ06Ext" />
        {/* <Button text='Z06 Ext Social' to='/Z06/PageZ06ExtSoc' /> */}

        <Button text="Z06 Exterior Album" to="/Z06/PageZ06PhotoA" />

        <Button text="Z06 Interior" to="/Z06/PageZ06Int" />
        <Button text="Z06 Options" to="/Z06/PageZ06Options" />
        <Button text="Z06 Hardtop Options" to="/Z06/PageZ06Hard" />
        <Button text="Z06 Z07 Car" to="/Z06/PageZ06Z07" />

        {/* <Button text="Z06 Interior Album" to="/Z06/PageZ06PhotoB" /> */}
        <Button text="Z06 LT6 Engine" to="/Z06/PageZ06LT6" />
        <Button text="Z06 Assembly Line" to="/Z06/PageZ06Manu" />

        <Button text=" Driving The Z06" to="/Z06/PageZ06Driving" />


        <Button text="Z06 Specifications" to="/Z06/PageZ06Specs" />
        {/* <Button text="Z06 Customs Album" to="/Z06/PageZ06Customs" /> */}
        <Button text="Z06 Year Models " to="/Z06/PageZ06Year" />
        <Button text="Z06 Rivals " to="/Z06/PageZ06Rivals" />
        <Button text="Z06 Sound" to="/Z06/PageZ06Sound" />
        <Button text="Z06 Videos" to="/Z06/PageZ06Videos" />
      </div>

      {/* <Button text="Z06 Videos" to="/Z06/PageZ06Videos"   className={({ isActive }) => (isActive ? "active-link" : "")}    /> */}



    </>
  );
}
