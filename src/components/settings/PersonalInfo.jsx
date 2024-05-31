import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { formatPhoneNumberIntl } from 'react-phone-number-input'
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const PersonalInfo = () => {
  const [profiles, setProfiles] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const profile = Cookies.get("token");

  let decode = null;

  if (profile) {
    decode = jwtDecode(profile);
  }

  const getAUser = async () => {
    const {
      data: { user },
    } = await axios(`https://intern-project-mukc.onrender.com/details/${decode?.user.id}`);

    setProfiles(user);
    setValue("fullname", user?.fullname);
    setValue("email", user?.email);
    setValue("phoneNumber", user?.phoneNumber);
    setValue("location", user?.location);
    setValue("contactPreferences", user?.contactPreferences);


  };

  console.log(profiles?.contactPreferences);

  useEffect(() => {
    getAUser();
  }, []);

  const handlePatch = async (data) => {
    const { data: updateUser } = await axios.patch(
      `https://intern-project-mukc.onrender.com/profile/${decode?.user.id}`,
      { ...data }
    );

    if (updateUser) {
      setSuccessMessage("User successfully updated");

      const updated =   setTimeout(() => {
        setSuccessMessage("")
      }, 3000);

      return () => clearTimeout(updated)
    }
  };

  

  return (
    <main>
      <form
        className="personal-main flex-column flex-lg-row"
        onSubmit={handleSubmit(handlePatch)}
      >
        <section className="p-section1 ">
          <h3> Personal Information</h3>
          <p> Update your information</p>
          <div className="setDivmain2">
            <button className=" fw-medium">Save Changes</button>
          </div>
        </section>
        <section className="p-section2 ">
          <div className="mb-4 div-form2">
            {successMessage && <p>{successMessage}</p>}
            <label htmlFor="" className="label">
              {" "}
              Full Name{" "}
            </label>
            <input
              type="text"
              className="rounded-3 w-100 px-4 input"
              {...register("fullname")}
            />
          </div>
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type="email"
              className="rounded-3 px-4 w-100 input"
              {...register("email")}
            />
          </div>
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              Phone Number
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              {...register("phoneNumber")}
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
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              Location
            </label>
            <input
              type="text"
              className="rounded-3 px-4 input w-100 "
              {...register("location")}
            />
          </div>

          <div className="mt-4">
            <h6>How would you like to be contacted?</h6>
            <section className="d-flex gap-2 gap-md-3 ">
              <Controller
                name="contactPreferences"
                control={control}
                // defaultValue={profiles?.contactPreferences}
                render={({ field: { value, onChange } }) => (
                  <>
                    <input
                      type="radio"
                      id="phoneNumber"
                      value="phone"
                      // {...field}
                      checked={value == "phone"}
                      onChange={onChange}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>

                    <input
                      type="radio"
                      id="email"
                      value="email"
                      // {...field}
                      checked={value == "email"}
                      onChange={onChange}
                    />
                    <label htmlFor="email">Email</label>

                    <input
                      type="radio"
                      id="both"
                      value="both"
                      // {...field}
                      checked={value == "both"}
                      onChange={onChange}
                    />
                    <label htmlFor="both">Both</label>
                  </>
                )}
              />
            </section>
          </div>
        </section>
      </form>
    </main>
  );
};

export default PersonalInfo;
