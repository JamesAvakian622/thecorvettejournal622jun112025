import React from "react";
import eray from "./eray.png";
import "./photos.css";
import Sting20 from "../imgs/Stingray/2.png";
import Sting21 from "../imgs/Stingray/3.png";
import Sting22 from "../imgs/Stingray/4.png";
import Sting23 from "../imgs/Stingray/00c.png";
import Sting24 from "../imgs/Stingray/00d.png";
import Sting25 from "../imgs/Stingray/00e.png";
import Sting26 from "../imgs/Stingray/00f.png";
import Sting27 from "../imgs/Stingray/00g.png";
import Sting30 from "../imgs/Stingray/orangesting.png";
import Sting31 from "../imgs/Stingray/redstingray.png";
import Sting32 from "../imgs/Stingray/sidedoor.png";
import Sting33 from "../imgs/Stingray/whitesstingray.png";

export default function photos1() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\ndiv.gallery100 {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery100:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery100 img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 100%;\n  }\n}\n\n.clearfix:after {\n  content:"";\n  display: table;\n  clear: both;\n}\n',
        }}
      />
      <h2 className="text">Responsive Image gallery100, click to open</h2>
    <h5>
        Resize the browser window to see the effect.</h5>
        
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting20}>
            <img src={Sting20} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">
            Chevrolet Corvette LT2 engine, click to zoomin or browser back for
            the gallery100.
          </div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting21}>
            <img src={Sting21} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img
              src="img_lights.png"
              alt="Northern Lights"
              width={600}
              height={400}
            />
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>

      <h2 className="text">Responsive Image gallery100, click to open</h2>
    <h5>
        Resize the browser window to see the effect.</h5>
        
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img
              src="img_lights.png"
              alt="Northern Lights"
              width={600}
              height={400}
            />
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>

      <h2 className="text">Responsive Image gallery100</h2>
    <h5>
        Resize the browser window to see the effect.</h5>
        
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img
              src="img_lights.png"
              alt="Northern Lights"
              width={600}
              height={400}
            />
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={eray}>
            <img src={eray} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06</div>
        </div>
      </div>

      <div className="clearfix" />
      <div style={{ padding: 6 }}>
        <p>
    Click Any Image for Full Size.
        </p>
        <p>
          You will learn more about media queries and responsive web design
          later in our CSS Tutorial.
        </p>
      </div>
    </>
  );
}
