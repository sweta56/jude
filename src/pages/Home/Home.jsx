import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Desc from '../../components/Description/Desc'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Desc/>
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home