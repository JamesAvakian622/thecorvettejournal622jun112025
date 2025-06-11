import React from "react";
//import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarZ06B() {
  return (
    <>
      <div className="button-column">
         <Button text=" TechTalk" to="/TechTalkAll" />

        <Button text="Z06 TechTalk" to="/TechTalkZ06" />
        <Button text="Corvette School" to="/ZRonFellows" />
        <Button text="Corvette History" to="/ZC8Hist" />
        <Button text="Zora to Juecther" to="/ZC8Histb" />
        <Button text="Journal Websites" to="/ZC8Webs" />
     
      </div>
    </>
  );
}
