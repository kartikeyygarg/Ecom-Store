import React from 'react'
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            <img src={"http://localhost:1337"+item.attributes?.img?.data?.attributes?.url} alt='' />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>₹{item.oldPrice || item?.attributes.price+400}</h3>
            <h3>₹{item?.attributes.price}</h3>
        </div>
    </div>

    </Link>
  )
}

export default Card