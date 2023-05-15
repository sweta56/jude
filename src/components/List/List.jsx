import React from 'react'
import "./List.scss"
import img4 from '../images/img4.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';
import img5 from '../images/img5.JPG';
import img6 from '../images/img6.JPG';
import img7 from '../images/img7.JPG';
import Card from '../Card/Card';

const List = () => {
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
        },{
          id : 5,
          img: img6,
          img2: img7,
          title: "Pants",
        }
      ]
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item}  key={item.id}/>
    ))}

    </div>
  )
}

export default List