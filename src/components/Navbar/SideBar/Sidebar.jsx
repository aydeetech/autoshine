import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import arrow from "../../../assets/arrow-white.svg"
import logo from "../../../assets/AUTOSHINELOGO.svg"
import close from "../../../assets/close-icon.svg"
import { useRef, useEffect } from 'react';
import Cookies from "js-cookie"
import { ServiceDropdown } from '../../Dropdown/Dropdown';
import Logout from '../../Modals/Logout';

const Sidebar = ({setSidebar, why, setWhy}) => {
  const container  = useRef()
  const token = Cookies.get('token')
  const [logout, setLogout] = useState(false)
  useEffect(() => {
    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
         
            setSidebar(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [setSidebar])
  return (
    <div>
      {logout && <Logout setLogout={setLogout}/>}
        <div className="sidebar position-fixed top-0 end-0 d-flex flex-column align-items-start gap-5" ref={container}>
          <div className='d-flex justify-content-between w-100 gap-5 align-items-center w-100'>
            <div><Link to="/" className="text-decoration-none side-logo m-0 "><p className='text-white'>AUTOSHINE</p></Link></div>
            <div className='ms-auto'><img src={close} onClick={() => setSidebar(false)} alt="" /></div>
          </div>
            <nav className="ms-4">
              <ul className="d-flex flex-column  align-items-start gap-5 ">
                <li className=" list-unstyled d-flex text-white align-items-center gap-2 ">
                  <Link to="/" className=" text-decoration-none ">Home</Link>
                </li>
                <li className=" list-unstyled d-flex text-white align-items-center gap-2 position-relative">
                  <Link to="/service" className=" text-decoration-none ">Services</Link>{" "}
                  
                  {/* {service && (
                    <div className="position-absolute ">
                      <ServiceDropdown />
                    </div>
                  )} */}
                </li>
                <li className=" list-unstyled text-white d-flex align-items-center gap-2 position-relative">
                  <Link className=" text-decoration-none ">Why AutoShine</Link>{" "}
                  
                </li>
                <li className=" list-unstyled text-white d-flex align-items-center gap-2 ">
                  <Link to="/contact" className=" text-decoration-none ">Contact Us</Link>
                </li>
                {token && <li className=" list-unstyled text-white d-flex align-items-center gap-2 ">
                  <Link to="/settings" className=" text-decoration-none ">Settings</Link>
                </li>}
              </ul>
            </nav>

            {!token ? <div className="d-flex flex-column gap-3 w-100 mb-2 align-items-center p-3 ">
              <button className="navbtn1">Get Started</button>
              <button className="navbtn2 border-0 ">Login</button>
            </div> : <div className="d-flex mt-auto flex-column gap-3 w-100 mb-2 align-items-center p-3 ">
              <button className='btn btn-outline-danger w-100 bg-danger text-white ' onClick={() => setLogout(true)}>Log out</button></div>}
          </div>
    </div>
  )
}

export default Sidebar