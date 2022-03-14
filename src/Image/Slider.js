import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.css"

const handleOnDragStart = e => e.preventDefault();

function Slider() {
  return (
    <div className="slider">
      <AliceCarousel className="class">
        <div>
          <img
            src="http://placekitten.com/200/300"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="/"
          />
        </div>
        
        <img
          src="http://placekitten.com/200/304"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
        />
        <img
          src="http://placekitten.com/200/301"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
          alt="/"
        />
        <img
          src="http://placekitten.com/200/302"
          onDragStart={handleOnDragStart}
          className="yours-custom-class"
          alt="/"
        />
      </AliceCarousel>
    </div>
  );
}

export default Slider;
