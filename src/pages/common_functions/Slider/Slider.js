import React, { useState } from 'react'
import '../../../styling/slider/index.css';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
]

/**
 * @function Slider
 * This handles the Sliding functionality.
*/

export const Slider = () => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    x: 0,
    y: 0
  })

  const [current, setCurrent] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const { translate, transition } = state

  let slides = []
  images.forEach((url, i)=>{
    slides.push(<SliderContent display={i==current} width={getWidth()} img_src={url}/>);
  })
  
  const styles = { 
    transform: `translate(-${x}px, ${y}px)`, 
    // padding:"100px",
    display: "flex",
    flexDirection: "row",
    // overflow: "hidden",
    // height: "100%",
    objectFit: "fill"     
  };

  const handle_click = () => {
      setCurrent((current+1)%(images.length-1));
      console.log(current)
      setX(current * getWidth());
  }

  return (
    <div id="slider-container" onClick={()=>handle_click()}  >
      <div style={styles}>
      {slides}
      </div>
    </div>
  )
}


const SliderContent = ({ img_src, display, width }) => {
  return <img style={{display, width}} className="full-image" src={img_src}/> 
}




export default Slider