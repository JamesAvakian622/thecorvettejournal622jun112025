import React from "react";
import "./styles/Page.css";
import "./styles/Rivals.css";
import "./styles/photos.css";
// import Navbar2 from "./Navbar2";
// import Navbar3 from "./Navbar3";
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
export default function Bio({ title, image, description }) {


    const sections = [
        { image1: "/zrz.png", title: "", text: "   Zora Arkus-Duntov, often called the Father of the Corvette, was a brilliant engineer who played a pivotal role in transforming the Chevrolet Corvette into a true high-performance sports car. Born Zachar Arkus on December 25, 1909, in Brussels, Belgium, to Russian parents, he later adopted the hyphenated surname Arkus-Duntov. " },
        { image1: "/zrz.png", title: "Early Life & Engineering Career", text: "This is the paragraph for Title Two." },
        { image1: "/zrz.png", title: "Escape from War & Move to America", text: "   During World War II, Arkus-Duntov joined the French Air Force before fleeing Nazi-occupied France. He and his family escaped to the United States, where he established Ardun Mechanical, a company specializing in war munitions." },
        { image1: "/zrz.png", title: "    Corvette & GM Legacy   ", text: "   In 1953, Arkus-Duntov joined General Motors after seeing the first Corvette at the Motorama show. He recognized its potential but saw the need for performance improvements. Over the years, he introduced V8 engines, fuel injection, independent rear suspension, and racing prototypes, helping the Corvette evolve into a world-class sports car." },
        { image1: "/zrz.png", title: "    Influence on the Mid-Engine Corvette   ", text: "  Arkus-Duntov was a Stong advocate for a mid-engine Corvette, believing it would enhance performance. Though GM resisted the idea during his tenure, his vision was finally realized with the C8 Corvette, introduced in 2020." },
        { image1: "/zrz.png", title: "  Legacy & Recognition  ", text: "Arkus-Duntov retired from GM in 1975 but remained an influential figure in the automotive world. He passed away on April 21, 1996, and his ashes were placed at the National Corvette Museum, honoring his lifelong dedication to the Corvette." },



        { image1: "/zrz.png", title: " ", text: "   His contributions shaped the Corvette into the iconic sports car it is today.   " },
        { image1: "/zrz.png", title: "Tadge Jueccher ", text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  " },
        { image1: "/zrz.png", title: "Dual-Overhead-Cam Cylinder Heads:", text: "The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      " },
        { image1: "/zrz.png", title: "Variable Valve Timing:", text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      " },
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
                <div className="col-3 ">
                    <SidebarZ06 />
                </div>

                <div className="col-6">     {/*   Adjust two Navbar 2 n 3 */}
                    {/* <Navbar2 /> 
                    <Navbar3 /> */}
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


            
            </div>

            <div className="col-3 ">
                <CarouselFlag />
                {/* <ThemeSwitcher /> */}
                <OnPageZR1 />
                <SidebarZR1 />
            </div>
    <Footer />
        </>
    );
}
