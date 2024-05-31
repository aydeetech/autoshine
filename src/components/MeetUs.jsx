import React, { useState } from 'react';
import "../styles/MeetUs.css"
import {Data} from  "../MockData/Data.jsx";
import Frame1 from "../assets/images/Frame1.png";
import Frame11 from "../assets/images/Frame11.png";

const MeetUs = () => {
    const [data, setData] = useState(Data)
  return (
    <section className='meetUs container'>
       {data.map((item) => {
        const {_id, img, title, name, facebook, instagram, twitter,  description } = item
         return <article key={_id} className='article'>
            <div className="bgImg">
                <img src={img} alt=""  className='imageMeetUs'/>
                <div className='largemeet'>
                <img src={Frame11} alt="" className='meetUsImg2'/>
                <div className='shape'>
                  <h3>{name}</h3>
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <div className="social">
                  <span className='fs-4'>{facebook}</span>
                  <span className='fs-4'>{instagram}</span>
                  <span className='fs-4'>{twitter}</span> 
               </div>
                </div>
                </div>
               
               {/* <div> */}
                  <div className="h3">
                    <h3>{name}</h3>
                  </div>
                  <img src={Frame1} alt="" className='meetUsImg'/>
               {/* </div> */}
                
            
            </div>
          
         </article>
       })}
    </section>
  )
}

export default MeetUs