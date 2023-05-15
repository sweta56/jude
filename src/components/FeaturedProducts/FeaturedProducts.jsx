import React, { useEffect, useState } from 'react'
import img4 from '../images/img4.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';
import img5 from '../images/img5.JPG';
import img6 from '../images/img6.JPG';
import img7 from '../images/img7.JPG';
import Card from '../Card/Card';
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id : 1,
      img: img4,
      img2: img2,
      title: "T-shirt & Pants",
      isNew:true,
    },
    {
      id : 2,
      img: img3,
      img2: img2,
      title: "T-shirt",
      isNew:true,
    },
    {
      id : 3,
      img: img7,
      img2: img6,
      title: "Pants",
    },{
      id : 4,
      img: img5,
      img2: img6,
      title: "Pants",
    }
    ,{
      id : 5,
      img: img6,
      img2: img7,
      title: "Pants",
    }
  ]
  // const [products, setProducts] = useState([])
  // useEffect(()=>{
  //    const fetchData= async()=>{
  //     try {
        
  //     } catch (error) {
        
  //     }
  //    }
  // },[])

  return (
    <div className='featuredProducts'> 
      <div className='top'>
        <h1>{type} products</h1>
      </div>
      <div className='bottom'>
        {data.map(item=>(
          <Card item = {item} key={item.id} />
       
       ))}
      </div>
    </div>
  )
}

export default FeaturedProducts