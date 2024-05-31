import React from 'react'
import Services from '../../data/Services'
import blue_arrow from "../../assets/blue-arrow.svg"
import "../../Style/AllServices/Allservices.css"

const Allservices = () => {
  return (
    <div>

        <div className='container my-4'>
            <div className='allservice-header w-100 d-flex flex-column align-items-center '>
                <p>What do we offer?</p>
                <h2 className='text-center'>We offer excellent services</h2>
                <p className='text-center'>Our team is well trained and highly qualified experts in professional cleaning and luxury services to keep all types of vehicles clean</p>
            </div>


            <div>
                <div className='d-grid gap-5 my-5 allservices w-100'>
                    {
                        Services.map((service) => {
                            const {_id, name, service_icon, serviceMainImg, features, style} = service;
                            return <div  className={`${style ? "flex-lg-row-reverse " : "flex-lg-row"} d-flex  flex-column  gap--xxl-5  gap-4 align-items-center services p-4 w-100 `} key={_id}>
                                <div className='services-listing d-flex flex-column align-items-center align-items-lg-start  gap-4'>
                                    <span className='align-self-lg-start align-self-center mb-4 ms-lg-5 '><img src={blue_arrow} alt="" className='arrow' /></span>
                                    <div className='d-flex flex-lg-row flex-column-reverse align-items-center gap-2 w-100'>
                                        <h3 className='text-center text-lg-start  mx-auto'>{name}</h3>
                                        <img src={service_icon} alt="" />
                                    </div>

                                    <p className='text-black text-center text-lg-start '>We understand the importance of a clean and healthy environment. Whether it's your home, office, or any other space, maintaining cleanliness is vital for your well-being and productivity.</p>

                                    
                                    <div  className='features-container'>
                                    <div className=' d-grid allservice-features w-100 mx-auto'>
                                        {
                                            features.map((feature, i) => {
                                                return <div key={i} className='d-flex feature align-items-center gap-3  justify-content-start '>
                                                    <div className='service-dot'></div>
                                                    <p>{feature}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    </div>
                                </div>

                                <div className='service-main-cta d-none d-md-block '>
                                    <div>
                                        <img src={serviceMainImg} alt="" className='w-100' />
                                    </div>

                                    <div className='d-flex justify-content-between gap-4 w-100 align-items-center'>
                                        <h2 className='text-start'>Leave the Mess to Our Experts - Schedule Cleaning Appointment Now!</h2>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>

    </div>
  )
}

export default Allservices