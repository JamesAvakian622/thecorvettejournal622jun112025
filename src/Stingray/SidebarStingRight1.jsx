import { Link } from "react-router-dom";

export default function SidebarStingRight1() {
  return (
 
       <ul style={{ listStyleType:"none" }}>
      <p>
          <Link to="/Stingray/PageSting" alt="">
            Corvette Introduction
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingBrand" alt="">
            The Stingray Sports Car
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingExt" alt="">
            Stingray Exterior
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingInt" alt="">
            Stingray Interior
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingLT2" alt="">
            Stingray LT2 Engine
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingOptions" alt="">
            Stingray Options
          </Link>
      </p>
      <p>
          <Link to="/PageStingZ51" alt="">
            Stingray z51
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingSpecs" alt="">
            Stingray Specifications
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingYear" alt="">
            ZR1 Year Model
          </Link>
      </p>

      <p>
          <Link to="/Stingray/PageStingSound" alt="">
            Stingray Sound
          </Link>
      </p>
      <p>
          <Link to="/Stingray/PageStingVideos" alt="">
            Stingray Videos
          </Link>
      </p>
    
 
  );
}
