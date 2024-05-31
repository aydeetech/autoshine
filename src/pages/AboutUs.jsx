import React from 'react';
import "../styles/About.css"
import Polygon from "../assets/Group.png";
import AboutSection from "../assets/aboutSectionBg.png"
import Whyus from '../components/whyus/Whyus';
import Vector1 from '../assets/images/Vector1.png'

const AboutUs = () => {
  return (
   <>
    <section className='about-section'>
       <div className="about-hero container d-lg-flex justify-content-between gap-5 align-items-center ">
          <div className="about-text ">
             <span>At Autoshine</span>
             <h2>We Make your car shine</h2>
             <p>
                We understand the importance of a clean and healthy environment.
                 Whether it's your home, office, or any other space, 
                 maintaining cleanliness is vital for your well-being and productivity.
              </p>
              {/* <> */}
                 <button className='btn btn-primary aboutHero-button' style={{background:"#005BBA"}}>Book a Wash</button>
              {/* </> */}
          </div>
          <div className="about-img ">
            <img src={Polygon} alt="" className=' img-fluid'/>
          </div>
       </div>
    </section>
    <div className='about-mission mt-5'>
        <h3 className='text-primary container '> <img src={Vector1} alt="" width={40} height={30} align-items-center/> Our Mission, Values, Services</h3>
        <div className="mission-cover container d-lg-flex align-items-center gap-lg-3">
            <div className="mission same">
                <p>
                    <span className='spanSame text-primary'>Mission</span>:
                    Our mission is simple - to deliver an unparalleled car 
                    care experience that exceeds our customers' expectations. 
                    We aim to enhance the longevity and aesthetics of every vehicle that 
                    passes through our wash bays while minimizing our environmental impact.
                </p>
            </div>
            <div className="Services same">
                <p>
                    <span className='spanSame text-primary'>Services</span>:
                    Discover a range of services designed to pamper your 
                    vehicle, from meticulous hand washes to advanced detailing packages. 
                    Our skilled team uses cutting-edge technology and premium products 
                    to give your car the care it deserves.
                </p>
            </div>
        </div>
        <img src={AboutSection} alt="" className='about-img2 w-100'/>
    </div>
    <section className='container d-lg-flex gap-5 mt-4 w-100 list-section'>
       <div className="values">
         <h3 className='text-primary'>Values</h3>
         <ul>
            <li>
                Quality: We adhere to the highest standards of quality in 
                every service we offer.
            </li>
            <li> 
                Customer Focus: Your satisfaction is our priority, 
                and we strive to tailor our services to meet your unique needs.
            </li>
            <li>
                 Integrity: Transparency and honesty are at the core of our 
                 operations.
            </li>
            <li>
                 Environmental Responsibility: We employ eco-friendly practices 
                 to ensure a sustainable future for generations to come.
            </li>
         </ul>
       </div>
       <div className='why-us'>
          <h3 className='text-primary Vw'>Why Us ?</h3>
          <ul className='align-items-center '>
            <li>We have an experienced and Professional Team</li>
            <li>We have been able to acquire some of the best state-of-the-Art Facilities</li>
            <li>Our services are customized to suit your preferences</li>
            <li>Eco-Friendly Practices</li>
            <li>Competitive Pricing</li>
          </ul>
       </div>
    </section>
    <Whyus/>
   </>
    
  )
}

export default AboutUs