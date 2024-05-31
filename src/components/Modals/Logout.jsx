
import LogoutImg from "../../assets/Logout.svg";
import Cookies from "js-cookies"
import { useNavigate } from "react-router-dom";
import "../../Style/Modal/logoutmodal.css"
import { useEffect, useRef } from "react";

const Logout = ({setLogout, setLoggingout}) => {
    const navigate = useNavigate()
    const container = useRef()

    const handleLogout =  () => {
       Cookies.removeItem("token")
       setLogout(false)
      //  navigate("/")
      setLoggingout(true)
    }

    useEffect(() => {
      const handleClickOutside = (e) => {
          if (container.current && !container.current.contains(e.target)) {
           
              setLogout(false);
          }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [setLogout])
  return (
    <div className='position-absolute w-100 vh-100 top-0 start-0  '>
    <div className=" position-fixed w-100 vh-100 top-0 left-0 d-grid logout-container ">
    <div className="logout-wrapper d-grid bg-white shadow-lg " ref={container}>
      <div className="d-flex flex-column gap-4 align-items-center">
        <img src={LogoutImg} alt="" />
        <h2 className="text-center">Log out</h2>
        <p className="text-center">Are you sure you’re ready to log out?</p>

        <div className="d-flex gap-4">
          <button className="btn" onClick={() => setLogout(false)}>No, I’m not</button>
          <button className="btn text-white" onClick={handleLogout}>Yes, I’m</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Logout;
 