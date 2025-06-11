import React from "react";
import './styles/Page.css';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselC8R from "./C8R/CarouselC8R";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageC8R from "./C8R/OnPageC8R";
import CarouselFlag from "./C8R/CarouselFlag";
import SidebarC8R from "./C8R/SidebarC8R";
import ButtonGridInt from "./components/buttons/ButtonGridInt";
export default function PageC8RInt() {
  return (
    <>

      <div className="rowPage">
        <SidebarC8R />
        <div className="col-3 ">

          <SidebarC8R />
        </div>
      </div>

      <div className="col-6">
        <div className="center">
          {/* <ButtonGridInt /> */}

          <h1>
            <b> Ron Fellows Performance Driving School </b>
          </h1>
        </div>
      
        <p>
            Take advantage of our progressive curriculum, including dynamic car control exercises, visual scanning development, proper cornering techniques, and much more.
        </p>
          <h3>
            <b> Mission Statement </b>
          </h3>
        <p>
            Learn to master the precision and power of the incredible, all-new mid-engine Corvette in one of our newly designed programs! Using your feedback, we are confident that these new courses will truly take your driving skills to the next level. Take advantage of our progressive curriculum, including dynamic car control exercises, visual scanning development, proper cornering techniques, and much more.
        </p>
        <p>
            <b>School For New Owners</b>

            <Link to=" https://www.youtube.com/watch?v=Vf3cOwyNBV4d">  Overview</Link>
        </p>
        <p>
            <b>  Was It Worth It  ?</b>
            <Link to=" https://www.youtube.com/watch?v=8uMZ7emPCH8 "> C8 School</Link>

        </p>
        <p>
            <b>Z06 Experience </b>

            <Link to=" https://www.youtube.com/watch?v=LrViGUwJGfY">  You Tube Video</Link>
        </p>
        <p>
            <b>  Corvette Z06 School</b>
            <Link to=" https://www.youtube.com/watch?v=RbkpnDFtC60 "> You Tube Video</Link>

        </p>


        <p>
            <b>Driving</b>

            <Link to=" https://www.youtube.com/watch?v=CXSiULxEwls">  You Tube Video</Link>
        </p>
        <p>
            <b>  Corvette C8 Z51 </b>
            <Link to=" https://www.youtube.com/watch?v=QN4aKAXkK4k "> You Tube Video</Link>

        </p>
      
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPageC8R />
      </div>



    </>
  );
}
