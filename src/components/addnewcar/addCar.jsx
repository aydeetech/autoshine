import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaCarSide } from 'react-icons/fa';
import { ImTruck } from "react-icons/im";
 // Assuming you've imported FaCarSide
 import { FaCheck } from "react-icons/fa";
// import { FaCarSide } from "react-icons/fa6";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useRef } from "react";

const AddCar = ({setAddcar}) => {
  
  const container = useRef()
  const { register, handleSubmit,control, formState: {errors} } = useForm();
  const ApiUrl = "https://intern-project-mukc.onrender.com/car/create";
  const token = Cookies.get("token");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${ApiUrl}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      


      if (res.data.success) {
        console.log(res.data);
        setAddcar(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
         
            setAddcar(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [setAddcar])

  return (
    <div  className='position-absolute w-100 vh-100 top-0 start-0  '>
      <div className=" position-fixed addcar w-100 vh-100 top-0 start-0 d-grid logout-container ">
        <div className="addcar-wrapper  p-2 p-md-5  d-flex flex-column align-items-center justify-content-center   bg-white shadow-lg " ref={container}>
        <h2 className='align-self-start'>Add a new car profile</h2>
        <p  className='align-self-start'>Let’s build your car profile</p>

        <div className=' justify-self-center align-self-center  '>
          <form className='d-flex flex-column gap-2'>
            <div className=' d-flex flex-column '>
              <label htmlFor="carNickname">Car Nickname</label>
              <input type="text" {...register("carNickname", {
              required: "Nickname required",
            })} id="carNickname" className='w-100 mt-2' />
            </div>
            {errors.carNickname && (<div className="text-danger">{errors.carNickname.message}</div>)}
            <div className=' d-flex flex-column '>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" {...register("location")} className='w-100 mt-2' />
            </div>

            <label htmlFor="carType" className="my-2 mt-3">
              Car Type
            </label>
            <div className="Car-type">
              <Controller
                name="carType"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="type">
                      <input
                        type="radio"
                        id="sedan"
                        {...field}
                        value="sedan"
                      />
                      <div className="text-white">
                        <FaCarSide className="fs-1" />
                        <p className="text-white">Sedan</p>
                      </div>
                    </div>
                    <div className="type">
                      <input
                        type="radio"
                        id="pickup"
                        {...field}
                        value="pickup"
                      />
                      <div className="text-white">
                        <ImTruck className="fs-1" />
                        <p className="text-white">Pick Up Truck</p>
                      </div>
                    </div>
                    <div className="type">
                      <input
                        type="radio"
                        id="suv"
                        {...field}
                        value="suv"
                      />
                      <div className="text-white">
                        <FaCarSide className="fs-1" />
                        <p className="text-white">Suv</p>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>

            <div className="my-3 mb-4">
            <label htmlFor="" className="my-2 mt-3">
              Profile Color
            </label>
            <div className="color-type d-flex gap-3">
              <Controller
                name="profileColor"
                defaultValue={"#FFC245"}
                control={control}
                render={({ field }) => (
                  <>
                    <div className="type">
                      <input
                        type="radio"
                        name="color"
                        {...field}
                        value="#FFC245"
                        id=""
                      />
                      <div style={{ backgroundColor: "#FFC245" }}>
                        <p className="text-white fs-4 mt-2">
                          <FaCheck />
                        </p>
                      </div>
                    </div>
                    <div className="type">
                      <input
                        type="radio"
                        name="color"
                        {...field}
                        value="#CA5765"
                        id=""
                      />
                      <div style={{ backgroundColor: "#CA5765" }}>
                        <p className="text-white fs-4 mt-2">
                          <FaCheck />
                        </p>
                      </div>
                    </div>
                    <div className="type">
                      <input
                        type="radio"
                        name="color"
                        {...field}
                        value="#01BB9C"
                        id=""
                      />
                      <div style={{ backgroundColor: "#01BB9C" }}>
                        <p className="text-white fs-4 mt-2">
                          <FaCheck />
                        </p>
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          <button className='w-100 border-0 text-white' onClick={handleSubmit(onSubmit)}>Add new car</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
