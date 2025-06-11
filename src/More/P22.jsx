import React from "react";
import "../styles/photos.css";
import { Link } from "react-router-dom"
import Sting20 from '../Emelia/em1.png';
import Sting21 from '../Emelia/em2.png';
import Sting22 from '../Emelia/em4.png';
import Sting23 from '../Emelia/em5.png';
import Sting24 from '../Emelia/em6.png';
import Sting25 from '../Emelia/em7.png';
import Sting26 from '../Emelia/em8.png';
import Sting27 from '../Emelia/em9.png';
import Sting28 from '../Emelia/em10.png';
import Sting29 from '../Emelia/em11.png';
import Sting30 from '../Emelia/em12.png';
import Sting31 from '../Emelia/em13.png';
import Sting32 from '../Emelia/em12.png';
import Sting33 from '../Emelia/em13.png';


import Footer from "../Footer";
import CarouselZR1 from "../ZR1/CarouselZR1";
import NavbarVideos from "../NavbarVideos";
export default function PageZR1PhotoA() {

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\ndiv.gallery100 {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery100:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery100 img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 100%;\n  }\n}\n\n.clearfix:after {\n  content:"";\n  display: table;\n  clear: both;\n}\n',
        }}
      />
      <div className="photoalbum">

      <CarouselZR1 />


<NavbarVideos />


        {/* <br />     <br />    <br />     <br />    <br />     <br />       <br />     <br />  */}
        <h1 className="text">   <b>   Emelia Hartford Corvette ZR1 First Impressions     </b>     </h1>
        <h2 className="text"> Emelia's  ZR1 Photo Album</h2> <br />
        <p> Rated 5 out of 5 Stars,   The Corvette Journal </p> <br />
        <dir className="center">  
        <p>
          Emelia Hartford is a custom car builder, actress, and television host. She gained recognition for her performance car customization YouTube channel, which she launched in 2017. Before her YouTube success, she worked in the service induSty while taking small acting roles and documenting her car builds on Instagram.
          Her automotive career took off when Michelin invited her to a launch event, where she connected with other car influencers who encouraged her to start making videos. Since then, she has built one of the fastest Corvette C8s in the world, known as "Phoenix", which once held the quarter-mile record.
          Beyond cars, Hartford has acted in films like Gran Turismo, A California Christmas: City Lights, and That's Amor. She has also hosted and judged automotive shows, including Netflix’s Fastest Car and SEMA: Battle of the Builders.
        </p> </dir>
        <h1>   
        <Link to="https://www.ReturnToLife.store"> Emelia's Return To Life Store </Link>
</h1>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
              <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />

            </a>
          </div>
        </div>
        <h4>Click the images for 100% sizing.</h4>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting20}>
            <img src={Sting20} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
        </div>
        <p> ZR1 Sea Wolf Gray w Habanero Interior  </p>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting21}>
            <img src={Sting21} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">  She is satisfied! </div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting22}>
            <img src={Sting22} alt="Northern Lights" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">90 mph!</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting23}>
            <img src={Sting23} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">seconds later 143 mph</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting24}>
            <img src={Sting24} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">91 mpn on the curves</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting25}>
            <img src={Sting25} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">173 mph on the Staights</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting26}>
            <img src={Sting26} alt="Northern Lights" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting27}>
            <img src={Sting27} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting28}>
            <img src={Sting28} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting29}>
            <img src={Sting29} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting30}>
            <img src={Sting30} alt="Northern Lights" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting31}>
            <img src={Sting31} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting32}>
            <img src={Sting32} alt="Northern Lights" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting33}>
            <img src={Sting33} alt="Cinque Terre" width={"100%"} height={"100%"}
            />

          </a>
          <div className="desc">Corvette ZR1</div>
        </div>
      </div>

      <div>
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. "Hagerty, The LT6 A Landmark Achievement  </Link>
        <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. "Vette Vues Magazine</Link>

      </div>
      <Footer />

      {/* <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher />
            <OnPageZR1 />  <SidebarZR1 />
        </div> */}



    </>
  );
}
