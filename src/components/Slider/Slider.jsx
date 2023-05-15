import React, { useState } from "react";
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import img4 from '../images/img4.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [img4,img2,img3]


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      {/* <div className="container" >
        <img src={img4} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" /> */}
        {/* <button className="explore-button">Explore Now</button> */}
        <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
      </div>
  );
};

export default Slider;