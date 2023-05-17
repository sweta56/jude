import React from "react";
import { useState, useEffect } from "react";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {error ? (
            "Something went wrong!"
          ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
            <h1>{data?.attributes?.title}</h1>
            <p>{data?.attributes?.desc}</p>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;