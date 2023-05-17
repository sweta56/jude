import React,{useEffect} from 'react';
import './About.scss';
import img4 from "../../components/images/img4.JPG"

const About = () => {
  const data=[img4]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h2>ABOUT US</h2>
    <div className="about-us">
    <div className="content">
      <div className="text">
        <h1>JUDE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id feugiat quam. Nunc sit amet massa sit amet nulla pharetra commodo sed a nibh. Nullam id libero malesuada, dignissim tellus ut, gravida est. Sed bibendum justo sed tellus finibus malesuada.</p>
      </div>
      <div className="image-about">
        <img src={data[0]} alt="" />
      </div>
    </div>
  </div>
  </div>
  );
};

export default About;
