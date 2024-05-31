import  seePassword  from '../../assets/signup/Passwordhide.svg'
import { Link } from 'react-router-dom'
import "../../Style/Auth/LoginComponent.css"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeCircles } from "react-loader-spinner";

const LoginComponent = ({setIsLoader})=>{
    const navigate = useNavigate()
    const ApiUrl = "https://intern-project-mukc.onrender.com/login";
    const {register, handleSubmit,formState: { errors },} = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
          setIsLoading(true)
          const res = await axios.post(`${ApiUrl}`, data);
    
          if (res.data.success) {
            setIsLoader(true)
            // navigate("/");
            setIsLoading(false)
            Cookies.set("token", res.data.accessToken)

          }
        } catch (error) {
          console.log(error);
          setIsLoading(false)
        }
      };
    return(
        <div className=' align-items-center d-flex justify-content-center vh-100  p-5'>
            <div>
        <div>
            <h1 style={{fontSize:"36px",fontWeight:"700" , color: "#003770"}}>Glad you're back</h1>
            <p style={{fontSize:"20px", fontWeight:"500", color: "#33414B"}}>Log into your account</p>
        </div>
        <form action="" className='' >
            <div>
            <label htmlFor="" className='LoginComponent-label d-flex justify-content-start'>Email</label>
            <input type="text" {...register("email", {
                required: "Email is required",
            })} className='LoginComponent-input rounded mb-2' placeholder='Enter your email'/>
            {errors.email && (
            <div className="text-danger mb-4">{errors.email.message}</div>
          )}
          </div>
                <div>
           <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor="" className='LoginComponent-label d-flex justify-content-start'>Password</label>
             <div className='d-flex align-items-center'>
            <img src={seePassword} alt="" />
            <p className='pt-3'>Hide</p>
            </div> 
            </div>
            <input type="password" {...register("password", {
                required: "Minimum password length is 7 characters"
            })} className='LoginComponent-input rounded mb-2'placeholder='Enter your password'/>
            {errors.password && (
            <div className="text-danger mb-4 ">{errors.password.message}</div>
          )}
          </div>
            <div className='d-flex justify-content-between'>
            <p> <input type="checkbox"/>  Remember me</p>
            <Link to="#" className='text-black text-decoration-none'><p>Need help?</p></Link>
            </div>
        </form>
        <div >
        <button className="Login-button" onClick={handleSubmit(onSubmit)}>{isLoading ? <div className="d-flex w-100 h-100  justify-content-center align-items-center "><ThreeCircles
  visible={true}
  height="30"
  width="100"
  color="##0064CC"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div> :"Log In"}</button> 
        <p className='text-center mt-3'>Don't have an account? <Link to="/signup">Signup</Link> </p>
        </div>
        </div>
        
        </div>

    )

}

export default LoginComponent