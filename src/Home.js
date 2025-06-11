//import React from "react";
import "./styles/Page.css";
import Footer from "./Footer";
import CarouselZR1 from "./CarouselZR1";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="rowPage">
        {/* <div className="breadcrumbs">
        <Breadcrumbs items={breadcrumbItems} /> */}
      </div>
      <div className="col-3 ">
      
        <p>The Introduction</p>
          <br />
        <p>The Photo Album</p>
          <br />
        <p>The Z06 Specs</p>
          <br />
        <p>The Z06 Sound</p>
          <br />
      
      </div>
      <div className="col-6">
        <dir className="home1">
          <h1>Website Map</h1>
        </dir>
        <div className="leftside">
          <dir></dir>
          <Link to="/Stingray/PageSting">Corvette Stingray</Link>
          <dir></dir>
          <Link to="/Stingray/PageSting">Stingray Photo Album</Link> <dir></dir>
          <Link to="/Z06/PageZ06">Z06</Link> <dir></dir>
          <Link to="/Z06/PhotoAlbum">Z06 Photo Album</Link> <dir></dir>
          <Link to="/Eray/PageEray">
            <Link to="/Eray">2025 Corvette E-Ray </Link>
          </Link>
          <dir></dir>
          <Link to="/Eray/PhotoAlbum">E-=Ray Photo Album</Link> <dir></dir>
          <Link to="/ZR1/PageZR1">ZR1</Link> <dir></dir>
          <Link to="/ZR1/PhotoAlbum">ZR1 Photo Album</Link> <dir></dir>
          <Link to="/C8R/PageC8R">C8.R</Link> <dir></dir>
          <Link to="/ZR1/PhotoAlbum">C8.R Photos Album</Link> <dir></dir>
        </div>
      </div>

      <div className="col-3 ">
        <div className="aside">
          <h2>What?</h2>
          <p>Chania is a city on the island of Crete.</p>
          <h2>Where?</h2>
          <p>Crete is a Greek island in the Mediterranean Sea.</p>
          <h2>How?</h2>
          <p>You can reach Chania airport from all over Europe.</p>
        </div>
      </div>
    </>
  );
}
