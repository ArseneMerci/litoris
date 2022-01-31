import { useState } from "react";
import ContentZoom from 'react-content-zoom';

const ImageMagnifier=()=>{
  return(
    <ContentZoom zoomPercent={350}
             largeImageUrl="./images/1.jpeg"
             imageUrl="./images/1.jpeg"
             contentHeight={300}
             contentWidth={500} />
  );
};
export default ImageMagnifier;
