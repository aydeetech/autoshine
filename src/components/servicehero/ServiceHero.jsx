import React from 'react'
import serviceHero from "../../assets/service-hero.svg"
import customer from "../../assets/customer.svg"
import arrow from "../../assets/blue-arrow.svg"
import Location from '../Location/Location'

const ServiceHero = () => {
  return (
    <div>
        <div className='d-flex align-items-center justify-content-xxl-between p-2 justify-content-center  position-relative  '>
            <div className='d-none d-lg-block service-hero-img w-50'>
                <img src={serviceHero} alt="" />
            </div>

            <div className='d-flex flex-column align-items-center align-items-lg-start gap-4 pe-xxl-5 me-xxl-auto'>
                <div className='service-main text-center  text-lg-start '>
                <p style={{color: "#5497DD", fontWeight: "800"}}>Your Vehicle's</p>
                <p style={{color: "#003770", fontWeight: "800"}}>Healthcare Services</p>
                <p>The more happier your car is, the happier you are.</p>
                </div>

                <Location />

                <p style={{fontSize: "20px"}}>Choose to be happy with us today</p>

                <div className='d-md-flex d-none  align-items-center gap-3 '>
                    <div className='service-testimonial bg-white shadow-sm'>
                        <p style={{fontSize: "12px", color: "#8A9298"}}>‘’We provide the finest full service Car Wash and Auto Detailing in Calgary, Edmonton, and Kelowna’’</p>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={customer} alt="" />
                            <p>Customer Name</p>
                        </div>
                    </div>
                    <div className='service-testimonial bg-white shadow-sm'>
                        <p style={{fontSize: "12px", color: "#8A9298"}}>‘’We provide the finest full service Car Wash and Auto Detailing in Calgary, Edmonton, and Kelowna’’</p>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={customer} alt="" />
                            <p>Customer Name</p>
                        </div>
                    </div>
                    <div className='service-testimonial bg-white d-none d-xxl-block shadow-sm'>
                        <p style={{fontSize: "12px", color: "#8A9298"}}>‘’We provide the finest full service Car Wash and Auto Detailing in Calgary, Edmonton, and Kelowna’’</p>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={customer} alt="" />
                            <p className='my-auto'>Customer Name</p>
                        </div>
                    </div>
                </div>
                <img src={arrow} className='align-self-center mt-4 arrow' alt="" />
            </div>
        </div>
    </div>
  )
}

export default ServiceHero