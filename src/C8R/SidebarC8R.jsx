import React from "react";

import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarC8R() {
  return (
    <div className="button-column">
      <Button text="Corvette Introduction" to="/C8R/PageSting" />
      <Button text="The C8.R Sports Car" to="/C8R/PageStingBrand" />
      <Button text="C8.R Exterior  " to="/C8R/PageStingExt" />
      <Button text="C8.R Interior  " to="/C8R/PageStingInt" />
      <Button text="C8.R LT2 Engine" to="/C8R/PageStingLT2" />
      <Button text="C8.R Options   " to="/C8R/PageStingOptions" />
      <Button text="C8.R z51  " to="/C8R/PageStingZ51" />
      <Button text="C8.R Specifications" to="/C8R/PageStingSpecs" />
      <Button text="C8.R History" to="/C8R/PageStingYear" />
      <Button text="C8R Sound   " to="/C8R/PageStingSound" />
      <Button text="C8R Videos " to="/C8R/PageStingVideos" />
      <Button text="Corvette TechTalk" to="/Zcoming" />
      <Button text="Corvette School" to="/ZRonFellows" />
      <Button text="Corvette History" to="/ZC8Hist" />
      <Button text="Zora to Juecther" to="/ZC8Histb" />
      <Button text="Journal Websites" to="/ZC8Webs" />
    </div>
  );
}
