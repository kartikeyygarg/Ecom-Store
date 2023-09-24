import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const [open,setOpen] = useState(false)   
//   console.log("checking state ", state)
  const products = useSelector(state=>state.cart.products) 

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>

        <div className="item">
            <span>IND</span>
            <ExpandMoreIcon/>
        </div>

        <div className="item">
            <Link className="link" to="/products/1">WOMEN</Link>
        </div>

        <div className="item">
            <Link className="link" to="/products/2">MAN</Link>
        </div>

        <div className="item">
            <Link className="link" to="/products/3">CHILDREN</Link>
        </div>

</div>
        <div className='center'>
            <Link className="link" to="/">KARTIKEY'S STORE</Link>
        </div>
        <div className='right'>
            
        <div className='item'>
            <Link className="link" to="/">HOME PAGE</Link>
        </div>
        
        <div className='item'>
            <Link className="link" to="/">ABOUT</Link>
        </div>
        
        <div className='item'>
            <Link className="link" to="/">CONTACT</Link>
        </div>
        
        <div className='item'>
            <Link className="link" to="/">STORES</Link>
        </div>
        <div className="icons">
        <SearchIcon/>
        <PersonOutlineIcon/>
        <FavoriteBorderIcon/>
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartIcon/>
            <span>{products.length}</span>
        </div>
        </div>

        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar