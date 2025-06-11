//import { Link } from "react-router-dom";
import React from 'react';
import Button from '../components/Button';

export default function SidebarZR1 () {
  return (
    <div className="button-column">
      <Button text="ZR1 Introduction" to="/ZR1/PageZR1" />

      <Button text=" ZR1 Features" to="/ZR1/PageZR1Features" />

      <Button text="ZR1 Exterior" to="/ZR1/PageZR1Ext" />
      {/* <Button text='ZR1 Ext Social' to='/ZR1/PageZR1ExtSoc' /> */}

      <Button text="ZR1 Exterior Album" to="/ZR1/PageZR1PhotoA" />

      <Button text="ZR1 Interior" to="/ZR1/PageZR1Int" />
      {/* <Button text="ZR1 Interior Album" to="/ZR1/PageZR1PhotoB" /> */}
      <Button text="ZR1 Options" to="/ZR1/PageZR1Options" />
      <Button text="ZR1 ZTK Car" to="/ZR1/PageZR1Ztk" />

      <Button text="ZR1 LT7 Engine" to="/ZR1/PageZR1LT7" />
      <Button text="ZR1 Assembly Line" to="/ZR1/PageZR1Manu" />

      <Button text="ZR1 Hardtop Options" to="/ZR1/PageZR1Hard" />
      <Button text="Driving The ZR1" to="/ZR1/PageZR1Driving" />
      <Button text="ZR1 Car Brand" to="/ZR1/PageZR1" />

      <Button text="ZR1 Specifications" to="/ZR1/PageZR1Specs" />
      {/* <Button text="ZR1 Customs Album" to="/ZR1/PageZR1PhotoC" /> */}
      <Button text="ZR1 Year Models " to="/ZR1/PageZR1Year" />
      <Button text="ZR1 Rivals " to="/ZR1/PageZR1Rivals" />
      <Button text="ZR1 Sound" to="/ZR1/PageZR1Sound" />
      <Button text="ZR1 Videos" to="/ZR1/PageZR1Videos" />

    </div>
  );
}
