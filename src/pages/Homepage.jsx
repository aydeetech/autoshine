import React from 'react'
import Hero from '../components/HomePageComponent/Hero.jsx'
import Hero2 from '../components/HomePageComponent/Hero2.jsx'
import Hero3 from '../components/HomePageComponent/Hero3.jsx'
import Newsletter from '../components/Newsletter/Newsletter.jsx'

const Homepage = () => {
  return (
    <div className='cont'>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Newsletter />
    </div>
  )
}

export default Homepage