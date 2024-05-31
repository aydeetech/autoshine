import React from 'react'
import '../../src/Style/service.css'
import Allservices from '../components/AllServices/Allservices'
import ServiceHero from '../components/servicehero/ServiceHero'

function Servicepage() {
  return (
    <div className='cont service-bg'>
      <ServiceHero />
      <Allservices />
    
    </div>
  )
}

export default Servicepage