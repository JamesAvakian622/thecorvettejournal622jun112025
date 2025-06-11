//import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";

export default function Sidebarz2026() {
  return (
    <div className="button-column">
      <Button text=" TechTalk" to="/TechTalkAll" />
      <Button text=" z2026 TechTalk" to="/z2026/TechTalkz2026" />
      <Button text="Corvette School" to="/z2026/ZRonFellows" />
      <Button text="Corvette History" to="/z2026/ZC8Hist" />
      <Button text="Zora to Juecther" to="/z2026/ZC8Histb" />
      <Button text="Journal Websites" to="/z2026/ZC8Webs" />
    </div>
  );
}
