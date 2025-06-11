import React from 'react';
import './styles/Page.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CarouselSting from './Stingray/CarouselSting';
//import ThemeSwitcher from "../ThemeSwitcher";
import OnPageSting from './Stingray/OnPageSting';
import CarouselFlag from './Stingray/CarouselFlag';
import SidebarSting1 from './Stingray/SidebarSting1';
import SidebarStingB from './Stingray/SidebarStingB';
import Navbar5 from './Navbar5';
import ReactPlayer from "react-player";

export default function C1() {
  return (
    <>
      <div className='rowPage'>
        <CarouselSting />
        <div className='col-3 '>
          <SidebarSting1 />
        </div>

        <div className='col-6'>
          <h2>
            <b>
              <i>Presenting </i>
            </b>
          </h2>


          <h1>
            <b> The  Corvette C1  </b>
          </h1>
          <Navbar5 />
          <div className='center'>
            <h2>
              <b>Corvette Legacy Generations Section</b>
            </h2>
            <Link to="/ZC8Histb">Corvette History</Link>
          </div>

          <p>
            <b> Dave Kendig's TweleveAir, C1 Custom </b>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url=" https://www.youtube.com/shorts/UMVGyUhEcc8"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </p>




          <div className='responsive'>
            <div className='gallery100'>
              <a target='_blank' rel='noopener noreferrer' href='/LT6'>
                <img
                  src='/c3.png'
                  alt='Cinque Terre'
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>
          <h4>
            <div className='desc'>Source: Wikipedia.com</div>
          </h4>

          <h3>
            <b> The Logos</b>
          </h3>
          <div className='responsive'>
            <div className='gallery100'>
              <a target='_blank' rel='noopener noreferrer' href='/C1logo'>
                <img
                  src='/C1logo.png'
                  alt='Cinque Terre'
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>


          <p><b>   The 1953 C1 Corvette Logo    </b>                      </p>


          <p>
            The first Corvette logo, designed in 1953 by Robert Bartholomew, featured a round emblem with a white background and two crossed flags.
          </p>
          <p>
            One of the flags in the original logo depicted a checkered monochrome racing pattern, symbolizing the Corvette's association with motorsports and racing. The second flag was colored red and featured a fleur-de-lis and three horizontal lines, representing the French heritage of the company.
          </p>

          <p>
            The wordmark of the original logo was divided into two parts. The top part featured the bold and prominent "Chevrolet" lettering, emphasizing the connection to the Chevrolet brand. The bottom part of the logo showcased the word "Corvette" written in an elegant cursive style, adding a touch of sophistication to the design.

          </p>


          <div className='responsive'>
            <div className='gallery100'>
              <a target='_blank' rel='noopener noreferrer' href='/C1logo'>
                <img
                  src='/C1logo.png'
                  alt='Cinque Terre'
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>


          <p><b>   The 1955 C1 Corvette Logo    </b>                      </p>

          <p>
            In the 1955 logo, the typography was modified, likely with a new font or style to give it a different look and feel. The graphic elements of the logo were transformed into a three-dimensional design, departing from their original flat shape.
          </p>


          <p>

            At the bottom of the emblem, in front of the crossed flags, a new element was introduced. The letter "V" was incorporated into the design, taking the shape of clock hands. This visual representation of the letter "V" symbolized the presence of V8 engines, which were equipped in all the sports cars of that era. It served as a distinctive mark to emphasize the powerful engine performance associated with the Corvette.

          </p>




          <p>
            <b> 0-60 mph: </b> The Corvette Sting can accelerate from 0 to 60
            mph in just 2.6 seconds.
          </p>
          <p>
            <b> Top Speed: </b> It boasts a top speed of 233 mph, making it
            one of the fastest production cars ever.
          </p>
          <h3>
            <b> Design </b>
          </h3>
          <p>
            <b> Aerodynamics:</b> The Sting features cutting-edge aerodynamics
            with wide side air inlets, carbon-fiber elements, and a multitude
            of airflow and cooling features.
            <b>Exterior:</b>The design includes a sleek and aggressive look
            with quad center exhaust and available carbon-fiber trim.
            <b>Interior:</b> The cockpit is driver-centric with high-quality
            materials and bespoke options.
          </p>
          <h3>
            <b> Technology </b>
          </h3>
          <p>
            <b> Infotainment:</b>Standard wireless Apple CarPlay and Android
            Auto, with an available 14-speaker Bose Performance Series Sound
            system.
            <b> Performance App: </b>Provides real-time performance data and
            vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
            on the go.
          </p>
          <p>
            <b> Selective Magnetic Ride Control:</b>
            This advanced suspension system adjusts damping to provide a
            smooth ride on various road conditions. The six modes are Z mode,
            My Mode, Tour, Sport, Track, and Weather.
          </p>
          <b> Advanced Infotainment: </b>The Stingray includes a
          state-of-the-art infotainment system with navigation, Bluetooth
          connectivity, and more.
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around <b> $174,995 </b>. The
            <Link to='/Sting'>
              Source: Wikipedia.com Sports Car <br />
            </Link>
            is designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

          <div className='references'>
            <h1>References</h1>
            <h3>
              <a Link to='https://en.wikipedia.org/wiki/Chevrolet_Corvette_Sting'>
                Corvette Sting
              </a>
            </h3>
          </div>
          <Footer />
        </div>

        <div className='col-3 '>
          <CarouselFlag />

          <OnPageSting /> <SidebarStingB />
        </div>

      </div>
    </>
  )
}
