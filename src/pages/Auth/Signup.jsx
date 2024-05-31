import React from 'react'
import "../../Style/Signup.css"
import { Link } from "react-router-dom";
import HandSome from '../../assets/signup/handsomejohnny 2.svg'
import SignupComponent from '../../components/Signup/SignupComponent';
import "../../Style/Signup.css"

const Signup = () => {
  return (
    <div className='Signup-General-Div'>
      <div className='Signup-image'>
        <Link to="/" className="text-decoration-none"><p className='Signup-link-to-home'>AUTOSHINE</p></Link>
        <img src={HandSome} alt="" className='img-fluid object-fit-cover vh-100' style={{width:"100%"}}/>
      </div>
      <div className='Sign-component py-3'>
      <SignupComponent/>
      </div>
    </div>
  )
}

export default Signup;