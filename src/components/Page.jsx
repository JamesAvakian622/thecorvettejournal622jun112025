// src/components/Page.js
import React from "react";
import ImageCarousel from "./Carousel";

const Page = ({ title, images }) => (
  <div className="page">
    <h2>{title}</h2>
    <div className="carousel-container">
      <div className="left-carousel">
        <ImageCarousel images={images.left} />
      </div>
      <div className="top-carousel">
        <ImageCarousel images={images.top} />
      </div>
      <div className="right-carousel">
        <ImageCarousel images={images.right} />
      </div>
    </div>
  </div>
);

export default Page;
