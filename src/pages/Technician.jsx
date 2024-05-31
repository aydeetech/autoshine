import React from 'react';
import TechHero from '../components/TechHero'
import MeetUs from '../components/MeetUs'
import Pastwork from '../components/PastWork/Pastwork';


const Technician = () => {
  return (
    <div className='cont'>
        <TechHero/>
        <MeetUs/>
        <Pastwork/>
    </div>
  )
}

export default Technician 
