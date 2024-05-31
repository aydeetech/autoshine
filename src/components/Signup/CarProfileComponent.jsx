import React, { useState } from "react";
import Location from "../../assets/signup/Vector (3).svg";
import "../../Style/Auth/carProfileComponent.css";
import Dropdown from "../../assets/signup/Icon.svg";
// import vector1 from '../../assets/signup/Vector (1).svg'
// import vector2 from '../../assets/signup/Vector.svg'
// import vector3 from '../../assets/signup/Vector (2).svg'
import { ImTruck } from "react-icons/im";
// import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { ThreeCircles } from "react-loader-spinner";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import axios from "axios";
import Onboard from "../Modals/Onboard";

const CarProfileComponent = ({setOnboard}) => {
  const { register, control, handleSubmit,
    formState: { errors }, } = useForm();
    const [isLoading, setIsLoading] = useState(false)

  const ApiUrl = "https://intern-project-mukc.onrender.com/car/create";
  const token = Cookies.get("token");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
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
      Cookies.set("location", data.location )
      setOnboard(true)
      setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  return (
    <div className="container d-flex align-items-center mt-5 justify-content-center">
      <div className="vh-100">
        <div className="d-flex justify-content-center gap-5">
          <div>
            <div className="CarProfileComponent-round Success"></div>
            <p>Personal Information</p>
          </div>
          <div>
            <div className="CarProfileComponent-round bg-primary"></div>
            <p>Car Details</p>
          </div>
        </div>

        <h1 style={{ color: "#003770", fontSize: "36px", fontWeight: "700" }}>
          Let's make your car profile
        </h1>
        <h3 style={{ color: "#33414B", fontSize: "20px", fontWeight: "500" }}>
          Let's build your car profile
        </h3>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className="my-2 mt-3">
            NickName
          </label>
          <input
            type="text"
            {...register("carNickname", {
              required: "Nickname required",
            })}
            placeholder="e.g My red Lambo"
            className="w-100 p-3 rounded-4"
          />
          {errors.carNickname && (<div className="text-danger">{errors.carNickname.message}</div>)}
          <label htmlFor="" className="my-2 mt-3">
            Location
          </label>
          <div className="Location-input">
            <img src={Location} alt="" className="Location-icon" />
            <input
              type="text"
              {...register("location", {
                required: "Location required",
              })}
              placeholder="e.g 6235 Akinwumni Dr, Victoria Island, LG"
              className="w-100 p-3 px-5 rounded-4"
            />
            {errors.location && (<div className="text-danger">{errors.location.message}</div>)}
          </div>

          <label htmlFor="" className="my-2 mt-3">
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
                      name="type"
                      {...field}
                      value="sedan"
                      id=""
                    />
                    <div className="text-white">
                      <FaCarSide className="fs-1" />
                      <p className="text-white">Sedan</p>
                    </div>
                  </div>
                  <div className="type">
                    <input
                      type="radio"
                      name="type"
                      {...field}
                      value="pickup"
                      id=""
                    />
                    <div className="text-white">
                      <ImTruck className="fs-1" />
                      <p className="text-white">Pick Up Truck</p>
                    </div>
                  </div>
                  <div className="type">
                    <input
                      type="radio"
                      name="type"
                      {...field}
                      value="suv"
                      id=""
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

          <button
            className="carProfile-button"
            style={{ fontSize: "20px", fontWeight: "600" }}
          >
            {isLoading ? <div className="d-flex w-100 h-100  justify-content-center align-items-center "><ThreeCircles
  visible={true}
  height="30"
  width="100"
  color="##0064CC"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div> : "Finish up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarProfileComponent;
