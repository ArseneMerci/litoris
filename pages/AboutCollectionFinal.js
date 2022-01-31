import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const AboutCollectionFinal = () => {
  return (
    <div className="-mx-12 pl-2">
      <Slide easing="ease" duration={5000}>
        <div className="each-slide">
          <div>
            <h1 className="text-yellow-50 font-bold" style={{fontSize:"2vw"}}>OUR STEPS</h1>
          <br />

          <ul className="list-disc leading-relaxed text-yellow-50 text-left ml-8 pl-8" style={{fontSize:"1.5vw"}}>
            <li>Track down and understand Client's requirements</li>
            <li>
              Plan and recommended customized solutions on each design
              requested.
            </li>
            <li>
              Be determined, always looking straight to pursuit ambitious goals{" "}
            </li>
          </ul>
          </div>
        </div>
        <div className="each-slide">
          <div>
          <h1 className="text-yellow-50 font-bold" style={{fontSize:"2vw"}}>
            OUR MISSION
          </h1>
          <br />

          <ul className="leading-relaxed text-yellow-50 text-left ml-8 pl-8" style={{fontSize:"1.5vw"}}>
            <li>
              ❖ To create values African fabrics to an international market and
              make a difference
            </li>
            <li>
              ❖ To promote emerging designers and re-launching of established
              brands
            </li>
            <li>
              ❖ To inspire moments of optimism, joy and happiness in Fashion
              Design
            </li>
          </ul>
          </div>
        </div>
        <div className="each-slide">
          <div>
          <h1 className="text-yellow-50 font-bold" style={{fontSize:"2vw"}}>OUR VISION</h1>
          <br />

          <ul className="leading-relaxed text-yellow-50 text-left ml-8 pl-8" style={{fontSize:"1.5vw"}}>
            <li>
              ❖ To be a leading Fashion House with creative designs that defines
              the uniqueness of African fabrics
            </li>
            <li>
              ❖Connecting people around the World to enjoy African Fabrics
            </li>
            <li>❖ Helping people to realize their dreams in fashion</li>
          </ul>
          </div>
        </div>
        <div className="each-slide">
          <div>
          <h1 className="text-yellow-50 font-bold" style={{fontSize:"2vw"}}>
            OUR PHILOSOPHY
          </h1>
          <br />

          <ul className="list-disc leading-relaxed text-yellow-50 text-left ml-8 pl-8" style={{fontSize:"1.5vw"}}>
            <li>Be creative and innovative: coming up with new ideas</li>
            <li>Be Passionate and motivated: committed in heart and mind</li>
            <li>
              Be determined, always looking straight to pursuit ambitious goals
            </li>
            <li>Excellence is the quality of our products and services</li>
          </ul>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default AboutCollectionFinal;
