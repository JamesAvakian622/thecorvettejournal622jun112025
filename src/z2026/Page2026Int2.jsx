
import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carousel2026 from "./Carousel2026";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebar2026 from "./Sidebar2026";
import Sidebar2026B from "./Sidebar2026B";
//import NavbarInterior from "../NavbarInterior";
import CarouselIntro from "./CarouselIntro";
import LZ from "../LZ"


export default function Page2026Int() {

 
  
  
  // Heated and vented seats
  
  // Power-folding outside mirrors
  
  // Rear Cross Traffic Alert & Side Blind Zone Alert
  
  // 3LT: The most premium trim, offering top-tier luxury and customization. It includes everything from 2LT plus:
  
  // Custom Leather Wrapped Interior Package
  
  // Sueded Microfiber-Wrapped Upper Interior Trim
  
  // Carbon-fiber cluster-surround and console/door switch plates
  
  // Exclusive interior color options
  
  // Competition Sport bucket seats available
  
  // Each trim level builds on the previous one, offering more comfort, tech, and customization options.


  return (
    <>
      <div className="rowPage">
        <Carousel2026 />
        <div className="col-3 ">
          <Sidebar2026 />
        </div>

        <div className="col-6">

          <div className="center">
            <h1>              <b>2026 Corvette Seating             </b>          </h1>           </div>


          <div className="center">
            <h3> "Race On A Track In A Corvette, It's The Coolest Place To Be!"  </h3>
            <h3>"Its the Air Conditioner and the Ventilated Seats, Anonymous"</h3>
            <h5>
              Tadge Juecther, Corvette Chief Engineer" </h5>

        

          <p>
            The 2026 Corvette interiors is a blend of luxury and advanced             technology. Inspired by fighter jets, it features a leather-wrapped
            cockpit that combines functional technology with craftsmanship. The            interior includes standard wireless Apple CarPlay® and Android
            Auto™ compatibility, a 14-speaker Bose Performance Series Sound            system, and driver information screens to monitor battery power and
            performance. Premium options like the Habanero two-tone Black/Orange            design are available for higher trim levels.
          </p>
 
          <p>
            The new interior colors are the following:
          </p>


          <p>Select a seat type GT1, GT2 Ventailated, or Competition</p>

<h3> <b>   GT1 and GT2 Seats   </b></h3>

<CarouselIntro />


<LZ />
<h2>  Interior Options, Seats, and More  </h2>

<div className="responsive">
  <div className="gallery100">
    <a target="_blank" rel="noopener noreferrer" href="/gt1.png" >
      <img src="/gt1.png" alt="Cinque Terre" width={"100%"} height={"100%"}
      />

    </a>
    <div className="desc">
      Chevrolet Corvette GT1 Seat (Source: GMAuithority.com)
    </div>
  </div>
</div>

<div className="responsive">
  <div className="gallery100">
    <a target="_blank" rel="noopener noreferrer" href="/gt2.png" >
      <img src="/gt2.png" alt="Cinque Terre" width={"100%"} height={"100%"}
      />


    </a>
    <div className="desc">
      Chevrolet Corvette GT2 Seat (Source: GMAuithority.com)
    </div>
  </div>
</div>


<p>
  The Corvette GT1 versus GT2 comes down to personal preference. Some may find that the firmer bolsters on the GT2 seats are more
  comfortable over long drives than the GT1 due to the higher-density foam, but others may prefer the softer GT1.
</p>
<h3><b>Competition Seat</b></h3>

<div className="responsive">
  <div className="gallery100">
    <a target="_blank" rel="noopener noreferrer" href="/competition.png" >
      <img src="/competition.png" alt="Cinque Terre" width={"100%"} height={"100%"}
      />

    </a>
    <div className="desc">
      Chevrolet Corvette Competition Seat (Source: GMAuithority.com)
    </div>
  </div>
</div>
<h3> <b>   Competition Seat   </b></h3>
<p>   The <b>     Corvette Competition bucket seats    </b>    were designed specifically to support high-performance driving.

  They are significantly stiffer than both the GT1 and the GT2 seats, especially in the high-wear areas — keeping you in place as you zip around the track.
</p>
<p>  Like the GT2 seats, the Competition seats feature power lumbar and bolster adjustments in addition to the standard eight-way power adjustment. They also come with built-in seat warmers and cooling ventilation.
</p> The Competition seats are available in all seven interior colors and come with carbon-fiber trim — however, two-tone options are not available for this design. The seats are wrapped in Napa leather, but high-wear areas are covered in performance textile, which resembles a thick mesh. The bucket shell under the seat is a high-gloss black finish, providing a sleek, elegant appearance.
<p>  Styles include leather seating: 1. Ventiladed, Base Color, 2. Sueded  Ventailated dipped seat description.
</p>


        </div>


      
 <div> 
          <h3>            <b> References </b>          </h3>
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
            Reference: 1. Hagerty, The LT6 A Landmark Achievement
          </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
            2. Vette Vues Magazine
          </Link> </div>

         <Footer />

    
 <div className="col-3 ">
  <CarouselFlag />
  {/* <ThemeSwitcher /> */}
  <OnPage2026 /> 
  <Sidebar2026B />
</div>


     </div>
     </div>
    </>
  );
}
