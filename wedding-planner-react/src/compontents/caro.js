import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CaroComponent() {
  return (
    <div class="slider-container">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        className="carousel-style"
      >
        <div className="slider-item-div">
          <img src="../img9.jpg" />
        </div>
        <div className="slider-item-div">
          <img src="../img5.jpg" />
        </div>

        <div className="slider-item-div">
          <img src="../image15.jpg" />
        </div>

        <div className="slider-item-div">
          <img src="../img3.jpg" />
        </div>
        <div className="slider-item-div">
          <img src="../img4.jpg" />
        </div>

        <div className="slider-item-div">
          <img src="../image10.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
