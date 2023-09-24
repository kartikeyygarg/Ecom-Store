import React from 'react'
import Slider from '../../componets/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../componets/FeaturedProducts/FeaturedProducts'
import Categories from '../../componets/Categories/Categories'
import Contact from '../../componets/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
      
    </div>
  )
}

export default Home