import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function SidebarZora() {
  return (
 <> 

<div className="button-column">
        <Button text="Corvette Zora Introduction" to="./Zora/PageZora" />
        <Button text=" The Z06 Sports Car     " to="/Z06/PageZ06Brand" />
         <Button text="Zora Exterior" to="./Zora/PageZoraExt" />
        <Button text="Zora Interior" to="./Zora/PageZoraInt" />
        <Button text="Zora LT2 Engine" to="./Zora/PageZoraLT2" />
        <Button text="Zora Options" to="./Zora/PageZoraOptions" />
        <Button text="Zora Z07 " to="./Zora/PageZoraZ07" />
        <Button text="Zora Specifications" to="./Zora/PageZoraSpecs" />
        <Button text="Zora Year Model " to="./Zora/PageZoraYear" />
        <Button text="Zora Sound" to="./Zora/PageZoraSound" />
        <Button text="Zora Videos" to="./Zora/PageZoraVideos" />
      </div>
       
     
</>
  );
}
