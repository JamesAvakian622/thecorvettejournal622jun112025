import React from "react";

//import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarStingB() {
  return (
    <div className="button-columnB">
      <Button text=" TechTalk" to="/TechTalkAll" />
      <Button text="Stingray TechTalk" to="/TechTalkSting" />
      <Button text="Corvette School" to="/ZRonFellows" />
      <Button text="Corvette History" to="/ZC8Hist" />
      <Button text="Zora to Juecther" to="/ZC8Histb" />
      <Button text="Journal Websites" to="/ZC8Webs" />
     
    </div>
  );
}
