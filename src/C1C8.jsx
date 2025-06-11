import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import "./styles/photos.css";
import Footer from "./Footer";
import CarouselSting from "./Stingray/CarouselSting";
//import ThemeSwitcher from "../ThemeSwitcher";
import OnPageSting from "./Stingray/OnPageSting";
import CarouselFlag from "./Stingray/CarouselFlag";
import SidebarSting1 from "./Stingray/SidebarSting1";
import NavbarMore from "./NavbarMore";
import Navbar5 from "./Navbar5";
import Navbar4 from './Navbar4';

import ReactPlayer from "react-player";

// import Navbar3 from "../Navbar3";
//import SidebarErayB from "../Eray/SidebarErayB";
//import ButtonGridWheels from ".../components/buttons/ButtonGridWheels";
//import ButtonGridExt from ".../components/buttons/ButtonGridExt";
//import ButtonRacingStipes from ".../components/buttons/ButtonRacingStipes";
//import Spacer from ".../components/Spacer";
export default function C1C8() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
      </div>

      <div className="col-3 ">
        <SidebarSting1 />
      </div>

      <div className="col-6">


        <h1>
          <b> The Seventy Year Legacy</b>

        </h1><h1>
          <Link to="/ZC8Histb">Corvette History</Link>
        </h1>
        <br />

        <h2>The C1 to C8 Generations</h2>

        <Navbar5 />


        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/allcorvettelogos.png">
              <img
                src="/allcorvettelogos.png"
                alt="Cinque Terre"
                width={'100%'}
                height={'100%'}
              />
            </a>
            <div className="desc">Seventy Years Of Corvette Logos</div>
          </div>
        </div>


        {/* Ferrari Like,

Great Exhaust Note ! */}

        {/* <<< This website gives The Corvette justice, a website with dum ads and a serious tone and sexy sleek color 
      like the vehicle itself -- Chevy's Sup[ercar of the Century! */}

        {/* https://www.carlogos.org/car-brands/chevrolet-corvette-logo.html#1953 */}

        {/* https://www.carlogos.org/car-brands/chevrolet-corvette-logo.html#1963 */}
        {/* 
https://www.carlogos.org/car-brands/chevrolet-corvette-logo.html#1963

 */}
        <h2>  <b>       Corvette Generations:    </b> </h2>
        <p>  <b>
          <Link to="/C1">C1 Corvette History</Link>
          (1953–1962) – </b>The original Corvette, featuring a fiberglass body and evolving from a Staight-six to a V8.

        </p> <p><b>
          <Link to="/C2">C2 Corvette History</Link>
          (1963–1967) – </b>Introduced the iconic Sting Ray design, independent rear suspension, and the legendary 427 big-block engine.
        </p> <p><b>

          <Link to="/C3">C3 Corvette History</Link>
          (1968–1982) –  </b>The longest-running generation, known for its dramatic styling and the introduction of the Sting performance package.
        </p> <p><b>

          <Link to="/C4">C4 Corvette History</Link>
          (1984–1996) – </b>A complete redesign with improved aerodynamics and handling, plus the introduction of the ZR-1 with a DOHC LT5 engine.

        </p> <p><b>
          <Link to="/C5">C5  Corvette History</Link>
          (1997–2004) – </b>Featured a new LS1 V8, a hydroformed frame, and a rear transaxle for better weight distibution.

        </p> <p><b>
          <Link to="/C6"> C6 Corvette History</Link>
          (2005–2013) – </b>More refined styling, exposed headlights, and high-performance variants like the Z06 and Stingray.

   </p> <p><b>
          <Link to="/C7">C7 Corvette History</Link>
               (2014–2019) – </b>Aggressive design, direct fuel injection, and the introduction of the Grand Sport and Stingray.

       </p> <p><b>
          <Link to="/C8">C8 Corvette History</Link>
               (2020–present) – </b>The first mid-engine Corvette, offering Stingray, E-Ray, Z06, and Stingray models.
      
          <Link to="/Concept">C9 Corvette Concept</Link>

    
        <Link to="/ZC8Histb">Corvette History</Link>
    </p>

        {/* iPad size good, make Nav menu fit cellphone */}




        {/* <Navbar4 /> */}



        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/allcorvettelogos.png">
              <img src="/allcorvettelogos.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />
            </a>
            <div className="desc">Seventy Years Of Corvette Logos</div>
          </div>
        </div>


        <p>
          The <Link to="/Stingray">2025 Corvette Stingray </Link> offers a
          variety of color and Stipe options to suit different tastes. Here
          are some of the most popular choices:




          <p>
            <b> Which C7 Generation Corvette To Buy </b>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/shorts/oAvwbhirTVU"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </p>


          {/* C1C8
Legacy,
  Compare, displays
          , Side views
          , rear views  
          , Specifications and prices
          , body and suspension
          . </Colors>
          . interiors
          , price to market sports cars */}
        </p>
        {/* <h3>
            <b> Top Color Choices: </b>
          </h3>
        <p>

            <b> Arctic White </b> A classic and clean look.
        </p>
          <img src="/0x.png   " alt=" wht"></img>
        <p>

            <b> Torch Red </b> Bold and eye-catching.
        </p>
          <img src=" /1x.png  " alt=" red "></img>
        <p>

            <b> Black </b> Sleek and timeless.
        </p>
          <img src=" /2x.png  " alt="blk  "></img>
        <p>

            <b> Red Mist Metallic Tintcoat </b> A deeper, more sophisticated
            red.
        </p>
          <img src=" /3x.png  " alt=" gray "></img>
        <p>

            <b> Hypersonic Gray Metallic </b> Modern and stylish. (last year
            2024)
        </p>
          <img src=" /4x.png  " alt=" gray "></img>
          <h3>
            <b> Stipe Options: </b>
          </h3>
          <img src="/5x.png   " alt=" wht"></img>
        <p>
            Full-Length Dual Racing Stipes - Available in colors like Carbon
            Flash, Midnight Silver, and Sterling Silver.
        </p>
          <img src="/6x.png   " alt=" wht"></img>
          <img src="/7x.png   " alt=" wht"></img>
        <p>
            Stinger Stipe - A single Stipe that runs down the center of the
            hood, available in colors like Carbon Flash and Midnight Silver.
        </p>
          <img src="/8x.png   " alt=" wht"></img> */}

        <p><b>    Lubrication System:     </b>
          Dry Sump, (7.5-qt. capacity); includes oil-spray piston coolingup to 1.0 G lateral?</p>




        <h2>
          <b>C1</b>
        </h2>
        <p>
          The Corvette C1 is a true American classic, known for its groundbreaking design and cultural impact. Here are some of its most iconic aspects:
          Fiberglass Body
        </p>
        – The C1 was the first production car to feature a fiberglass body, making it lighter and more aerodynamic than its steel-bodied counterparts.
        Classic Convertible Design
        <p>  </p>
        – Its sleek, open-top design became a signature look, embodying the spirit of 1950s American roadsters.
        "Blue Flame" Inline-Six & V8 Engines
        <p>  </p>
        – Initially powered by a six-cylinder engine, later models introduced a V8, significantly boosting performance.
        Pop Culture Presence
        <p>  </p>
        – The C1 was a favorite among celebrities like Elvis Presley and John F. Kennedy, cementing its status as a cultural icon.
        Racing Legacy
        <p>  </p>
        – Thanks to engineer Zora Arkus-Duntov, the C1 made Stides in motorsports, setting records and laying the foundation for Corvette’s racing pedigree.
        <p>
          The Corvette C1 wasn’t just a car—it was a statement. It set the stage for the Corvette’s evolution into one of the most revered sports car lines in history.


        </p>
        <p>
          The Corvette C2 (1963-1967) is one of the most celebrated generations of the Corvette, known for its revolutionary design and performance upgrades. Here are some of its most iconic aspects:
          Split Window Coupe (1963)  </p>
        – The 1963 model featured a distinctive split rear window, designed by Larry Shinoda under Bill Mitchell’s direction. Though discontinued in 1964 due to visibility concerns, it remains one of the most sought-after Corvette designs.
        Hidden Headlights<p>  </p>
        – The C2 introduced hidden headlights, a sleek and futuristic design element that became a Corvette hallmark.
        Big-Block V8 Power<p>  </p>
        – The C2 saw the introduction of the legendary 427 cubic inch Big-Block V8 in 1966, offering up to 425 horsepower, solidifying Corvette’s reputation as a high-performance machine.
        Independent Rear Suspension<p>  </p>
        – A major leap in handling and ride quality, the C2 was the first Corvette to feature an independent rear suspension, improving stability and cornering.
        Four-Wheel Disc Brakes (1965)<p>  </p>
        – Enhancing stopping power and safety, four-wheel disc brakes were introduced in 1965, making the C2 a more capable sports car.
        Aerodynamic Styling<p>  </p>
        – The C2 was designed with advanced aerodynamics, including wind tunnel testing, resulting in a more Steamlined and aggressive body.
        <p>
          The C2 Corvette wasn’t just a car—it was a revolution in American sports car design. It set new standards for performance and styling, making it a timeless classic. Do you have a favorite C2 model year?
        </p>
        <p>
          The Corvette C3 (1968-1982) is a legendary chapter in Corvette history, known for its bold styling and evolving performance. Here are some of its most iconic aspects:
        </p>  <p>     <b>
          Shark-Like Body Lines</b>       </p>
        <p>

          – Inspired by the Mako Shark II concept, the C3 featured a long nose, curvy fenders, and a wide rear, giving it an aggressive, unmistakable look.
        </p>  <p>     <b>
          Hidden Pop-Up Headlights
        </b>
          – Like the C2, the C3 retained vacuum-operated pop-up headlights, adding to its futuristic appeal.

          Removable T-Tops & Convertible – The C3 introduced removable T-tops for an open-air experience while maintaining Stuctural rigidity. Convertibles were available until 1975.

          Big-Block Power – The C3 offered a range of powerful engines, including the monStous L88 427, which was underrated at 430 horsepower but could exceed 500 hp in race trim.

        </p>  <p>     <b>
          Chrome Bumpers & Urethane Transition</b>

          – Early models (1968-1972) featured chrome bumpers, but safety regulations led to a switch to urethane bumpers in 1973.

        </p>  <p>     <b>
          Special Editions
        </b>
          – The C3 saw several unique editions, including the 1978 Indy 500 Pace Car and the 1982 Collector Edition, which featured exclusive styling and performance tweaks.
        </p>  <p>     <b>

          Longest Production Run – The C3 holds the record for the longest-running Corvette generation, spanning 14 years, adapting to changing regulations and market demands.
        </b>
        </p>
        <p>
          The Corvette C4 (1984-1996) marked a major leap forward in technology and design, making it one of the most innovative Corvette generations. Here are some of its most iconic aspects:
        </p>  <p>     <b>
          Wedge-Shaped Aerodynamics – The C4 introduced a sleek, low-slung profile with improved aerodynamics, boasting a drag coefficient of 0.34.
        </b>        </p>  <p>   <b>

          Clamshell Hood
        </b>      </p>     <p>
          – A unique feature that exposed both the engine and front suspension when opened, making maintenance easier.

        </p>  <p>     <b>
          Removable Targa Roof Panels  </b>

          – Providing an open-air driving experience without sacrificing Stuctural rigidity.
        </p>  <p>     <b>
          Digital Dashboard  </b>
          – Early models featured a futuristic LCD digital inStument cluster, later replaced with a hybrid analog/digital setup due to criticism.
        </p>  <p>     <b>
          ZR-1 "King of the Hill"  </b>
          – The high-performance ZR-1 variant debuted in 1990, featuring a 375-hp LT5 engine developed with Lotus, later upgraded to 405 hp.
        </p>  <p>     <b>
          LT1 & LT4 Engines  </b>
          – The LT1 V8 (1992-1996) delivered 300 hp, while the LT4 V8 (1996) pushed 330 hp, making the final-year C4 one of the most powerful.
        </p>  <p>     <b>
          First Corvette with a Glass Hatchback </b>
          – Improving storage access and modernizing the design.
        </p>  <p>     <b>
          SCCA Racing Ban  </b>
          – The C4 was so dominant in racing that the Sports Car Club of America (SCCA) banned it from competition, highlighting its performance capabilities.
        </p>  <p>
          The C4 Corvette was a technological powerhouse, blending futuristic design with serious performance. Do you have a favorite C4 model year?
        </p>
        <p>
          The Corvette C5 (1997-2004) was a game-changer, bringing modern technology and performance to the Corvette lineup. Here are some of its most iconic aspects:
          LS1 & LS6 V8 Engines – The C5 introduced the LS1 V8, producing 345 hp, while the high-performance Z06 variant featured the LS6 V8, reaching 405 hp.
          Transaxle Layout – A rear-mounted transaxle improved weight diStibution, enhancing handling and stability.
          Pop-Up Headlights – The C5 retained the classic pop-up headlights, a signature Corvette feature.
          Lightweight Design – The C5 featured a hydroformed frame, reducing weight while increasing rigidity.
          Targa Roof & Convertible Options – Offering both coupe and convertible configurations, plus a removable Targa roof for open-air driving.
          50th Anniversary Edition (2003) – Celebrating Corvette’s 50th birthday with unique styling and suspension upgrades.
          Z06 Performance Model – The Z06 was a track-focused beast, featuring lighter components, stiffer suspension, and enhanced aerodynamics.
          Heads-Up Display (HUD) – A futuristic feature projecting key driving information onto the windshield.
          The C5 Corvette was a turning point, blending performance, technology, and affordability. Do you have a favorite C5 model year?
        </p>
        <p>
          The Corvette C5 (1997-2004) was a game-changer, bringing modern technology and performance to the Corvette lineup. Here are some of its most iconic aspects:
          LS1 & LS6 V8 Engines – The C5 introduced the LS1 V8, producing 345 hp, while the high-performance Z06 variant featured the LS6 V8, reaching 405 hp.
          Transaxle Layout – A rear-mounted transaxle improved weight diStibution, enhancing handling and stability.
          Pop-Up Headlights – The C5 retained the classic pop-up headlights, a signature Corvette feature.
          Lightweight Design – The C5 featured a hydroformed frame, reducing weight while increasing rigidity.
          Targa Roof & Convertible Options – Offering both coupe and convertible configurations, plus a removable Targa roof for open-air driving.
          50th Anniversary Edition (2003) – Celebrating Corvette’s 50th birthday with unique styling and suspension upgrades.
          Z06 Performance Model – The Z06 was a track-focused beast, featuring lighter components, stiffer suspension, and enhanced aerodynamics.
          Heads-Up Display (HUD) – A futuristic feature projecting key driving information onto the windshield.
          The C5 Corvette was a turning point, blending performance, technology, and affordability. Do you have a favorite C5 model year?
        </p>
        <p>
          The Corvette C6 (2005-2013) was a major evolution in Corvette history, blending modern performance with refined styling. Here are some of its most iconic aspects:
          Exposed Headlights – The C6 was the first Corvette since 1962 to feature exposed headlights, moving away from the pop-up design.
          LS2, LS3, LS7 & LS9 Engines – The C6 introduced the LS2 V8 (400 hp), later upgraded to the LS3 V8 (430 hp). The Z06 featured the 7.0L LS7 (505 hp), while the Sting boasted the supercharged LS9 (638 hp), making it the most powerful Corvette at the time.
          Sting "King of the Hill" – The Sting was a high-performance beast, capable of 200+ mph, thanks to its carbon-fiber body panels and supercharged LS9 engine.
          Improved Handling – The C6 featured a longer wheelbase and revised suspension geometry, enhancing ride quality and cornering ability.
          Magnetic Ride Control – Available on higher trims, this adaptive suspension system improved handling by adjusting damping in real time.
          Grand Sport Model – Introduced in 2010, the Grand Sport combined Z06 styling with the LS3 engine, offering a balance of performance and affordability.
          Push-Button Ignition – The C6 was the first Corvette to feature keyless entry and push-button start, modernizing the driving experience.
          Racing Success – The C6.R dominated endurance racing, winning multiple 24 Hours of Le Mans and American Le Mans Series championships.

        </p>
        <p>
          The Corvette C7 (2014-2019) was a bold evolution, blending aggressive styling with cutting-edge performance. Here are some of its most iconic aspects:
          Sharp, Angular Design – The C7 introduced a more sculpted, aerodynamic body with sharp lines and aggressive stance.
          LT1 & LT4 Engines – The LT1 V8 (455-460 hp) powered the Stingray, while the supercharged LT4 (650 hp) made the Z06 a track monster.
          Quad Exhaust Tips – A signature feature, the C7’s centrally mounted quad exhaust tips added to its aggressive look.
          Revamped Interior – Featuring premium materials, a driver-focused cockpit, and modern tech like an 8-inch touchscreen.
          Z06 & Grand Sport Models – The Z06 delivered supercar-level performance, while the Grand Sport combined Z06 handling with Stingray power.
          Magnetic Ride Control – Adaptive suspension technology improved handling and ride comfort.
          Carbon Fiber Components – Lightweight materials enhanced performance, including a carbon-fiber hood and roof options.
          C7.R Racing Success – The C7.R dominated endurance racing, winning multiple 24 Hours of Le Mans and IMSA championships.
          The C7 Corvette was a turning point, refining Corvette’s legacy while pushing performance boundaries. Do you have a favorite C7 model year?
        </p>
        <p>
          The Corvette C8 (2020-present) is a groundbreaking shift in Corvette history, redefining performance and design. Here are some of its most iconic aspects:
          Mid-Engine Layout – The C8 is the first Corvette to feature a mid-engine design, dramatically improving handling and weight diStibution.
          LT2 V8 Engine – The 6.2L LT2 V8 produces 490-495 hp, delivering supercar-level acceleration.
          Dual-Clutch Transmission – The C8 introduced an 8-speed dual-clutch automatic, replacing the traditional manual option for lightning-fast shifts.
          Aggressive Aerodynamics – Inspired by fighter jets, the C8 features large side air intakes, a canopy-forward stance, and sleek body lines.
          Sting & Z06 Variants – The Z06 boasts a 5.5L flat-plane crank LT6 V8 with 670 hp, while the upcoming Sting is expected to push over 1,000 hp.
          E-Ray Hybrid Model – The E-Ray is the first hybrid Corvette, combining a 655-hp V8 with an electric motor for all-wheel drive.
          Racing Success – The C8.R has dominated endurance racing, winning the 2023 FIA World Endurance Championship.
          The C8 Corvette is a revolution, pushing Corvette into the realm of exotic supercars. Do you have a favorite C8 model?
        </p>


        <h3>
          <b> Performance </b>
        </h3>
        <p>
          Performance: The Stingray features a naturally aspirated V8 engine
          positioned behind the driver, delivering up to 495 horsepower and
          470 lb-ft of torque. It boasts a 0-60 mph time of 2.9 seconds and a
          top speed of 194 mph.
        </p>
        <h3>
          <b> Design </b>
        </h3>
        <p>
          The 2025 model offers a Stiking design with multiple leather seat
          designs and wheel options for customization. It also includes a
          retractable hardtop for the convertible version.
        </p>
        <p>
          This set of images is only half of the available
          <Link to="/Stingray">2025 Corvette Stingray </Link> line. These are
          the most popular, you may want a more custom look and combination.
          Go for this car and love it with all your hearth. Love this car !
        </p>
        <p>
          Remember the convertible version is equally if not more a utility
          feature and its design whether in Black or Body Color is supurbe.
          What a beautify car, I love all the 2025 colors and certain Stipe
          combinations ! Select one and stay true to your nature.
        </p>
        <h3>
          <b> Interior </b>
        </h3>
        <p>
          The cockpit combines advanced technology with expert craftsmanship,
          featuring genuine leather seats, a head-up display, and a Bose sound
          system.
        </p>
        <h3>
          <b> Price</b>
        </h3>
        <p>
          The Stingray starts at $68,300 for the coupe and $89,335 for the
          convertible.
        </p>

        <div>
          <h3>   References   </h3>
          <p>
            <Link to="  https://www.youtube.com/watch?v=RfqUaTLICKI&t=22s " > 1. History of Corvette Logos   </Link>
          </p>
          <p>
            <Link to="     https://www.carlogos.org/car-brands/chevrolet-corvette-logo.html      " > 1. Corvette Logos   </Link>
          </p>


        </div>

        <Footer />
      </div>


      <div className="col-3 ">
        <CarouselFlag />

        <OnPageSting />
        <SidebarSting1 />
      </div>


    </>
  );
}
