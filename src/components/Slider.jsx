import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import {ApiSlides} from '../componentApi/SliderApi';
import scrollimg from '../assets/scrollimg.png'
import sliderimg from '../assets/sliderimg2.png'



const Slider = () => {
  // Styles
  const slideStyle = "slide flex  h-[100%]";
  const arrowStyle = "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div className="slider h-[540px] bg-white flex items-center justify-between mobile:hidden">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (<>
            <div className={`wrapper flex justify-center items-end  w-[100%] h-[500px] shadow-2xl  rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative`} key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                <img src={sliderimg}  />
              </div>
              </div>
              <Link to='/collection' className="bg-blue-600 absolute pl-5 pr-5 text-2xl   font-bold font-sans  border-white border-4 text-white mb-5 bg-transparent ">
              <button >SHOP NOW</button>
             </Link>
           </div>
           </>
              
              
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;
