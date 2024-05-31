import logo from "../../assets/AUTOSHINELOGO.svg";
import { useState, useEffect, useRef } from "react";
import "../../Style/Navbar/Navbar.css";
import arrow from "../../assets/arrow-down.svg";
// import arrowWhite from "../../assets/arrow-white.svg";
import ham from "../../assets/ham.svg";
import { Link } from "react-router-dom";
import { ServiceDropdown, LoggedDropdown} from "../Dropdown/Dropdown";
import Sidebar from "./SideBar/Sidebar";
import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie"
import Logout from "../Modals/Logout";
import Logoutloader from "../Loader/Logoutloader";

const Navbar = () => {
  const navbar = useRef();
  const [service, setService] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const [logout, setLogout] = useState(false);
  const [loggingout, setLoggingout] = useState(false);
  const token = Cookies.get('token');

  let decoded = null

  


const handleDecode = () => {
  decoded = jwtDecode(token)
  console.log(decoded);
  
  
}

if (token) {
   handleDecode()
}

const name = decoded?.user?.fullname
console.log(name);
   const initials = name?.split(" ")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 82;
      if (scrollPosition > scrollThreshold) {
        navbar.current.style.position = "fixed";
      } else {
        navbar.current.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div>
      {loggingout && <Logoutloader setLoggingout={setLoggingout} />}
      {logout && <Logout setLogout={setLogout} setLoggingout={setLoggingout} />}
      <div
        className=" shadow-lg bg-white top-0 start-0 end-0 navbar-cont"
        ref={navbar}
      >
        <div>
          <header className="gap-2 p-4 container  d-flex justify-content-between align-items-center ">
            <div className="logo-cont d-flex align-items-center gap-5 justify-content-between">
              {token && (
                <div
                  className="d-flex d-none gap-3 position-relative justify-content-center    align-items-center "
                  onClick={() => {
                    setProfile(!profile);
                  }}
                >
                  <div className="initials">
                    <span>{initials[0]?.charAt(0)}</span>.{" "}
                    <span>{initials[1]?.charAt(0)}</span>
                  </div>
                  <p className=" fw-semibold m-0  ">{decoded?.user.fullname}</p>
                  <img src={arrow} alt="" className="" />
                  {profile && (
                    <div className="position-absolute ">
                      <LoggedDropdown setLogout={setLogout} />
                    </div>
                  )}
                </div>
              )}
              <Link to="/">
                {" "}
                <img src={logo} alt="" />
              </Link>
              <div onClick={() => setSidebar(true)}>
                <img src={ham} alt="" className="ham" />
              </div>
            </div>

            <nav className="d-none nav-body d-lg-block ">
              <ul className=" p-0 d-flex gap-xxl-5 gap-4 align-items-center my-auto gap-3 ">
                <li className=" list-unstyled d-flex align-items-center gap-2 ">
                  <Link to="/" className=" text-decoration-none ">
                    Home
                  </Link>
                </li>
                <li className=" list-unstyled d-flex align-items-center gap-2 position-relative">
                  <Link to="/service" className=" text-decoration-none ">
                    Services
                  </Link>{" "}
                </li>
                <li className=" list-unstyled d-flex align-items-center gap-2 position-relative">
                  <Link className=" text-decoration-none " to="/booking">
                    Booking
                  </Link>{" "}
                </li>
                <li
                  className=" list-unstyled d-flex align-items-center gap-1 "
                  onClick={() => {
                    setService(!service);
                  }}
                >
                  <Link className=" text-decoration-none ">Why AutoShine</Link>
                  <img src={arrow} alt="" className=" d-lg-block  d-none" />
                  {service && (
                    <div className="position-absolute ">
                      <ServiceDropdown />
                    </div>
                  )}
                </li>
              </ul>
            </nav>

            {token ? (
              <div
                className="d-lg-flex d-none gap-3 position-relative justify-content-center    align-items-center "
                onClick={() => {
                  setProfile(!profile);
                }}
              >
                <div className="initials">
                  <span>{initials[0]?.charAt(0)}</span><span>.</span>{" "}
                  <span>{initials[1]?.charAt(0)}</span>
                </div>
                <p className=" fw-semibold m-0  ">{decoded?.user.fullname}</p>
                <img src={arrow} alt="" className="" />
                {profile && (
                  <div className="position-absolute ">
                    <LoggedDropdown setLogout={setLogout} />
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-btn d-lg-flex d-none">
                <Link to="/signup">
                  <button className="navbtn1"  onMouseOver={(e) => {
              e.target.style.backgroundColor = "#005BBA"; 
              e.target.style.color = "white"; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white"; 
              e.target.style.color = "#005BBA"; 
            }}>Get Started</button>
                </Link>
                <Link to="/login">
                  <button className="navbtn2 border-0 ">Login</button>
                </Link>
              </div>
            )}
          </header>
        </div>
        {sidebar && (
          <div className="d-lg-none d-block sidebar-cont ">
            <Sidebar
              setSidebar={setSidebar}
              why={service}
              setWhy={setService}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
