import React, { useState } from 'react'
import LovedByManyImg from '../../assets/ManCar.png'
import Hero3Component from './Hero3Component'
import "../../Style/Home/Hero3.css";
import FAQ from './FAQ'
import FAQimage from '../../assets/FAQImg.svg'
import Pastwork from '../PastWork/Pastwork';

const Hero3 = () => {


  return (
    <div className=''>
        <div>
          <Pastwork />
            <div className='pe-lg-5 px-md-4 d-flex justify-content-between align-items-center home-testimonials' style={{maxWidth: "1600px", margin: "auto"}}>
                <img src={LovedByManyImg} alt="" className='testimonial-img d-none d-lg-block  object-fit-cover' style={{width:"37rem"}}/>
                <Hero3Component/>
            </div>

            <div className='p-4 d-lg-flex align-items-center position-relative justify-content-between gap-3 ' style={{maxWidth: "1600px", margin: "auto"}}>
                <FAQ/>
                <img src={FAQimage} alt="" className='FAQ-image align-self-end d-none d-lg-block   w-50'/>
            </div>

        </div>
    </div>
  )
}

export default Hero3