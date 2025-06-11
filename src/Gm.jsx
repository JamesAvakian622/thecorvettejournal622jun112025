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


export default function Gm() {
    return (
        <>
            <div className="rowPage">
                <CarouselZ06 />
                </div>

                <div className="col-3 ">
                    <SidebarZ06 />
                </div>

                <div className="col-6">
                    <h1>
                        <b> General Motors  </b>
                    </h1>

                    <h1>
                        <b> Chevrolet Executives</b>
                    </h1>



                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/gmlogo.png">
                                <img src="/gmlogo.png" alt="Cinque Terre" width={"50%"} height={"50%"}
                                />
                            </a>

                        </div>
                    </div>

<br />

                    <h3>
                        <b>  GM Logo   </b>

                    </h3>

 <h2> <b>  The Corvette Line   </b>         </h2>
                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/line.png">
                                <img src="/line.png" alt="Cinque Terre" width={"100%"} height={"50%"} />
                            </a>
                        </div>
                    </div>
                  

                    <h2> <b> The General Motors Executive Staff      </b>         </h2>

<br />
                    <h3>
                        <b> Mary Bara, CEO, General Motors </b>
                    </h3>
                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/gm1.png">
                                <img src="/gm1.png" alt="Cinque Terre" width={"3%"} height={"3%"}
                                />
                            </a>
                        </div>
                    </div>

                    <p>
                        Mary Barra is the Chair and Chief Executive Officer (CEO) of General Motors. She has held the CEO position since January 2014, making 
                        history as the first female CEO of a major automaker. In 2016, she was also elected Chair of GM’s Board of Directors.
                        Under her leadership, GM has focused on electrification, autonomous driving, and software while maintaining its core vehicle business. 
                        She has championed GM’s vision of zero crashes, zero emissions, and zero congestion. Barra started her GM career in 1980 as a co-op student 
                        and worked her way up through various engineering and leadership roles.
                    </p>
<br />
                    <h3>
                        <b> Mark Ruess, President, General Motors </b>
                    </h3>
                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/gm2.png">
                                <img src="/gm2.png" alt="Cinque Terre" width={"50%"} height={"50%"}
                                />

                            </a>       </div>
                    </div>


                    <p>Mark Reuss is the President of General Motors, a position he has held since January 2019. He has been a key figure in GM’s electrification 
                        Stategy, overseeing the development of electric Corvettes and GM’s broader EV transition.
                        Reuss has had a long career at GM, starting as a student intern in 1983 and working his way up through various engineering and leadership 
                        roles. His father, Lloyd Reuss, was also a former GM president. Over the years, Mark Reuss has led product development, Vehicle Assembly, and 
                        vehicle integration, playing a major role in shaping GM’s lineup, including performance models like the Cadillac V-Series and Chevrolet SS.
                        Recently, he confirmed that GM will not produce a mid-engine Cadillac supercar based on the Corvette platform, despite past rumors. He also 
                        oversees GM’s autonomous and EV initiatives, working closely with new leadership hires like Sterling Anderson, a former Tesla Autopilot 
                        executive.
                    </p>

<br />
                    <h3>
                        <b>  Scott Bell, Vice President, General Motors, Chevrolet Division          </b>   </h3>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/gm3.png">
                                <img src="/gm3.png" alt="Cinque Terre" width={"50%"} height={"50%"}
                                />

                            </a>

                        </div>
                    </div>
                    <p>
                        Scott Bell is the Vice President of Global Chevrolet at General Motors. He was appointed to this role in March 2022, after serving as
                        President and Managing Director of GM Canada since 2019.         Bell has been with GM since 1989, holding various leadership positions in 
                        sales, service, and marketing.
                        During his tenure in Canada, he oversaw major investments, including the reopening of Oshawa Assembly and the conversion of CAMI Assembly
                        into Canada’s first large-scale EV plant. His leadership helped Chevrolet navigate the transition to electric vehicles,
                        including the development of models like the Silverado EV.
                    </p>

<br />
                    <h3>
                        <b>  Tony Roma, Vice President, General Motors, Chevrolet Division   </b>

                    </h3>
                    <div className="responsive">
                        <div className="gmallery50">
                            <a target="_blank" rel="noopener noreferrer" href="/Roma.png">
                                <img src="/Roma.png" alt="Cinque Terre" width={"50%"} height={"50%"}
                                />

                            </a>

                        </div>
                    </div>

                    <p>
                        Tony Roma has been appointed as the Executive Chief Engineer for Global Corvette and Performance Cars, succeeding Tadge Juechter, who
                        retired after 47 years at GM2. Roma previously served as Chief Engineer for the Cadillac CELESTIQ and has extensive experience with
                        Corvette powertrains, Cadillac V-Series, and Blackwing models.
                        His promotion became effective July 1, 2024, and he now leads Corvette’s luxury and performance car division2. Roma is known for his deep
                        passion for cars—his personal collection includes a C4 ZR1, C6 ZR1, C8 Z06, and Cadillac CTS-V Wagon2. He is also a certified GM Level 6
                        driver and has logged over 1,500 laps at the Nürburgring.
                        Mark Reuss, GM’s President, praised Roma as the perfect choice to lead Corvette into the future.

                    </p>
<br />
                    <h3>
                        <b>    Josh Holder, Vehicle Chief Engineer, Chevrolet Corvette, General Motors      </b>
                    </h3>



                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/gm8.png">
                                <img src="/gm8.png" alt="Cinque Terre" width={"30%"} height={"30%"} />

                            </a>
                        </div>
                    </div>

   <p>

                        Josh Holder is the Chief Engineer for Corvette ICE (internal combustion engine) models. He has been involved in the development of the 2025 
                        Corvette ZR1,
                        which is the most powerful Corvette ever produced. Holder has been featured in discussions about Corvette engineering, including his 
                        role in shaping the future
                        of ICE-powered Corvettes amid GM's broader electrification efforts.
                    </p>

<br />


                    <h3>       <b>      Tadge Juechter, Corvette Executive, Chief Engineer, General Motors (Retired)       </b>

                    </h3>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/Tadge.png">
                                <img src="/Tadge.png" alt="Cinque Terre" width={"50%"} height={"50%"} />

                            </a>
                         
                        </div>
                    </div>

                    <p>  Tadge Juechter, the longtime Corvette Executive Chief Engineer, is retiring after an impressive 47-year career at General Motors. 
                        He has been inStumental in shaping the Corvette lineup, particularly leading the development of the mid-engine C8, a historic shift for 
                        the brand. Juechter first joined the Corvette team in 1993 and later became Chief Engineer in 2006, overseeing multiple generations, 
                        including the C5, C6, C7, and C8. His legacy includes groundbreaking models like the C7 ZR1 and the upcoming C8 ZR1, which is expected to
                        push Corvette performance even further.

                    </p>






                 
<br />
                    <h3>
                        <b>    Harlan Charles, Corvette Product Marketing Manager, General Motors, (Retired)  </b>

                    </h3>



                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" rel="noopener noreferrer" href="/Harland2.png">
                                <img src="/Harland2.png" alt="Cinque Terre" width={"50%"} height={"50%"} />

                            </a>
                           
                        </div>
                    </div>
<p> 
                    Harlan Charles, the longtime Corvette Product Marketing Manager, retired from General Motors in February 2025 after 37 years with the company, 
                    including 24 years dedicated to Corvette. He played a crucial role in shaping Corvette’s identity, contributing to models like the C5, C6, C7, and C8. Some of his notable achievements include:
                    Advocating for the mid-engine Corvette as early as 2005.  Ensuring the 2020 C8 Stingray launched at an attainable $59,995 price.
                    Naming the Corvette E-Ray and reviving the Grand Sport and ZR1 nameplates.      Introducing personalization options like brake colors, stitching, and seat belts.
                    Spearheading special editions, including the Centennial and LeMans commemorative models.
                    His departure was unexpected, and Tadge Juechter, the former Corvette Chief Engineer, publicly praised Charles for his contributions, 
                    calling him an irreplaceable force in the Corvette communit

  </p>

  </div>
       
            <h3>
              <b> References </b>
            </h3>/
1
             <Link  to="https://www.gm.com/company/leadership.detail.html/Pages/bios/global/en/corporate-officers/Mary-Barra">
                General Motors.com, "Mary T. Barra, Chair and Chief Executive Officer"              </Link>


             <Link  to="https://copilot.microsoft.com/chats/XF5kKzhbotsnPTppdKLFT">
                Copilot, Microsoft.com, "Mary Bara, CEO, General Motors",               </Link>
 
<Link  to="  https://www.msn.com/en-us/autos/news/gm-ceo-backs-trump-s-auto-tariffs-as-a-tool-to-help-us-manufacturers/ar-AA1FK9d2"> "GM CEO backs Trump’s auto tariffs as a tool to help US manufacturers Story", CNN by Sophia Compton  </Link>
2
          


             <Link  to="https://copilot.microsoft.com/chats/oj4ZmLmDtpbofyWRFoHPz">
                Copilot, Microsoft.com, "Mark Ruess, President, General Motors",               </Link>

      <Link  to="https://en.wikipedia.org/wiki/Mark_Reuss">
                Wikipedia.com, "Mark Ruess, President, General Motors",               </Link>


       

3


             <Link  to="https://copilot.microsoft.com/chats/oj4ZmLmDtpbofyWRFoHPz">
                General Motors.com, "Mark Ruess, President, General Motors",               </Link>


             <Link  to="https://copilot.microsoft.com/chats/oj4ZmLmDtpbofyWRFoHPz">
                Copilot, Microsoft.com, "Mark Ruess, President, General Motors",              </Link>


4

             <Link  to="https://copilot.microsoft.com/chats/oj4ZmLmDtpbofyWRFoHPz">
                General Motors.com, "Mark Ruess, President, General Motors",               </Link>


             <Link  to="https://copilot.microsoft.com/chats/oj4ZmLmDtpbofyWRFoHPz">
                Copilot, Microsoft.com, "Mark Ruess, President, General Motors",               </Link>


            <Footer />
          

                <div className="col-3 ">
                    <CarouselFlag />
                    {/* <ThemeSwitcher /> */}
                    <OnPageZ06 />
                    <SidebarZ06B />
                </div>

           
        </>
    );
}
