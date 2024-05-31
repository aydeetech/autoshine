import { Link } from "react-router-dom";
import { useRef } from "react";

export const ServiceDropdown = () => {
  const container = useRef()
  return (
    <div className="dropdown position-absolute   shadow-lg p-4 d-flex flex-column bg-white justify-content-evenly">
      <div className="dropdown-content d-flex gap-2 align-items-center">
        <div className="line mb-2"></div>
        <p>
          <Link to="/technician">
          Our Technicians
          </Link>
          </p>
      </div>
      <div className="dropdown-content d-flex gap-2 align-items-center">
      <div className="line mb-2"></div>
        <p>
          <Link to="/contact">
         Contact Us
         </Link>
        </p>
      </div>
      <div className="dropdown-content d-flex gap-2 align-items-center">
      <div className="line mb-2"></div>
        <p>
          {" "}
          <Link to="/about">
           About Us
           </Link>
        </p>
      </div>
    </div>
  );
};
export const LoggedDropdown = ({setLogout}) => {
  return (
    <div className="dropdown-log position-absolute   shadow-lg p-4 d-flex flex-column bg-white justify-content-evenly">
      <div className="dropdown-content d-flex gap-2 align-items-center">
        <div className="line mb-2"></div>
        <p>
          <Link to="/settings">
          Settings
          </Link>
          </p>
      </div>
      <div className="dropdown-content d-flex gap-2 align-items-center">
      <div className="line mb-2"></div>
        <p onClick={() => setLogout(true)} className="text-danger">
          
            Log Out
       
        </p>
      </div>
      
    </div>
  );
};
 
