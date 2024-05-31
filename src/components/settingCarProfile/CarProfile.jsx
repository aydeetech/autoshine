import React, { useEffect, useState } from "react";
import "../../Style/settings-car/settingsCar.css"
import AddCar from "../addnewcar/addCar";
import { FaCarSide, FaCheck } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import Cookies from "js-cookie";

const CarProfile = () => {
   
    const [addcar, setAddcar] = useState(false)
    const [profiles, setProfiles] = useState([])
    const [successMessage, setSuccessMessage] = useState('');
    const [car, setCar] = useState({})
    const [editingCarId, setEditingCarId] = useState(null)
    const { register, handleSubmit,control, formState: {errors}, setValue } = useForm({ });
    const ApiUrl = "https://intern-project-mukc.onrender.com/car";
    const token = Cookies.get("token");

   const onSubmit = async (data) => {
    

    try {
      const res = await axios.patch(`${ApiUrl}/${editingCarId}`, {...data}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (res.data.success) {
        setSuccessMessage("User successfully updated");

      const updated =   setTimeout(() => {
        setSuccessMessage("")
      }, 3000);

      console.log(res.data);
        getCars()

      return () => clearTimeout(updated)
        
      }
    } catch (error) {
      console.log(error);
    }
   }


   const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${ApiUrl}/${id}`);

      if (res.data.success) {
        getCars()
        setValue(null)
      }
   }
     catch (error) {
      console.log(error);
    }
  }
    
   

    const handleAddCar = (e) => {
        e.preventDefault()
        setAddcar(true)
    }

    const handleprofilecolor = (profileColor) => {
      let backgroundColor = null
      if (profileColor === "#CA5765") {
         backgroundColor = "#F4AEB7"
      }

      if (profileColor === "#01BB9C") {
        return backgroundColor = "#B1F8EC"
      }
      if (profileColor === "#FFC245") {
        return backgroundColor = "#FFF9ED"
      }

      return backgroundColor
    }

    const getACar = async (id) => {
      try {
        const res = await axios.get(`${ApiUrl}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (res.data.success) {
          setCar(res.data.car)
          console.log(res.data.car);
          setEditingCarId(id);
          setValue("carNickname", res.data.car.carNickname);
        setValue("profileColor", res.data.car.profileColor);
        setValue("carType", res.data.car.carType);
        }
      } catch (error) {
        console.log(error);
      }

    }

    const getCars = async () => {
      try {
        const res = await axios.get(`${ApiUrl}/getall`, {
          headers:{
            Authorization: `Bearer ${token}` 
          }
        })
  
        if (res.data.success) {
          setProfiles(res.data.cars)
        }
      } catch (error) {
        console.log(error);
      }
      
    }

    

    

    useEffect(() => {
      
      getCars();
    }, [getCars])

  return <div>
    {addcar && <AddCar setAddcar={setAddcar}/>}
    <hr />
    <div className="d-flex flex-column flex-lg-row gap-4  justify-content-between my-4 ">
        <div className="settings-car text-center text-md-start  w-100">
            <h2>Car profile</h2>
            <p>Update your information</p>
            <button onClick={handleAddCar}>Add new car</button>
        </div>
        <div className="settings-car-form w-100">
            <p>Profiles</p>
            <div className="d-flex gap-3  flex-wrap my-4 ">
                {
                  profiles.map((profile) => {
                    const {_id, carNickname, profileColor} = profile
                    return (
                      <div key={_id} className="profile-car">
                        <button type="button" onClick={() => getACar(_id)} className="btn " style={{backgroundColor: handleprofilecolor(profileColor), color: profileColor}}>{carNickname}</button>
                      </div>
                    )
                  })
                }
            </div>

            <div>
                <form action="" className="d-flex flex-column gap-4">
                {successMessage && <p>{successMessage}</p>}

                    <div>
                        <label htmlFor="" className="mb-2">Car Nickname</label>
                        <input type="text" {...register("carNickname")} className="w-100"/>
                    </div>

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
                      checked={field.value === 'sedan'}
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
                      checked={field.value === 'pickup'}
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
                      checked={field.value === 'suv'}
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
                <div>
                    <label htmlFor="" className="my-2">
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
                        checked={field.value === "#FFC245"}
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
                        checked={field.value === "#CA5765"}
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
                        checked={field.value === "#01BB9C"}
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

            <div className="d-flex gap-2 mt-4 settings-btn">
              <button type="button" onClick={handleSubmit(onSubmit)}>Save changes</button>
              <button type="button" onClick={() => handleDelete(editingCarId)}>Delete Car</button>
            </div>
            </div>
                </form>
            </div>
        </div>
    </div>
    <hr />
  </div>;
};

export default CarProfile;
