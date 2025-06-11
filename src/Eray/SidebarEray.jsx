import "../styles/Page.css";
import React from "react";

import Button from "../components/Button";
export default function SidebarEray() {
  return (
    <div className="button-column">
      <Button text="E-Ray Introduction" to="/Eray/PageEray" />
      <Button text="E-Ray Features" to="/Eray/PageErayFeatures" />
      <Button text="E-Ray  Exterior" to="/Eray/PageErayExt" />
      {/* <Button text='   E-Ray  Ext Social' to='/Eray/PageErayExtSoc' /> */}

      <Button text="E-Ray Exterior Album" to="/Eray/PageErayPhotoA" />
      <Button text="E-Ray Interior" to="/Eray/PageErayInt" />
      <Button text="E-Ray Options" to="/Eray/PageErayOptions" />
      <Button text="E-Ray ZER Car" to="/Eray/PageErayZer" />
      {/* <Button text="E-=Ray Interior Album" to="/Eray/PageErayPhotoB" /> */}

      <Button text="E-Ray LT2 And Motor" to="/Eray/PageErayLT2" />
      <Button text="E-Ray Assembly Line" to="/Eray/PageErayManu" />
      <Button text="E-Ray Hardtop Options" to="/Eray/PageErayHard" />
      <Button text="Driving The E-Ray" to="/Eray/Driving" />
      <Button text="E-Ray Specifications" to="/Eray/PageEraySpecs" />
      {/* <Button text="E-Ray Customs Album" to="/Eray/PageErayPhotoC" /> */}

      <Button text="E-Ray Year Models " to="/Eray/PageErayYear" />
      <Button text="The E-Ray Brand" to="/Eray/PageErayBrand" />
      <Button text="E-Ray Rivals" to="/Eray/PageErayRivals" />
      <Button text="E-Ray Sound" to="/Eray/PageEraySound" />
      <Button text="E-Ray Videos" to="/Eray/PageErayVideos" />

    </div>
  );
}
