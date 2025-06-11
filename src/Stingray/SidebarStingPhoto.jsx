import React from "react";

//import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarStingPhoto() {
  return (
    <div className="button-column-photo">
      <Button text="Stingray Introduction" to="/Stingray/PageSting" />
      <Button text=" Stingray Features" to="/Stingray/PageStingFeatures" />
      <Button text="Stingray Exterior      " to="/Stingray/PageStingExt" />
      {/* <Button text='Stingray Ext Social      ' to='/Stingray/PageStingExtSoc' /> */}
      <Button text="Stingray Interior      " to="/Stingray/PageStingInt" />
      <Button text="Stingray Options  " to="/Stingray/PageStingOptions" />
      <Button text="Stingray Z51 Option" to="/Stingray/PageStingZ51" />
      <Button text="Stingray Album" to="/Stingray/PageStingPhotoA" />
      <Button text="Driving The Stingray" to="/Stingray/PageStingDriving" />
      {/* <Button text="Stingray Interior Album" to="/Stingray/PageStingPhotoB" /> */}
      <Button text="Stingray LT2 Engine" to="/Stingray/PageStingLT2" />
      <Button text="Stingray Hardtop Options" to="/Stingray/PageStingHard" />
     <Button text="Stingray Specifications" to="/Stingray/PageStingSpecs" />
      {/* <Button text="Stingray Customs Album" to="/Stingray/PageStingPhotoC" /> */}
      <Button text="Stingray Year Models " to="/Stingray/PageStingYear" />
      <Button text="The Stingray Legacy" to="/Stingray/PageStingBrand" />
      <Button text="The Stingray Logos" to="/Stingray/PageStingLogos" />
      <Button text="Stingray Rivals " to="/Stingray/PageStingRivals" />
      <Button text="Stingray Sound" to="/Stingray/PageStingSound" />
      <Button text="Stingray Videos" to="/Stingray/PageStingVideos" />
    </div>
  );
}
