import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
// import OnPageSting from "./OnPageSting";
// import CarouselFlag from "./CarouselFlag";
// import SidebarSting from "./SidebarSting1";
// import SidebarStingB from "./SidebarStingB";
 
import CarouselZR1 from "../ZR1/CarouselZR1";
import NavbarVideos from "../NavbarVideos";
export default function TopTenDealers() {
  const sections = [
    { title: "Top Ten Chevrolet Dealers", text: " The 2024 calendar year will soon be coming to an end, but there is no doubt who the top selling Corvette dealership is in the country. We just got our hands on the latest Top 10 Dealers sales report from a source deep inside Chevrolet and it shows how many new Corvettes were sold during November as well as the calendar year-to-date sales in 2024.   " },
    { title: " MacMulkin Corvette in Nashua, NH ", text: "Our friends at MacMulkin Corvette in Nashua, NH continue to lead all Corvette dealers in 2024 sales and it isn’t even close. MacMulkin had 137 new Corvettes delivered in November and now their 2024 total deliveries stand at 1,746. Sitting solidly in second place is Ciocca Corvette in Atlantic City who delivered 79 new Corvettes for the month, and their total 2024 sales is now at 984. In third place is our friend Mike Furman/Criswell Chevy with 27 deliveries for the month and 472 total Corvettes delivered so far in 2024. As my Hysteria Purple E-Ray was delivered on November 1st, it’s fun to know that I contributed to that total!" },
    {
      title: "Bomnin and Les Stanford Chevrolet",
      text: " Things are getting interesting for the next two positions as Bomnin Chevrolet Dadeland (Florida) and Les Stanford Chevrolet (Michigan) are tied with 402 Corvettes each at the end of November. Bomnin was leading that race at the end of October, but they were outsold in November 47 to 33 by Les Stanford who has been aggressively discounting their 2024-25 Stingrays at 15% Off MSRP and even their new Z06 inventory is now being offered with $5,000 discounts.   ",
    },
    {
      title: "Stingray Chevrolet",
      text: " My guess is that Stingray Chevrolet in Plant City, Florida will remain in 6th place nationally. They had 30 Corvettes sold in November for a total of 257 for the year. It’s think it’s also safe to assume that Classic Chevrolet in Grapevine, TX will close out the 2024 calendar year ranked 7th nationwide in Corvette sales. The Texas dealer sold 35 Corvettes in November and now have a total of 229 sold for the year. ",
    },
    {
      title: "Coughlin, Bonin, and Stonebriar Chevrolet ",
      text: " We may also see some of the final positions changing depending on how well December goes for these three dealers. Rick Conti at Coughlin, Chevy had only 13 deliveries in November and he is currently holding a 4-car lead for 8th place with the 191 new Corvettes sold in 2024. Just behind Rick in P9 is Bomnin West Kendall with 20 deliveries for the month of November and 187 total for 2024. And finally, Stonebriar Chevrolet delivered 19 cars in November and with 179 Corvettes sold during 2024, that’s still good for the final Top 10 Dealer position.",
    }
  ];

  return (

      <>   
      
      <div className="center">
        <div>

      <CarouselZR1 />
    </div>
    
    <NavbarVideos />
    
    <div className="center">

        <h1>    <b>Top Ten Chevrolet Dealers In America </b>  </h1>

        <br />


        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/toptendealers.png">
              <img src="/toptendealers.png" alt="Cinque Terre" width={200} height={200} />
            </a>
            <div className="desc">Corvette Blogger</div>
          </div>
        </div>
        <div className="center">
          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>



          <p> General Motors, Chevrolet, Corvette World Wide Sales, Has Limitations   </p>
          <p>Chevrolet manufacturers Right Hand Drive Corvette world wide</p>
          <p>DISCLAIMER: Chevrolet has limited the sales of the fantastic 2025 and newer Corvette ZR1 to ONLY United States, America.</p>

        </div>

        <div>

          <h3>
            <b> Reference </b>
          </h3>




          <Link to="https://www.midenginecorvetteforum.com/forum/purchasing-your-new-corvette/564439-top-10-corvette-dealers-%E2%80%93-2024-cytd-sales-through-november-30th       ">
            1. "Top Ten Dealers", Mid Engine Corvette Forum        </Link>



<Link to="    https://gmauthority.com/blog/2025/06/chevrolet-corvette-sales-numbers-figures-results-first-quarter-2025-q1/">
  2. "Corvette Sales Down, But Still Dominate Segment During Q1 2025", Gm Authority
</Link>

  

        </div>

        <Footer />
      </div>
      
      </div>
      </>
       
      
        );
}
