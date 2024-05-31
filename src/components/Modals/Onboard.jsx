import React from 'react'
import OnboardImg from "../../assets/onboard.svg"
import complete from "../../assets/complete.svg"
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Onboard = ({setOnboard}) => {
  const container = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
         
            setOnboard(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [setOnboard])
  return (
    <div className='position-absolute '><div className=" position-fixed w-100 vh-100 top-0 left-0 d-grid logout-container ">
    <div className="logout-wrapper onboard-wrapper mt-5 d-grid bg-white shadow-lg " ref={container}>
      <div className="d-flex flex-column gap-2 align-items-center">
        <div className='d-flex gap-5'>
          <div className='d-flex flex-column complete align-items-center'>
            <img src={complete} alt="" />
            <p>Personal Information</p>
          </div>
          <div className='d-flex complete flex-column align-items-center'>
          <img src={complete} alt="" />
            <p>Car Details</p>
          </div>
        </div>
        <img src={OnboardImg} alt="" />
        <h2>Congratulations</h2>
        <p>You’re all set and ready</p>

        <div className="d-flex gap-4">
          <button className="btn text-white onboard" onClick={() => {
            setOnboard(false) 
            navigate("/") }}>Get Washing</button>
        </div>
      </div>
    </div>
    </div></div>
  )
}

export default Onboard