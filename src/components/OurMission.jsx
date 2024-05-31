import React from 'react'
import "../styles/OurMission.css"
import AboutSection from "../assets/aboutSectionBg.png"
const OurMission = () => {
  return (
    <div className='about-section'>
        <h3 className='text-center text-primary'>Our Mission, Values, Services</h3>
        <div className="mission-cover d-flex align-items-center gap-3">
            <div className="mission">
                <p>
                    <span className='text-primary'>Mission</span>:
                    Mission: Our mission is simple - to deliver an unparalleled car 
                    care experience that exceeds our customers' expectations. 
                    We aim to enhance the longevity and aesthetics of every vehicle that 
                    passes through our wash bays while minimizing our environmental impact.
                </p>
            </div>
            <div className="Services">
                <p>
                    <span className='text-primary'>Services</span>:
                    Discover a range of services designed to pamper your 
                    vehicle, from meticulous hand washes to advanced detailing packages. 
                    Our skilled team uses cutting-edge technology and premium products 
                    to give your car the care it deserves.
                </p>
            </div>
        </div>
        <img src={AboutSection} alt="" className='about-img w-100'/>
    </div>
  )
}

export default OurMission