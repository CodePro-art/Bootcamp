import React from 'react';
import cFire from './images/img_fire_color.jpg';
import cBird from './images/img_bird_color.jpg';
import bwFire from './images/img_fire_bw.jpg';
import bwBird from './images/img_bird_bw.jpg';
import './ImageToggle.css';

export default function ImageToggle() {

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);

  const changeSource = (ref) => {
    switch(ref.current.alt){
      case "bwBird":
        ref.current.alt = "cBird";
        ref.current.src = cBird;
        break;
      case "bwFire":
        ref.current.alt = "cFire";
        ref.current.src = cFire;
        break;
      case "cBird":
        ref.current.alt = "bwBird";
        ref.current.src = bwBird;
        break;
      case "cFire":
        ref.current.alt = "bwFire";
        ref.current.src = bwFire;
        break;
      default:
    }
  } 

  return (
    <div className="image-toggle-container">
      <div className="rainbow-wrapper">
        <h1 className="gradient-text">Black and White</h1>
        <h2 className="gradient-text">Hover the images to invoke colors</h2>
        <p className="gradient-text">This app implements react ref system</p>
      </div>
      
      <div className="image-container">
        <img className="img-bw-c" src={bwBird} ref={ref1} alt="bwBird" 
          onMouseEnter={() => changeSource(ref1)}  
          onMouseLeave={() => changeSource(ref1)}/>
        <img className="img-bw-c" src={bwFire} ref={ref2} alt="bwFire"
          onMouseEnter={() => changeSource(ref2)}  
          onMouseLeave={() => changeSource(ref2)}/>
      </div>
      
    </div>
  )
}
