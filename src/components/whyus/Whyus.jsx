import React, { useState } from "react";
import expert from "../../assets/expert.svg";
import mcqueen from "../../assets/mcqueen.svg";
import fastwork from "../../assets/fast-work.svg";
import flexible from "../../assets/flexible.svg";

const Whyus = () => {
  const [image, setImage] = useState(expert);

  const expertOnGround = () => {
    setImage(expert);
  };
  const friendPersonal = () => {
    setImage(mcqueen);
  };
  const fastWork = () => {
    setImage(fastwork);
  };
  const flexibleHours = () => {
    setImage(flexible);
  };
  return (
    <div>
      {" "}
      <div className="container flex-column flex-lg-row d-flex justify-content-between gap-5 align-items-center py-5">
        <div className="Hero2-WhyYouShouldChooseUs">
          <h1 className="Hero2-WhyYouShouldChooseUs-h1 text-center text-md-start">
            Why You Should Choose Us
          </h1>
          <p
            className="mt-4  text-center text-md-start"
            style={{ fontSize: "18px" }}
          >
            We understand the importance of a clean and healthy environment.
            Whether it's your home, office, or any other space, maintaining
            cleanliness is vital for your well-being and productivity.
          </p>
          <div className="WhyYouShouldChooseUs mx-auto">
            <div
              className="chooseus-container d-grid gap-1 w-100 my-3"
              style={{ }}
            >
              <p
                onClick={() => expertOnGround()}
                className="d-flex gap-1 align-items-center rounded my-2 p-3 border border-primary border-1"
                style={{ fontSize: "16px", width: "14rem" }}
              >
                <div
                  style={{ height: "0.8rem", width: "0.8rem" }}
                  className="rounded-3"
                ></div>
                Expert on ground
              </p>
              <p
                onClick={() => friendPersonal()}
                className="d-flex gap-3 align-items-center rounded my-2 p-3 border border-primary border-1"
                style={{ fontSize: "16px", width: "14rem" }}
              >
                <div
                  style={{ height: "0.8rem", width: "0.8rem" }}
                  className="rounded-3"
                ></div>
                Friend Personal
              </p>
              <p
                onClick={() => fastWork()}
                className="d-flex gap-3 align-items-center rounded my-2 p-3 border border-primary border-1"
                style={{ fontSize: "16px", width: "14rem" }}
              >
                <div
                  style={{ height: "0.8rem", width: "0.8rem" }}
                  className="rounded-3"
                ></div>
                Fast Work
              </p>
              <p
                onClick={() => flexibleHours()}
                className="d-flex gap-3 align-items-center rounded my-2 p-3 border border-primary border-1"
                style={{ fontSize: "16px", width: "14rem" }}
              >
                <div
                  style={{ height: "0.8rem", width: "0.8rem" }}
                  className="rounded-3"
                ></div>
                Flexible Hours
              </p>
            </div>
          </div>
        </div>
        <div className="service-main-cta d-none d-md-block ">
          <div>
            <img src={image} alt="" className="w-100" />
          </div>

          <div className="d-flex justify-content-between gap-4 w-100 align-items-center">
            <h2 className="text-start">
              Leave the Mess to Our Experts - Schedule Cleaning Appointment Now!
            </h2>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
