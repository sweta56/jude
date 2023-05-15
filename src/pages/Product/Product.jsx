import React,{useEffect} from 'react'
import "./Product.scss";
import {useState} from 'react'
import img4 from "../../components/images/img4.JPG"
import img2 from "../../components/images/img2.JPG"

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImg,setSelectedImg]= useState(0);
  const images =[img4,img2];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
         <h1>Half Sleeve T-shirt</h1>
          <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
        <img src={images[selectedImg]} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Product
