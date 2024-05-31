import React from 'react'
import { useEffect } from 'react'
import logo from "../../assets/loggingIn.svg";
import spinner from "../../assets/loading-spinner.svg";
import { useNavigate } from 'react-router-dom';

const Loginloader = ({setIsLoader}) => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
          setIsLoader(false);
          navigate("/");  
        }, 3500);
    }, [])
  return (
    <div>
         <div className='w-100 vh-100 d-flex justify-content-center align-items-center p-3  '>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
            <img src={logo} alt="" />
            <img src={spinner} alt="" className='spinner' />
        </div>
    </div>
    </div>
  )
}

export default Loginloader