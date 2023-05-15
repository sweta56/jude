import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./Products.scss";

const Products = () => {
  const catID = parseInt(useParams().id)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products">
      <div className="left">
        <h2>Products Available</h2>
      </div>
        <div className="right">
          <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <List catID={catID}/>
        </div>
    </div>
  )
}

export default Products