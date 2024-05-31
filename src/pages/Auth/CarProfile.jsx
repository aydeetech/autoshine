import React, {useState} from 'react'
import '../../Style/carProfile.css'
import { Link } from "react-router-dom";
import Alexey from '../../assets/signup/Alexey_Komissarov_a_girl_in_a_black_polo_and_a_black_cap_washes_5c8bb1d8-d756-49c3-a204-c1c1bdf0c5fe 1.svg'
import CarProfileComponent from '../../components/Signup/CarProfileComponent';
import Onboard from '../../components/Modals/Onboard';

const CarProfile = () => {
  const [onboard, setOnboard] = useState(false)
  return (
    <>
    {onboard && <Onboard setOnboard={setOnboard}/>}
    <div className='carProfile-General-Div'>
      <div className='carProfile-image'>
        <Link to="/" className="text-decoration-none"><p className='carProfile-link-to-home'>AUTOSHINE</p></Link>
        <img src={Alexey} alt="" className='img-fluid' style={{width:"100%"}}/>
      </div >
      <div className='carProfile-component'>
      <CarProfileComponent setOnboard={setOnboard}/>
      </div>
    </div>
    </>
  )
}

export default CarProfile;