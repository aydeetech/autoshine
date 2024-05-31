import React from 'react'

import Button from "react-bootstrap/Button";

const Newsletter = () => {
  return (
    <div>
        <div className="news">
        <div
        className='h-100'
          style={{ maxWidth: "1440px", margin: "auto" }}
        >
          <form className='container d-flex flex-column flex-lg-row  align-items-center h-100 gap-5 px-5 py-3 py-lg-0  mx-auto  '>
            <h2 style={{ fontFamily: "Inter", fontWeight: "600", maxWidth: "650px" }} className='text-white text-center text-lg-start'>Subscribe to News and Get a 10% Discount!</h2>
            <div className='d-flex'>
                <input type="email" placeholder='Enter Your Email' />
                <button>
                    Subscribe
                </button>
            </div>
          </form>
        </div>
      </div>

      <div className="expert">
        <h1 style={{ fontFamily: "Inter", fontWeight: "600" }}>
          Revitalize Your Vehicle with Our <br />
          Dedicated Cleaning Experts
        </h1>

        <div className="book">
          <Button
            variant="light"
            style={{
              height: "60px",
              width: "140px",
              marginTop: "40px",
             
              fontFamily: "Inter",
              fontWeight: "600",
              padding: "10px",

              border: "none",
              transition: "background-color 0.8s ease"
            }}

            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#005BBA"; 
              e.target.style.color = "white"; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white"; 
              e.target.style.color = "#005BBA"; 
            }}
            // onClick={handleClick}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter