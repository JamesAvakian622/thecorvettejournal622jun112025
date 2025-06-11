import "../styles/Page.css";
import React from "react";

import Button from "../components/Button";
export default function SidebarEray() {
  return (
    <div className="button-column">
        <Button text=" TechTalk" to="/TechTalkAll" />

      {/* <Button text="--------------" to="/Eray/PageErayPhotos" /> */}
      <Button text=" E-Ray TechTalk" to="/TechTalkEray" />
      <Button text="Corvette School" to="/ZRonFellows" />
      <Button text="Corvette History" to="/ZC8Hist" />
      <Button text="Zora to Juecther" to="/ZC8Histb" />
      <Button text="Journal Websites" to="/ZC8Webs" />
     
    </div>
  );
}
