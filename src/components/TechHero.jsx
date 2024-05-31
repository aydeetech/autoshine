import React from 'react';
import "../styles/TechHero.css"
import ManCarWash from "../assets/ManCar-wash.png"

const TechHero = () => {
  return (
    <section className='container techSection d-lg-flex d-md-flex align-items-center gap-2 '>
        <div className='text'>
            <h1>People who made <br/><span>it Happen</span></h1>
            <p>
                We understand the importance of a clean and healthy environment. 
                Whether it's your home, office, or any other space, maintaining
                cleanliness is vital for your well-being and productivity.
            </p>
            <button className='btn btn-primary' style={{background:"#005BBA"}}>Book a Wash</button>
        </div>

        <div className='img-cover'>
          <img src={ManCarWash} alt="" className='image' />
          <div className='nothing'></div>
        </div>
    </section>
  )
}

export default TechHero