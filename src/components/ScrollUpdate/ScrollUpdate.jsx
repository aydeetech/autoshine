import React from 'react'
import dot from "../../assets/big-dot.svg";
import { useLocation } from 'react-router-dom';

const ScrollUpdate = () => {
  const location = useLocation()
  return (
    <div className={`${location.pathname !== "/" ? "d-none" : null} scroll-cont`}>
        <div className="d-flex align-items-center justify-content-between  scroll">
        <div className="d-flex align-items-center justify-content-between w-100 ">
          <div className="d-flex align-items-center gap-3 h-100">
            <img src={dot} alt="" />{" "}
            <p className="mt-3">WE ARE NOW IN YOUR CITY</p>
          </div>
          <div className="d-flex align-items-center gap-3 h-100">
            <img src={dot} alt="" />{" "}
            <p className="mt-3">WE ARE NOW IN YOUR CITY</p>
          </div>
          <div className="d-flex align-items-center gap-3 h-100">
            <img src={dot} alt="" />{" "}
            <p className="mt-3">WE ARE NOW IN YOUR CITY</p>
          </div>
          <div className="d-flex align-items-center gap-3 h-100">
            <img src={dot} alt="" />{" "}
            <p className="mt-3">WE ARE NOW IN YOUR CITY</p>
          </div>
          <div className="d-flex align-items-center gap-3 h-100">
            <img src={dot} alt="" />{" "}
            <p className="mt-3">WE ARE NOW IN YOUR CITY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollUpdate