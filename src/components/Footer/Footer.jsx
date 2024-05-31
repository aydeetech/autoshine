import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/Home/Footer.css";
import logo from "../../assets/AUTOSHINELOGO.svg";
import location from "../../assets/Icon.png";
import call from "../../assets/Icon (1).png";

const Footer = () => {
  return (
      <div className="container py-5" >
       

        <div className=" d-lg-flex align-items-start justify-content-between">

          <div className="text-center" >
          <img src={logo} alt="" className="my-2 img-fluid" style={{width:"192px"}}/>
          </div>
          
            <ul className="row  justify-content-center justify-content-lg-between my-4 my-lg-0">
              <li className="list-unstyled d-flex justify-content-start justify-content-lg-end  col-5 col-md-3 col-lg-2 my-2 my-lg-0" >
                <Link style={{fontWeight:"600", fontSize:"20px", color: "#003770"}} className=" text-decoration-none ">Home</Link>
              </li>

              <li className="list-unstyled col-5 col-md-3 col-lg-3 my-2 my-lg-0">
                <Link style={{fontWeight:"600", fontSize:"20px", color: "#003770"}} className=" text-decoration-none">Service</Link>
              </li>

              <li className="list-unstyled col-5 col-md-3 col-lg-3 my-2 my-lg-0" >
                <Link style={{fontWeight:"600", fontSize:"20px", color: "#003770"}} className=" text-decoration-none ">Why Us</Link>
              </li>

              <li className="list-unstyled col-5 col-md-3 col-lg-4 my-2 my-lg-0" >
                <Link style={{fontWeight:"600", fontSize:"20px", color: "#003770"}} className=" text-decoration-none">Contact Us</Link>
              </li>
              </ul>
                <div className="locate">
                  <div className="d-flex justify-content-center justify-content-lg-start gap-3 align-items-center">
                  <img src={location} alt="location" />
                    <div style={{fontWeight:"600", fontSize:"16px", color: "#003770"}}>4517 Washington Ave. Manchester, 
                  Kentucky 39495</div>
                  </div>
                  
                  <div className="d-flex justify-content-center mt-4 justify-content-lg-start gap-3 align-items-center">
                  <img src={call} alt="call" className=" " />
                  <div style={{fontWeight:"600", fontSize:"16px", color: "#003770"}}>(229) 555-0109</div>
                  </div>

                </div>

               
              
            
          </div>
        </div>
  
  );
};

export default Footer;
