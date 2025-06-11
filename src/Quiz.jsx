import React, { useState } from "react";
import QuizAccordion from "./QuizAccordion";

import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselSting from "./Stingray/CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./Stingray/OnPageSting";
import CarouselFlag from "./Stingray/CarouselFlag";
import SidebarSting from "./Stingray/SidebarSting1";
import SidebarStingB from "./Stingray/SidebarStingB";
import NavbarMore from "./NavbarMore";
export default function Quiz() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>

        <div className="col-6">
          <div className="center1">
            <NavbarMore />

            <h1>
              <b> The 2025 Corvette FAQ Quiz </b>
            </h1>
          </div>
          <img src="/Stingray.png" alt="LT7" />

          <QuizAccordion />

       
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageSting />
          <SidebarStingB />
        </div>
   <Footer />

      </div>
    </>
  );
}
