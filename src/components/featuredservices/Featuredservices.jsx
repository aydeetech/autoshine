import React, { useState } from 'react'
import Services from '../../data/Services'

const Featuredservices = () => {
    const [index, setIndex] = useState(0)
  return (
    <div>
        <div className='container d-grid home-service-wrapper'>
          <button  className={`${index === 0 ? "bg-active text-white": null} d-flex gap-2 align-items-center py-2 px-3 service-filter btn btn-outlibg-active`} onClick={() => setIndex(0)}>
            <span className={`${index === 0 ? "bg-white " : null}`}></span>
            <span>Interior Cleaning</span>
          </button>
          <button className={`${index === 1 ? "bg-active text-white": null} d-flex gap-2 align-items-center py-2 px-3 service-filter btn btn-outlibg-active`} onClick={() => setIndex(1)}>
            <span className={`${index === 1 ? "bg-white " : null}`}></span>
            <span>Exterior Cleaning</span>
          </button>
          <button className={`${index === 2 ? "bg-active text-white": null} d-flex gap-2 align-items-center py-2 px-3 service-filter btn btn-outlibg-active`} onClick={() => setIndex(2)}>
            <span className={`${index === 2 ? "bg-white " : null}`}></span>
            <span>Tire Cleansing</span>
          </button>
          <button className={`${index === 3 ? "bg-active text-white": null} d-flex gap-2 align-items-center py-2 px-3 service-filter btn btn-outlibg-active`} onClick={() => setIndex(3)}>
            <span className={`${index === 3 ? "bg-white " : null}`}></span>
            <span>Car Waxing</span>
          </button>
          <button className={`${index === 4 ? "bg-active text-white": null} d-flex gap-2 align-items-center py-2 px-3 service-filter btn `} onClick={() => setIndex(4)}>
            <span className={`${index === 4 ? "bg-white " : null}`}></span>
            <span>Car Polishing</span>
          </button>
        </div>
        <div  className='container d-flex flex-lg-row flex-column  gap--xxl-5  gap-3 align-items-center services p-4 w-100 ' >
                                <div className='services-listing d-flex flex-column align-items-center align-items-lg-start  gap-4'>
                                   
                                    <div className='d-flex flex-lg-row flex-column-reverse align-items-center gap-2 w-100'>
                                        <h3 className='text-center text-lg-start  mx-auto'>{Services[index].name}</h3>
                                        <img src={Services[index].service_icon} alt="" />
                                    </div>

                                    <p className='text-black text-center text-lg-start '>We understand the importance of a clean and healthy environment. Whether it's your home, office, or any other space, maintaining cleanliness is vital for your well-being and productivity.</p>

                                    
                                    <div  className='features-container p-3'>
                                    <div className='overflow-x-hidden d-grid allservice-features w-100 mx-auto'>
                                        {
                                            Services[index].features.map((feature, i) => {
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
                                        <img src={Services[index].serviceMainImg} alt="" className='w-100' />
                                    </div>

                                    <div className='d-flex justify-content-between gap-4 w-100 align-items-center'>
                                        <h2 className='text-start'>Leave the Mess to Our Experts - Schedule Cleaning Appointment Now!</h2>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </div>
    </div>
  )
}

export default Featuredservices