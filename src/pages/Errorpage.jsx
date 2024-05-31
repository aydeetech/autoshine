import { Link } from "react-router-dom"
import ErrorPageImage from "../assets/Error/Designers (1).svg"
import "../Style/ErrorPage.css"
import Navbar from "../components/Navbar/Navbar"
const Errorpage = () => {
  return (

      <div className="Error-general-div">
        <Navbar/>
        <div className="d-flex align-items-center text-center justify-content-center">
         <div>
         <h1 className="error-h1">404</h1>
          <img src={ErrorPageImage} alt="" className="error-image img-fluid" />
          <div>
          <Link to="/" className="text-decoration-none"><button className="error-button">Go back home</button></Link>
          </div>
          <p className="container error-text">You’re seeing this page because the URL you entered doesn’t exist. </p>
         </div>
        </div>
      </div>
  )
}

export default Errorpage