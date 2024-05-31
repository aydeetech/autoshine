import React, { useState } from "react";
import "../../Style/Home/Hero2.css";
import OurWorkimage from "../../assets/OurWorkStages.svg";
import OurWorkCar2 from "../../assets/OurWorkCarImage2.svg";
import OurWorkPhone from "../../assets/OurWorkPhoneImage.svg";
import OurWorkHand from "../../assets/OurWorkHand.svg";
import OurWorkCar from "../../assets/OurWorkCarImage.svg";
import WhyYouShouldChooseUsImage from "../../assets/WhyYouShouldChooseUs.svg";
import { Link } from "react-router-dom";
import Whyus from "../whyus/Whyus";

const Hero2 = () => {
  

  return (
    <div className="bg-white" style={{maxWidth: "1600px", margin: "auto"}}>
      <div className="container">
        <hr />
        <div className="my-5">
          <h1 className="Hero2-OurWorkStage-h1 text-center text-md-start">
            Our work Stages
          </h1>
          <div className="d-lg-flex" style={{ position: "relative" }}>
            <div>
              <img
                src={OurWorkimage}
                alt=""
                style={{ borderRadius: "20px 0 0 0", maxWidth: "713px" }}
                className="object-fit-cover ourwork-img"
              />
            </div>
            <div className="d-lg-flex">
              <div
                className="p-3 ourwork-text"
                style={{ border: "1px solid", borderRadius: "0 20px 0 0" }}
              >
                <p className="text-primary " style={{ fontSize: "24px" }}>
                  Our team is well trained and highly qualified experts in
                  professional cleaning and high luxury services to keep all
                  types of premises vehicles clean.
                </p>

                <Link to='/signup'>
                <button
                  className="Hero2-button-Get-Started rounded border px-5 fs-4 border-1 border-primary mt-4"
                >
                  Get Started
                </button>
                </Link>

              </div>
              <img
                src={OurWorkCar2}
                alt=""
                style={{ position: "absolute", right: "0px", bottom: "0px" }}
              />
            </div>
          </div>

          <div className="OurWorkStage text-white d-none d-lg-flex justify-content-between">
            <div className="div1 position-relative d-flex flex-column overflow-hidden">
              <p className="text-primary fs-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                tenetur.
              </p>
              <h1 className="d-flex justify-content-between px-3 py-3">
                <span>Select your location</span> <span>1</span>
              </h1>
            </div>

            <div className="div2 position-relative ">
              <h1 className="d-flex justify-content-between px-3 py-3">
                <span className="fs-4">Choose your service</span> <span>2</span>
              </h1>
              <p className="text-primary position-absolute bottom-0 fs-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                tenetur.
              </p>
            </div>
            <div className="div3 position-relative overflow-hidden  ">
              <p className="text-primary position-absolute top-0 fs-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                tenetur.
              </p>
              <h1 className="position-absolute d-flex justify-content-between px-4 py-3 bottom-0 end-0 start-0 ">
                <span>Your pro arrives</span> <span>3</span>
              </h1>
            </div>
          </div>
        </div>

        <hr />

    <Whyus />
      </div>
     
    </div>
  );
};

export default Hero2;
