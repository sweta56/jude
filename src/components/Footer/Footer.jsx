import React from "react";
import { FaFacebook, FaInstagram, FaTiktok  } from 'react-icons/fa';

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
        <h1>CONTACT US</h1>
         <span> <b style={{color: "black"}}> Head Office:</b> </span>
          <span> <b style={{color: "black"}}>Email :</b> judefashionindustry@gmail.com</span>
          
          <div className="icons">
          <span>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram  size={30} color="black"  />
          </a>
            <a href="https://www.facebook.com/your-facebook-page-link">
              <FaFacebook size={30} color="black" />
            </a>
            <a href="https://www.tiktok.com/your-tiktok-page-link">
              <FaTiktok size={30} color="black" />
            </a>
          </span>
        </div>

        </div>
        <div className="item">
          <h1>CATEGORIES</h1>
          <span> <a href="/products/1">New Arrivals</a></span>
          <span> <a href="/products/1">Men</a></span>
        </div>
        <div className="item">
          <h1>WHERE ARE WE SHIPPING TO?</h1>
          <span>Nepal </span>
        </div>
        <div className="item">
          <h1>ABOUT US</h1>
          <span> <a href="/about">Our Mission</a></span>
          <span> <a href="/contact">Contact</a></span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Jude</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;