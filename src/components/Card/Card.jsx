import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New!</span>}
          <img
            src={item.img}
            alt=""
            className="mainImg"
          />
          <img
            src={item.img2}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
      </div>
    </Link>
  );
};

export default Card;