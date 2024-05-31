import AddCar from "../components/addnewcar/addCar";
import CarProfile from "../components/settingCarProfile/CarProfile";
import PersonalInfo from "../components/settings/PersonalInfo";
import Security from "../components/settings/Security";
import "../Style/Settings.css";

const Settings = () => {
  return (
    <main className="setting-container mt-5    container mx-auto py-1">
      {/* <AddCar /> */}
      {/* <form> */}
      <section className="d-flex mt-3 flex-column flex-md-row justify-content-between align-items-center ">
        <div className="setDivmain">
          <h2 className="mb-0 text-center text-md-start ">Profile Settings</h2>
          <p className="fw-medium" style={{ color: "#8A9298" }}>
            Update your profile information here
          </p>
        </div>
        {/* <div className="setDivmain2">
          <button className=" fw-medium">Save Changes</button>
        </div> */}
      </section>

      <section>
        <PersonalInfo />
      </section>

      <section>
        <CarProfile />
      </section>
      <section>
        <Security />
      </section>
      {/* </form> */}
    </main>
  );
};

export default Settings;
