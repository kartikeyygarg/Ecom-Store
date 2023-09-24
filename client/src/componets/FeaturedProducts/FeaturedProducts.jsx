import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

  const {data,loading,error}= useFetch(`/products?populate=*&[filters][type][$eq]=${type}`
  );  

  return (
    <div className='featuredProducts'>

        <div className="top">
            <h1>{ type } products</h1>
            <p>
            Our e-commerce platform offers a wide array of products catering to all your needs, from fashion to electronics, home decor to fitness essentials, and so much more. With a commitment to quality and customer satisfaction, we curate a meticulously selected range of products from trusted brands and vendors. 
            </p>
        </div>
        <div className="bottom">
            {error ?"Something went Wrong!":
            (loading ? "loading"
            :data?.map((item)=> <Card item={item} key={item.id}/> ))}
        </div>
    </div>
  )
}

export default FeaturedProducts