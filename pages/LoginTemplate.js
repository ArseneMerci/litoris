import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const LoginTemplates = () => {
  return (
    <div className="-mx-12 pl-2">
      <Fade easing="ease" duration={500} autoplay={true} arrows={false}>
        <div className="each-slide">
          <img src="./images/login.jpg" alt=""/>
        </div>
        <div className="each-slide">
          <img src="./images/3.jpeg" alt=""/>
        </div>
        </Fade>
    </div>
  );
};
export default LoginTemplates;
