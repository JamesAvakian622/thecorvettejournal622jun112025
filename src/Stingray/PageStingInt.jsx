
import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import NavbarInterior from "../NavbarInterior";
import CarouselIntro from "./CarouseIntro";
import LT from "../LT";
export default function PageStingInt() {
  const sections = [
    {
      title: " 1LZ, 2LZ, 3LZ Descriptions:   ",
      text: "  This feature allows the car to operate solely on electric power for short distances (around 3-4 miles) at speeds up to 45 mph, perfect for quiet departures or urban driving.",
    },

    {
      title: " Display Stealth Mode:   ",
      text: "  This feature allows the car to operate solely on electric power for short distances (around 3-4 miles) at speeds up to 45 mph, perfect for quiet departures or urban driving.",
    },
    {
      title: "  Performance App:   ",
      text: "  The E-Ray includes a dedicated app that displays real-time performance data, such as battery power, front vs. rear-wheel drive diStibution, and other metrics to keep drivers informed and in control.  ",
    },
    {
      title: "Front Lift",
      text: "  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    ",
    },
    {
      title: "Driver Assistance and Connectivity:",
      text: " Standard features include wireless Apple CarPlay® and Android Auto™, a built-in Wi-Fi hotspot, and a 14-speaker Bose Performance Series sound system for an immersive audio experience.",
    },
    {
      title: " Rear View Mirror Monitor   ",
      text: "  rear roof camera and interior mirror display    ",
    },
  ];

  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
                2025 Corvette Stingray Interior
              </b>
            </h1>
          </div>

          <div className="center">
            <h3> "Race On A Track In A Corvette, It's The Coolest Place To Be!"  </h3>
            <h3>"Its the Air Conditioner and the Ventilated Seats, Anonymous"</h3>
            <h5>
              Tadge Juecther, Corvette Chief Engineer" </h5>

          </div>
          <p>
            The 2025 Corvette Stingray interior is a blend of luxury and advanced
            technology. Inspired by fighter jets, it features a leather-wrapped
            cockpit that combines functional technology with craftsmanship. The
            interior includes standard wireless Apple CarPlay® and Android
            Auto™ compatibility, a 14-speaker Bose Performance Series Sound
            system, and driver information screens to monitor battery power and
            performance. Premium options like the Habanero two-tone Black/Orange
            design are available for higher trim levels.
          </p>

          <LT />
          <h2>  Interior Options, Seats, and More  </h2>


          <p>Select a seat type GT1, GT2 Ventailated, or Competition</p>

          <h3> <b>   GT1 and GT2 Seats   </b></h3>
          <CarouselIntro />

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" rel="noopener noreferrer" href="/gt1.png" >
                <img src="/gt1.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                />


              </a>
              <div className="desc"><b>
                Chevrolet Corvette GT1 Seat </b>(Source: GMAuithority.com)
              </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" rel="noopener noreferrer" href="/gt2.png" >
                <img src="/gt2.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                />


              </a>
              <div className="desc">
                <b>
                  Chevrolet Corvette GT2 Seat </b>(Source: GMAuithority.com)
              </div>
            </div>
          </div>


          <p>The Corvette GT1 versus GT2 comes down to personal preference. Some may find that the firmer bolsters on the GT2 seats are more
            comfortable over long drives than the GT1 due to the higher-density foam, but others may prefer the softer GT1.
          </p>
          <h3><b>Competition Seat</b></h3>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" rel="noopener noreferrer" href="/competition.png" >
                <img src="/competition.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                />

              </a>
              <div className="desc"><b>
                Chevrolet Corvette Competition Seat</b> (Source: GMAuithority.com)
              </div>
            </div>
          </div>





          <p>
            The <b>     Corvette Competition bucket seats    </b>    were designed specifically to support high-performance driving.

            They are significantly stiffer than both the GT1 and the GT2 seats, especially in the high-wear areas — keeping you in place as you zip around the track.
          </p><p>
            Like the GT2 seats, the Competition seats feature power lumbar and bolster adjustments in addition to the standard eight-way power adjustment. They also come with built-in seat warmers and cooling ventilation.
          </p>
          The Competition seats are available in all seven interior colors and come with carbon-fiber trim — however, two-tone options are not available for this design. The seats are wrapped in Napa leather, but high-wear areas are covered in performance textile, which resembles a thick mesh. The bucket shell under the seat is a high-gloss black finish, providing a sleek, elegant appearance.
          <p>
            Styles include leather seating: 1. Ventiladed, Base Color, 2. Sueded
            Ventailated dipped seat description.
          </p>
          <p>Th</p>
          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>



          <h3> <b> Corvette Stingray TechTalk, </b>   Yes, you could order GT1 and 1LZ for your Corvette ZR1   </h3>
          <p>
            GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
            If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.
          </p>
          <h3> <b> Corvette Stingray TechTalk, </b>   What are the Best Color Combinations - without Competition Stipes, (My Opionion, Anonymous)  </h3>
          <p>
            GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
            If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.
          </p>
          <h3> <b> Corvette Stingray TechTalk, </b>   What are the Best Color Combinations - with Competition Stipes, (My Opionion, Anonymous)  </h3>
          <p>
            GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
            If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.


          </p>
          <div className="responsive">
            <h3>
              <b> References </b>
            </h3>

            <Link to="https://www.youtube.com/shorts/xQsWTkjwG5M">            1. Habenero, Chevrolet Corvette C8 Interior, HorsepowerObsessed        </Link>
            <Link to=" https://www.youtube.com/watch?v=Q374hGBk4Qg ">         2. 2025 Chevrolet Corvette C8 Interior, TopherDrives       </Link>
            <Link to="https://www.youtube.com/watch?v=rY-Si1jkoig">             3. 2020 chevrolet Corvette C8 Interior, Danny Drives           </Link>
            <Link to="https://www.youtube.com/watch?v=fIcKb-Jt4kw">           4. Chevrolet Corvette C8 Interior, Driven Mad!        </Link>
            <Link to="https://www.youtube.com/watch?v=RKt7xdrzNws">           5. 2025 Chevrolet Z06, Drivingwithmarco      </Link>
            <Link to="https://www.youtube.com/watch?v=O6h6ecsvN6s">         6. 2025 Chevrolet Corvette C8 Interior, 2LT, Beautiful Bald Guy       </Link>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
