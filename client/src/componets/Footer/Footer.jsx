import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Man</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>

        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
          Fashion e-commerce stores have revolutionized the way we shop for clothing and accessories. With just a few clicks, customers can explore a vast array of styles, brands, and trends from the comfort of their homes. These online platforms offer convenience, accessibility, and the ability to discover unique fashion pieces that may not be readily available in physical stores.
          </span>
        </div>

        <div className="item">
        <h1>Contact</h1>
          <span>
          Creating effective contact lines for an e-commerce page is crucial for building trust with your customers and ensuring they can easily reach out to you for questions, concerns, or support. 
          </span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">KARTIKEY'S STORE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved </span>
        </div>

        <div className="right">
          <img src="/img/down.png" alt="" />
        </div>

      </div>
      </div>
  )
}

export default Footer