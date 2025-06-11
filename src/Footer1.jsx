import "./styles/Footer.css";
import { Link } from "react-router-dom";
import React from "react";
//import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
//import "bootStap/dist/css/bootStap.min.css";
// https://playful-mermaid-aa06cd.netlify.app
//import Photos from "./Photos";
// import Photos1 from ".//Photos1";
// import Photos2 from ".//Photos2";
// import Photos3 from ".//Photos3";
// import Photos4 from "./Photos4";

export default function Footer1() {
  return (
    <>
      <div>
        {/* FOOTER START */}

        <div className="footer">
          <div className="contain">
            <div className="col">
              <div className="footer-title">
                <h1>The Journal</h1>
              
                <p>Stingray</p>
                  <br />
                <p>Z06</p>
                  <br />
                <p>
                    <Link to="/Eray">2025 Corvette E-Ray </Link>
                </p>
                  <br />
                <p>ZR1</p>
                  <br />
                <p>Zora</p>
                  <br />
                <p>C8.R</p>
                  <br />
                <p>Racing</p>
                  <br />
              
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Photo Album</h1>
              
                <p>{/* use Link   <a href={Photos}>Stingray</a> */}</p>
                  <br />
                <p>{/* <a href={Photos1}>Z06 </a> */}</p>
                  <br />
                <p>
                    {/* <a href={Photos2}> <Link to="/Eray">2025 Corvette E-Ray </Link> </a> */}
                </p>
                  <br />
                <p>{/* <a href={Photos3}>ZR1</a> */}</p>
                  <br />
                <p>{/* <a href={Photos4}>C8.R</a> */}</p>
                  <br />
              
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Buying</h1>
              
                <p>Introduction</p>
                  <br />
                <p> Stingray</p>
                  <br />
                <p> Z06</p>
                  <br />
                <p>
                    <Link to="/Eray">2025 Corvette E-Ray </Link>
                </p>
                  <br />
                <p> ZR1r</p>
                  <br />
                <p> Zora</p>
                  <br />
                <p>Racing</p>
                  <br />
              
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>History</h1>
              
                <p>C1</p>
                  <br />
                <p> C2</p>
                  <br />
                <p> C3</p>
                  <br />
                <p> C4</p>
                  <br />
                <p> C5</p>
                  <br />
                <p> C6</p>
                  <br />
                <p>C7</p>
                  <br />
                <p>C8</p>
                  <br />
              
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Resources</h1>
              
                <p>YouTube Video</p>
                  <br />
                <p>Magazines</p>
                  <br />
                <p>LT2 Engine</p>
                  <br />
                <p>LT4 Engine</p>
                  <br />
                <p>LT6 Engine</p>
                  <br />
                <p>LT7 Engine</p>
                  <br />
                <p>Glosary</p>
                  <br />
              
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Support</h1>
              
                <p>About us</p>
                  <br />
                <p>The Journal</p>
                  <br />
                <p>
                    <a
                      href="https://playful-mermaid-aa06cd.netlify.app"
                      className="list-link"
                    >
                      MyCorvette.Info
                    </a>
                </p>
                  <br />
                <p>MyVette.info</p>
                  <br />
                <p>MyVette.info</p>
                  <br />
              
              </div>
            </div>
            <div className="col"></div>

            <h1>Social</h1>
          
            <p>
                <a
                  href="https://www.facebook.com/search/top?q=the%20corvette%20web"
                  className="fa fa-facebook"
                ></a>
                <a href="https://x.com/javakian" className="fa fa-twitter"></a>

                <a
                  href="https://www.linkedin.com/in/james-l-avakian-13500713/"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://www.youtube.com/@JamesAvakian-x1x"
                  className="fa fa-youtube"
                ></a>
                <a
                  href=" https://www.tiktok.com/search?q=TheCorvetteJournal&t=1727653213391"
                  className="fa-brands fa-tiktok"
                ></a>
                <a
                  href="https://www.pinterest.com/jamesavakian/"
                  className="fa fa-pinterest"
                ></a>
            </p>
              <br />
          
          </div>
        </div>
      </div>

      <div className="footer-center">
        <img src="/qr.png" alt="My Image" width={45} height={40} />
        <img src="/opauto.png" alt="logo"></img>

        <p>
          (c)2024, TheCorvetteJournal.Com, Optical Automation, LLC, All rights
          reserved.
        </p>
      </div>

      {/* END OF FOOTER */}
    </>
  );
}
