import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="/img/sale.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="/img/women.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">WOMAN</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="/img/new.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">NEW SEASON</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="/img/men.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">MAN</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="/img/access.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">ACCESSORIES</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="/img/shoes.jpg" alt="" />
                <button>
                    <Link className="link" to="/products/1">SHOES</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories