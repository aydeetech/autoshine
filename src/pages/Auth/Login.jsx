import signinnImg from '../../assets/signup/LoginImage.svg'
import {Link } from 'react-router-dom'
import '../../Style/Auth/Login.css'
import LoginComponent from '../../components/Signup/LoginComponent'
import { useState } from 'react'
import Loginloader from '../../components/Loader/Loginloader'
const Login = () => {
  const [loader, setIsLoader] = useState(false)
  return (
    <>
    {loader && <Loginloader setIsLoader={setIsLoader}/>}
    <div className='Login-General-Div'>
          <div className='Login-image vh-100'>
            <Link to="/" className="text-decoration-none"><p className='Login-link-to-home'>AUTOSHINE</p></Link>
            <img src={signinnImg} alt="" className='h-100 object-fit-cover ' style={{width:"100%"}}/>
          </div >
          <div className='Login-component'>
          <LoginComponent setIsLoader={setIsLoader}/>
          </div>
        </div>
        </>
  )
}

export default Login