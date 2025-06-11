import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "../styles/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer";
import CarouselEray from "./CarouselEray";



// 
const CarouselWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Slide = styled.div`
  text-align: center;
  padding: 20px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
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
  max-width: 90%;
  max-height: 90%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function PageErayPhotoA() {
  const [selectedImage, setSelectedImage] = useState(null);


  const jsonDataArray = [
    {
      "id": 1,
      "src": "/eray000.png",
      "alt": "Image 1"
    },
    {
      "id": 2,
      "src": "/eray001.png",
      "alt": "Image 2"
    },
    {
      "id": 3,
      "src": "/eray002.png",
      "alt": "Image 3"
    },
    {
      "id": 4,
      "src": "/eray003.png",
      "alt": "Image 4"
    },
    {
      "id": 5,
      "src": "/eray004.png",
      "alt": "Image 5"
    },
    {
      "id": 6,
      "src": "/eray005.png",
      "alt": "Image 6"
    },
    {
      "id": 7,
      "src": "/eray006.png",
      "alt": "Image 7"
    },
    {
      "id": 8,
      "src": "/eray007.png",
      "alt": "Image 8"
    },
    {
      "id": 9,
      "src": "/e8.png",
      "alt": "Image 9"
    },
    {
      "id": 10,
      "src": "/e9.png",
      "alt": "Image 10"
    },
    {
      "id": 11,
      "src": "/e10.png",
      "alt": "Image 11"
    },
    {
      "id": 12,
      "src": "/e11.png",
      "alt": "Image 12"
    },
    {
      "id": 13,
      "src": "/e12.png",
      "alt": "Image 13"
    },
    {
      "id": 14,
      "src": "/e0.png",
      "alt": "Image 14"
    },
    {
      "id": 15,
      "src": "image15.jpg",
      "alt": "Image 15"
    },
    {
      "id": 16,
      "src": "image16.jpg",
      "alt": "Image 16"
    }
  ]
  const slides = [
    { id: 1, image: "https://via.placeholder.com/400", title: "Slide 1" },
    { id: 2, image: "https://via.placeholder.com/400", title: "Slide 2" },
    { id: 3, image: "https://via.placeholder.com/400", title: "Slide 3" }
  ];

  // useEffect(() => {
  //   fetch("/carouselData.json") // Adjust path as needed
  //     .then(response => response.json())
  //     .then(data => setSlides(data))
  //     .catch(error => console.error("Error loading JSON:", error));
  // }, []);


  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\ndiv.gallery {\n  border: 1px solid #ccc;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 80%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.responsive {\n  padding: 0 6px;\n  float: left;\n  width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n  .responsive {\n    width: 49.99999%;\n    margin: 6px 0;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .responsive {\n    width: 80%;\n  }\n}\n\n.clearfix:after {\n  content:"";\n  display: table;\n  clear: both;\n}\n',
        }}
      />


      <div className="photoalbum">
        <br />     <br />    <br />     <br />    <br />     <br />

        <h1 className="text"><b>             2025 Corvette E-Ray   Photo Album   </b>    </h1>

        <div className="center">
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/eraylogo.png">
              <img src="/eraylogo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />

            </a>
          </div>
        </div>
        <p> Corvette Stingray Logo   </p>
      </div>


      <h4>Click the images for 100% full Screen PHotography.</h4>

  {/*  Start Photo Display  */}


      <div className="center">
        {selectedImage && (
          <Overlay onClick={() => setSelectedImage(null)}>
            <FullscreenImage src={selectedImage} alt="Fullscreen View" />
          </Overlay>
        )}

        <GridContainer>
          {jsonDataArray.map((image) => (
            <ImageItem
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </GridContainer>
      </div>

 {/* End Photo Display */}

      <div className="references">
            <h1>References</h1>
            <Link to=" https://www.chevrolet.com/performance/corvette">   1. Chevrolet.com, "Colors That Capitave, The Stingray". </Link>
          </div>

      <div className="clearfix" />
      <div style={{ padding: 6 }}>
        <p>
          For full size display, click any image, now!
        </p>
        <p>
          You will learn more about media queries and responsive web design
          later in our CSS Tutorial.
        </p>
      </div>
      <Footer />
      </div>
    </>
  );
}
