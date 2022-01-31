import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const Collections = () => {
  return (
    <div>
      <Slide easing="ease" duration={1500}>
        <div className="each-slide">
          <div>
            <span>Ifeza Collection</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Kitenge Collection</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Mwiza Collection</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Umubavu Collection</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Umuti Collection</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Umugongo Collection</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Collections;
