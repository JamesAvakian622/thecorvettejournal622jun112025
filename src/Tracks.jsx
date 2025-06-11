import React from "react";
import "./styles/Page.css";
import "./styles/Rivals.css";
import "./styles/photos.css";
import NavbarMore from "./NavbarMore";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZ06 from "./Z06/SidebarZ06";
import SidebarZR1 from "./ZR1/SidebarZR1";
import data from "./Json/Z06Rivals.json"; // Import the JSON file
export default function Tracks({ title, image, description }) {


    const sections = [
        { image1: "/zrz.png", title: "Tracks and videos of racing", text: " " },
        { image1: "/zrz.png", title: "1. Keep Your Corvette In A Locked Garage", text: "Your garage door opener is a lock and keep a theif cannot see you car he will not steal it." },
        { image1: "/zrz.png", title: "2. Loud Exhausts ", text: "In the middle of the night a loud exhaust will notify your someone is starting your vehicle." },
        { image1: "/zrz.png", title: "3.       ", text: " " },
        { image1: "/zrz.png", title: "  Items To buy To Keep Your Car Secure  ", text: " " },
        { image1: "/zrz.png", title: " 1.  ", text: "Hidden Apple Air Tags, One in Engine, One in the Interior." },



        { image1: "/zrz.png", title: "2. ", text: "A mobile App throttle Controller   " },
        { image1: "/zrz.png", title: "3. ", text: "An Aluminium RFID blocking KeyFob enclosure, prevent others from listening and recording your codes.  " },
        { image1: "/zrz.png", title: "4. ", text: "     " },
        { image1: "/zrz.png", title: "Variable Valve Timing:", text: "   " },
        { image1: "/zrz.png", title: "Hot-Side Direct Injection:  ", text: "The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     " },
        { image1: "/zrz.png", title: "Clean-Sheet Design:", text: "The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  " },
        { image1: "/zrz.png", title: "Co-Developed with Racing Engine: ", text: "The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  " },
        { image1: "/zrz.png", title: "Race-Tested, Production Approved:   ", text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  " },
        { image1: "/zrz.png", title: "Built at The Performance Build Center:  ", text: "The Corvette LT6 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  " },
    ];




    function Card1({ title, image, description }) {
        return (
            <>
                <div className="card-rivals">

                    <div className="responsive">
                        <div className="content-container">
                            <a target="_blank" rel="noopener noreferrer" href={image}>
                                <img src={image} alt="Cinque Terre" width={1600} height={1400} />
                            </a>
                            <div className="desc">Corvette Z06, Competition Yellow</div>
                        </div>
                    </div>

                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div> </>
        );
    };

    return (
        <>
            <div className="rowPage">
                <CarouselZR1 />
                <div className="col-3">
                    <SidebarZ06 />
                </div>

                <div className="col-6">
                    <NavbarMore />

                    <div className="center" >
                        <h1>     <b>   2025 Corvette Biographies    </b>     </h1>
                        <h3>    1. Zora Arkus Duntov, 2. Tadge Juechter, and 3. Harland Charles  </h3>
                    </div>

                    <br />
                    <div className="main">
                        {data.map((item, index) => (
                            <div className="card-rivals">
                                <Card1
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>
                        <b> References </b>
                    </h3>
                    <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/    " > 1. Zora Arkus Duntov  </Link>
                    <Link to="     https://www.corvetteactioncenter.com/history/tadge_juechter.html#google_vignette   " > 2.   Tadge Juecther   </Link>
                    <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 3. Harland Charles</Link>

                </div>


                <Footer />
            </div>

            <div className="col-3 ">
                <CarouselFlag />
                {/* <ThemeSwitcher /> */}
                <OnPageZR1 />  <SidebarZR1 />
            </div>

        </>
    );
}
