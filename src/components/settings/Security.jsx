import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

const Security = () => {
  const { register, handleSubmit } = useForm();

  const profile = Cookies.get("token");

  console.log(profile);

  const handleUpdate = async (data) => {
    const { data: updated } = await axios.post(
      "https://intern-project-mukc.onrender.com/updatePassword",
      data,
      { headers: { Authorization: `Bearer ${profile}` } }
    );

    console.log(updated);
  };

  return (
    <main className="personal-main flex-column flex-lg-row ">
      <section className="p-section1 ">
        <h3> Security</h3>
        <p> Update your information</p>
      </section>
      <section className="p-section2 ">
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="setDivmain2">
            <button className=" fw-medium">Save Changes</button>
          </div>
          
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              {" "}
              Current Password{" "}
            </label>
            <input
              type="password"
              placeholder=""
              className="rounded-3 w-100 read-only px-4 input"
              {...register("password")}
            />
          </div>
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              New Password
            </label>
            <input
              type="password"
              className="rounded-3 w-100 px-4 input"
              {...register("NewPassword")}
            />
          </div>
          <div className="mb-4 div-form2">
            <label htmlFor="" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              className="rounded-3 w-100 px-4 input"
              {...register("NewPassword")}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Security;
