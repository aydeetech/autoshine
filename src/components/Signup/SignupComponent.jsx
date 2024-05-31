import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import vector from "../../assets/signup/Passwordhide.svg";
import "../../Style/Auth/SignupComponent.css";
import { Link, useNavigate } from "react-router-dom";
// import  dropdown  from "../../assets/signup/Icon.svg";
// import  country  from "../../assets/signup/NG.svg";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import { ThreeCircles } from "react-loader-spinner";
// import Onboard from "../Modals/Onboard";

const SignupComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const ApiUrl = "https://intern-project-mukc.onrender.com/register";
  const [seeText, setSeeText] = useState("Hide");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const [seePassword, setSeePassword] = useState('')
  // console.log(formatPhoneNumber(value));

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${ApiUrl}`, data);

      if (res.data.success) {
        navigate("/carprofile");
        console.log(res.data);
        setIsLoading(false);
        Cookies.set("token", res.data.accessToken);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (seeText === "Show") {
      setSeeText("Hide");
    } else {
      setSeeText("Show");
    }
  };

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
        <div className="vh-100">
       <div className="d-flex justify-content-center gap-5">
        <div>
          <div className="SignupComponent-round bg-primary"></div>
            <p>Personal Information</p>
          </div>
          <div>
          <div className="SignupComponent-round"
              style={{ background: "#B0B5B9" }}
            ></div>
            <p style={{ color: "#B0B5B9" }}>Car Details</p>
          </div>
        </div>

        <h1 style={{ color: "#003770", fontSize: "36px", fontWeight: "700" }}>
          Let's start your car care journey
        </h1>
        <h3 style={{ color: "#33414B", fontSize: "20px", fontWeight: "500" }}>
          Register your account
        </h3>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className="my-2 mt-3">
            FullName
          </label>
          <input
            {...register("fullname", {
              required: "Full name required",
            })}
            type="text"
            placeholder="e.g John Doe"
            className="w-100 p-3 rounded-4"
          />
          <label htmlFor="" className="my-2 mt-3">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Enter your email"
            className="w-100 p-3 rounded-4"
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
          <label htmlFor="" className="my-2 mt-3">
            PhoneNumber
          </label>
          <div className="SignupComponent-country-input w-100">
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"ng"}
                  disableDropdown
                  placeholder="Enter phone number"
                  className="rounded w-100 shadow-none"
                  inputProps={{
                    required: true,
                  }}
                  inputClass="w-100 shadow-none rounded p-4 ps-5"
                />
              )}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="" className="my-2 mt-3">
              Create Password
            </label>
            <div className="See-Password" onClick={togglePasswordVisibility}>
              <img src={vector} alt="" /> {seeText}
            </div>
          </div>

          <input
            placeholder="Enter your Password"
            className="password w-100 p-3 rounded-4"
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Minimum password length is 7 characters",
              minLength: 7,
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}

          <div className="my-5 ">
            <h5>How would you like to be contacted</h5>
            <Controller
              name="contactPreferences"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <input
                    type="radio"
                    {...field}
                    value={"email"}
                    name="contact"
                  />
                  <label htmlFor="" className="mx-3">
                    Email
                  </label>
                  <input
                    type="radio"
                    {...field}
                    value={"phone"}
                    name="contact"
                  />
                  <label htmlFor="" className="mx-3">
                    Phone Call
                  </label>
                  <input
                    type="radio"
                    {...field}
                    value={"both"}
                    name="contact"
                  />
                  <label htmlFor="" className="mx-3">
                    Both
                  </label>
                </>
              )}
            />
          </div>

          <div className="d-flex gap-2 align-items-center my-3">
            <input type="checkbox" className="bg-success" />
            <label htmlFor="">
              By creating an account, you agree to <Link>Terms of use</Link> and{" "}
              <Link>Privacy Policy</Link>
            </label>
          </div>

          <button
            className="sign-button"
          >
            {isLoading ? <div className="d-flex w-100 h-100  justify-content-center align-items-center "><ThreeCircles
  visible={true}
  height="30"
  width="100"
  color="##0064CC"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div> :"Get me started"}
          </button>
          <p className="text-center">Already have an Account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
