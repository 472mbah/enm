import React, { useState, useEffect } from 'react'
import '../../../styling/slider/index.css';
import pic1 from '../../../styling/backgrounds/pexels-photo-1.jpeg';
// src\styling\backgrounds\pexels-photo-1.jpeg
import pic2 from '../../../styling/backgrounds/pexels-photo-2.jpeg';
import pic3 from '../../../styling/backgrounds/pexels-photo-3.jpeg';
import pic4 from '../../../styling/backgrounds/pexels-photo-4.jpeg';
import pic5 from '../../../styling/backgrounds/pexels-photo-5.jpeg';
// src\styling\backgrounds\pexels-photo-1.jpeg


/**
 * @function Slider
 * This handles the Sliding functionality.
*/

export const Slider = ({ current, images, height }) => {

  const setInitialSlides = () => {
    let slides = []
    images.forEach((url, i)=>{
      slides.push(<SliderContent display={i==current} width={window.innerWidth} height={height} img_src={url}/>);
    })  
    setSlides(slides);
  }

  const [slides, setSlides] = useState([]);

  useEffect(()=>{
    setInitialSlides();
  }, [])
  
  const styles = { 
    transform: `translate(-${current*window.innerWidth}px, ${0}px)`, 
    transition: "1s",
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div id="slider-container"   >
      <div style={styles}>
      {slides}
      </div>
    </div>
  )
}


const SliderContent = ({ img_src, display, width, height }) => {
  return <img style={{display, width, height}} className="full-image" src={img_src}/> 
}




export default Slider


