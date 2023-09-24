import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Slider.scss";

const Slider = () => {

const [currentSlide, setCurrentSlide] =useState(0)

const prevSlide= ()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev - 1);
};
const nextSlide= ()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1);
};


  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src="/img/suit1.jpg" alt="" />
            <img src="/img/suit2.jpg" alt="" />
            <img src="/img/suit3.jpg" alt="" />
        </div>
        <div className="icons">
        
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>

            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>

        </div>
    </div>
  )
}

export default Slider