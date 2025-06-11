//import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";

export default function SidebarZR1() {
  return (
    <div className="button-column">
      <Button text=" TechTalk" to="/TechTalkAll" />
      <Button text=" ZR1 TechTalk" to="/ZR1/TechTalkZR1" />
      <Button text="Corvette School" to="/ZR1/ZRonFellows" />
      <Button text="Corvette History" to="/ZR1/ZC8Hist" />
      <Button text="Zora to Juecther" to="/ZR1/ZC8Histb" />
      <Button text="Journal Websites" to="/ZR1/ZC8Webs" />
    </div>
  );
}
