import React, { useState } from "react";
import "../../Style/Home/Hero.css";
import InteriorCleaningCarChair from "../../assets/InteriorCleaningCarChair.svg";
import InteriorCleaningStery from "../../assets/InteriorCleaningStery.svg";
import loved from "../../assets/LovedByManyComentImg.svg";
import heroImg from "../../assets/HerocarImage.png";
import drowIcon from "../../assets/DropDownIcon.svg";
import Featuredservices from "../featuredservices/Featuredservices";
import Location from "../Location/Location";
import Logout from "../Modals/Logout";

const Hero = () => {
  return (
    <div>
      <div className="Hero-bodybackground mb-5">
        <div
          className="d-lg-flex  justify-content-between my-1"
          
        >
          <div className="ms-lg-auto mt-5 p-4 container "style={{ maxWidth: "800px", marginLeft: "auto" }}>
            <div className="d-flex justify-content-lg-start  justify-content-center  align-items-center">
              <p className="Hero-p py-1 px-3 rounded-4 text-center text-lg-start">
                Professional Cleaning Service Company
              </p>
            </div>

            <h1 className="Hero-h1 text-center text-lg-start ">
              <span className="d-block" style={{ color: "#5497DD" }}>
                A Car Wash
              </span>
              Delivered to your door.
            </h1>

            <Location />
          </div>

          <div className="d-md-flex justify-content-end">
            <img
              src={heroImg}
              alt=""
              className="img-fluid Hero-image d-none d-lg-block"
            />
          </div>
        </div>
      </div>

      <div className="d-none d-lg-block my-5">
        <div className="d-lg-flex  justify-content-center ">
          <div style={{ width: "12rem" }}>
            <p className="mt-3 border border-primary border-1 rounded-3 text-center">
              2013
            </p>
            <h3 style={{ fontSize: "16px", color: "#003770" }}>
              HOW WE STARTED
            </h3>
            <p style={{ fontSize: "12px", color: "#8A9298;" }}>
              We provide the finest full service Car Wash and Auto Detailing in
              Calgary, Edmonton, and Kelowna
            </p>
          </div>
          <div
            className=" "
            style={{
              height: "1px",
              width: "4rem",
              margin: "1.7rem 0 0 0",
              border: "1px solid black",
            }}
          ></div>
          <div style={{ width: "14rem" }}>
            <p className="mt-3 border border-primary border-1 rounded-3 text-center">
              2013
            </p>
            <h3 style={{ fontSize: "16px", color: "#003770" }}>
              CAR WASH AWARD
            </h3>
            <p style={{ fontSize: "12px", color: "#8A9298;" }}>
              We provide the finest full service Car Wash and Auto Detailing in
              Calgary, Edmonton, and Kelowna
            </p>
          </div>
          <div
            className=" "
            style={{
              height: "1px",
              width: "4rem",
              margin: "1.7rem 0 0 0",
              border: "1px solid black",
            }}
          ></div>
          <div style={{ width: "12rem" }}>
            <p className="mt-3 border border-primary border-1 rounded-3 text-center">
              2013
            </p>
            <h3 style={{ fontSize: "16px", color: "#003770" }}>
              30,000+ CARS WASHED
            </h3>
            <p style={{ fontSize: "12px", color: "#8A9298;" }}>
              We provide the finest full service Car Wash and Auto Detailing in
              Calgary, Edmonton, and Kelowna
            </p>
          </div>
          <div
            className=" "
            style={{
              height: "1px",
              width: "4rem",
              margin: "1.7rem 0 0 0",
              border: "1px solid black",
            }}
          ></div>
          <div style={{ width: "12rem" }}>
            <p className="mt-3 border border-primary border-1 rounded-3 text-center">
              2013
            </p>
            <h3 style={{ fontSize: "16px", color: "#003770" }}>COVID AWARD</h3>
            <p style={{ fontSize: "12px", color: "#8A9298;" }}>
              We provide the finest full service Car Wash and Auto Detailing in
              Calgary, Edmonton, and Kelowna
            </p>
          </div>
        </div>
      </div>
      {/* <Logout /> */}

      <div className="container"><hr /></div>
      <div className="my-5">
        <div className="d-flex justify-content-center text-center">
          <div className="">
            <h3>What do we offer?</h3>
            <h1 className="Hero-what-we-do">We offer excellent services</h1>
            <p>
              Our team is well trained and highly qualified experts in
              professional cleaning and luxury services to keep all types of
              vehicles clean
            </p>
          </div>
        </div>
        
        <Featuredservices />
       
      </div>
    </div>
  );
};

export default Hero;