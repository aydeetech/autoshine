import React from 'react'
import Marquee from "react-fast-marquee";
import '../../Style/Home/Marque.css'
import Dot from "../../assets/Ellipse 12.png"

const Marque = () => {
    const ADS = "WE ARE NOW IN YOUR CITY";

  return (
    <div>
        <Marquee speed={100} style={{ backgroundColor: '#0064cc', color: "white", height: "82px", size: "5px" }}>

<div>
  <h1>
    {ADS}
    <img src={Dot} className='img1' alt="" style={{ width: "28px", height: "28px",  }} />&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
  </h1>
</div>

<div>
  <h1>
    {ADS}
    <img src={Dot} alt="" className='img1' style={{ width: "28px", height: '28px', }} />&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
  </h1>
</div>

<div>
  <h1>
    {ADS}
    <img src={Dot} alt="" className='img1' style={{ width: "28px", height: "28px", }} />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
  </h1>
</div>

</Marquee>
    </div>
  )
}

export default Marque