import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok  } from 'react-icons/fa';
import illustration from '../../components/images/illustration.png';
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className='cu'>CONTACT US</h1>
      <div className="card-con">
        <div className="text">
        <p>You can contact us via our <br/>
          <b>Email:</b>  <span style={{ textDecoration: "underline" }}>judefashionindustry@gmail.com</span>
        </p>
        
        <div className="icons">
          <span> <p>Also through:</p>
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
        <div className="images">
          <img src={illustration} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Contact


