import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import useFetch from '../../hooks/useFetch';
import './Products.scss';

const Products = () => {
  const location = useLocation();
  const { data, loading, error } = useFetch(`/products?populate=*`);

  // Filter the data based on query parameters
  const isNewItems = new URLSearchParams(location.search).get('isNew') === 'true';
  const filteredData = data?.filter(item => isNewItems ? item.attributes.isNew : true);

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
        <div className="bottom">
          {error ? (
            "Something went wrong!"
          ) : loading ? (
            "Loading"
          ) : (
            filteredData?.map(item => <Card item={item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
