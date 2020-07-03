import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
  return (
    <div className="slider-container">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        className="carousel-style"
      >
        <div className="slider-item-div">
          <img src="../img16.jpg" />
        </div>
        <div className="slider-item-div">
          <img src="../img11.jpg" />
        </div>
        <div className="slider-item-div">
          <img src="../img14.jpg" />
        </div>
        <div className="slider-item-div">
          <img src="../image4.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
