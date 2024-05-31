import { useEffect } from 'react'
import logo from "../../assets/AUTOSHINELOGO.svg";
import spinner from "../../assets/loading-spinner.svg";
import "../../Style/Spinner/Spinner.css"
// import {useGlobalContext} from '../../hooks/UseGlobalContext'
const Loader = () => {
    // const {setIsLoading} = useGlobalContext()

   
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center p-3  '>
        <div className='d-flex gap-5 justify-content-center align-items-center'>
            <img src={logo} alt="" />
            <img src={spinner} alt="" className='spinner' />
        </div>
    </div>
  )
}

export default Loader