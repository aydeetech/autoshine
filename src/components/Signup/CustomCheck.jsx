import React from "react";
import '../../Style/Auth/CustomCheck.css'

const CustomCheck = () => {
    return(

        <div className="check-div">
        <div>
            <input type="checkbox" className="input"/>
            <span className="checkmark checkmark-yellow" ></span>
        </div>
        <div>
            <input type="checkbox" className="input"/>
            <span className="checkmark checkmark-red" ></span>
        </div>
        <div>
            <input type="checkbox" className="input"/>
            <span className="checkmark checkmark-green" ></span>
        </div>
       
        </div>
)}

export default CustomCheck;