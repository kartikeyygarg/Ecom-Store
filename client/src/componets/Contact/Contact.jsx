import React from 'react'
import "./Contact.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your Email'/>
                <button>CONNECT</button>
            </div>
            <div className="icons">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact