import React, {useState} from "react";
import "../styles/photos.css";
import '../styles/Page.css';

import Sting20 from "../imgs/Stingray/StingBlack.png";
import Sting21 from "../imgs/Stingray/StingGray.png";
import Sting22 from "../imgs/Stingray/StingRed.png";
import Sting23 from "../imgs/Stingray/StingHysteria.png";
import Sting24 from "../imgs/Stingray/StingOrange.png";
import Sting25 from "../imgs/Stingray/StingRBlue.png";
import Sting26 from "../imgs/Stingray/StingRedMist.png";
import Sting27 from "../imgs/Stingray/StingRapidBlue.png";
import Sting28 from "../imgs/Stingray/StingYellow.png";
import Sting29 from "../imgs/Stingray/StingWhite.png";
import Sting30 from "../imgs/Stingray/2020.png";
import Sting31 from "../imgs/Stingray/redstingray.png";
import Sting32 from "../imgs/Stingray/stingwht1.png";
import Sting33 from "../imgs/Stingray/whitesstingray.png";
import Sting34 from '../imgs/Stingray/2020.png';
import Sting35 from '../imgs/Stingray/redstingray.png';
import Sting36 from '../imgs/Stingray/stingwht1.png';
import Sting37 from '../imgs/Stingray/whitesstingray.png';

import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
import SidebarSting1 from "./SidebarSting1";
import styled from 'styled-components';


const CarouselWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

// const Slide = styled.div`
//   text-align: center;
//   padding: 20px;
//   img {
//     width: 100%;
//     border-radius: 10px;
//   }
// `;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 1540%;
 max-width: o00px;
  cursor: pointer;
  margin-left: 10%;
  z-index: 9;
`;
const ImageItem2 = styled.div`
color: white;
  margin-top: 254px;
  margin-left: -5%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenImage = styled.img`
  max-width: 110%;
  max-height: 110%;
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };


export default function PageStingPhotoA() {

 const [selectedImage, setSelectedImage] = useState(null);

const jsonDataArray = [
  {id: 1, src: Sting20, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 2, src: Sting21, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 4, src: Sting22, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 5, src: Sting23, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 6, src: Sting24, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 7, src: Sting25, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 8, src: Sting26, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 9, src: Sting27, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 10, src: Sting28, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 11, src: Sting29, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 12, src: Sting30, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 13, src: Sting31, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 14, src: Sting32, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 15, src: Sting33, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 16, src: Sting34, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 17, src: Sting35, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 18, src: Sting36, alt: 'Image 1', title: 'Corvette Z06'},
  {id: 19, src: Sting37, alt: 'Image 1', title: 'Corvette Z06'}
];

 
const slides = [
  {id: 1, image: 'https://via.placeholder.com/400', title: 'Slide 1'},
  {id: 2, image: 'https://via.placeholder.com/400', title: 'Slide 2'},
  {id: 3, image: 'https://via.placeholder.com/400', title: 'Slide 3'},
];


  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\ndiv.gallery100 {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery100:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery100 img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 100%;\n  }\n}\n\n.clearfix:after {\n  content:"";\n  display: table;\n  clear: both;\n}\n',
        }}
      />



<br /><br /><br /><br /><br />
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting1 />
        </div>

        <div className="col-6">   

      <div className="photoalbum">
        <h1 className="text"><b> The 2025 Corvette Stingray  Photo Album  </b>     </h1>

     <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/stingraylogo.png">
            <img
              src="/stingraylogo.png"
              alt="Cinque Terre"
              width={400}
              height={200}
            />
          </a>
        </div>
      </div>
      
      {/* <h2> <p> Stingray Navigation</p>   </h2> */}






   <h4>Click the images for 100% sizing.</h4>



{
  /*  Start Photo Display  */
}

<div className="center">
  {selectedImage &&
    <Overlay onClick={() => setSelectedImage (null)}>
      <FullscreenImage src={selectedImage} alt="Fullscreen View" />
    </Overlay>}

  <GridContainer>
    {jsonDataArray.map (image => (
      <React.Fragment key={image.id}>
        <ImageItem
          src={image.src}
          alt={image.alt}
          onClick={() => setSelectedImage (image.src)}
        />
        <ImageItem2>{image.title}</ImageItem2> {/* Corrected syntax */}
      </React.Fragment>
    ))}
  </GridContainer>
</div>


{/* <div className="center">
  {selectedImage &&
    <Overlay onClick={() => setSelectedImage (null)}>
      <FullscreenImage src={selectedImage} alt="Fullscreen View" />
    </Overlay>}

  <GridContainer>
    {jsonDataArray.map ((image) => (
      <>
      <ImageItem
        key={image.id}
        src={image.src}
        alt={image.alt}
        onClick={() => setSelectedImage(image.src)} />

    <ImageItem2  {image.title}   />
        </>
    ))}
  
  </GridContainer>
</div> */}

{
  /* End Photo Display */
}


</div>

   <Footer />

      </div>
   </div>

    </>
  );
}
