import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZ06 from "./Z06/CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./Z06/OnPageZ06";
import CarouselFlag from "./Z06/CarouselFlag";
import SidebarZ06 from "./Z06/SidebarZ06";
import SidebarZ06B from "./Z06/SidebarZ06B";


export default function Gm1() {
    return (
        <>
            <div className="rowPage">
                <CarouselZ06 />
                <div className="col-3 ">
                    <SidebarZ06 />
                </div>

                <div className="col-6">
                    <h1>
                        <b> Welcome General Motors Staff</b>
                    </h1>

                    <h1>
                        <b> " Chevrolet Executives"</b>
                    </h1>
                    <div className="responsive">
                        <div className="gallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gmlogo.png">
                                <img src="/gmlogo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                                />
                            </a>
                            <div className="desc"> Cadillac, Coupe De Ville, 1959 Custom 672 Convertible   </div>
                        </div>
                    </div>
                    <h3>            <b> </b>          </h3>
                    <p>

                        SOLD! $330,000, 2025 SCOTTSDALE AUCTION
                    </p>

                    <p>
                        Powered by a 6.2-liter LS3 crate V8 engine and 4L60 automatic transmission. Professionally built award-winner. Equipped
                        with air conditioning, cruise control and a custom sound system, along with power steering, top, windows and seats.


                    </p>


                    <p>
                        Welcome the Executives and Chevrolet Staff     </p>
                    <h3>
                        <b> Mary Bara, CEO, General Motors </b>
                    </h3>
                    <div className="responsive">
                        <div className="gallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gm1.png">
                                <img src="/gm1.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                                />

                            </a>
                            <div className="desc">Mary Barra (born December 24, 1961), American Businesswoman | &#10; World Biographical Encyclopedia
                                Mary Barra (born December 24, 1961), American Businesswoman | &#10;                World Biographical Encyclopedia
                                prabook.com</div>
                        </div>

                    </div>

                   <h3>
                        <b> Mark Ruess, President, General Motors </b>
                    </h3>
                    <div className="responsive">
                        <div className="gallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gm2.png">
                                <img src="/gm2.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                                />

                            </a>
                            <div className="desc">

                                  General Motors President Mark Reuss Named Grand Marshal of Rolex 24 At DAYTONA – Florida National News
                        floridanationalnews.com
                                </div>
                        </div>

                    </div>

            
                    <b> Scott Bell,  Vice President, General Motors, Chevrolet Division </b>

                    <div className="responsive">
                        <div className="gallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gm3.png">
                                <img src="/gm3.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                                />

                            </a>
                            <div className="desc">Corvette Z06 Images</div>
                        </div>
                    </div>
                   
                    <b> Tony Roma, Corvette Chief Engineer, Chevrolet, General Motors </b>

                    <div className="responsive">
                        <div className="gmallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gm4.png">
                                <img src="/gm4.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                                />

                            </a>
                            <div className="desc">Meet Tony Roma, The New Executive Chief Engineer for Global Corvette
Meet Tony Roma, The New Executive Chief Engineer for Global Corvette
vette-vues.com</div>
                        </div>
                    </div>
            
                    <b> Bruce Barklow, National Corvette Museum President, General Motors </b>

                    <div className="responsive">
                        <div className="gallery100">
                            <a target="_blank" rel="noopener noreferrer" href="/gm5.png">
                                <img src="/gm5.png" alt="Cinque Terre" width={"100%"} height={"100%"} />

                            </a>
                            <div className="desc">Bruce Barklow, President, National Corvette Museum</div>
                        </div>
                    </div>
                    <Footer />
                </div>

                <div className="col-3 ">
                    <CarouselFlag />
                    {/* <ThemeSwitcher /> */}
                    <OnPageZ06 />
                    <SidebarZ06B />
                </div>
            </div>
        </>
    );
}
