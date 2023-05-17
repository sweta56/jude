import React from 'react'
import "./List.scss"
import useFetch from "../../hooks/useFetch";
import Card from '../Card/Card';

const List = (catId) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}`
    );
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List