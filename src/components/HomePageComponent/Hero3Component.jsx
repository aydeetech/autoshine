import React from "react";
import '../../Style/Home/HomePageComponent.css'
import LovedByManyComentImg from "../../assets/LovedByManyComentImg.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

const Hero3Component = () => {
  return (
    <div className="">


      <div className="pb-3 d-flex align-items-center justify-content-between mx-md-5 mx-2  px-2">
        <h1 className="text-center w-100" style={{ fontSize: "32px", color: "#003770" }}>Loved By Many</h1>
       
      </div>


      <div
        className="Hero3-component-LovedByManyComent d-none d-md-block"
      >

        <div className="testimonial-container d-grid ">
        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{ fontSize: "12px"}}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center  gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{ fontSize: "12px" }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{ fontSize: "12px" }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm"
          style={{ fontSize: "12px"}}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        <div
          className="testimonial-wrapper p-3 rounded shadow-sm d-md-block d-lg-none d-xxl-block"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3 ">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div>


        


        </div>
      </div>

      <div className="w-100 testimonial-carousel d-block d-md-none">
      <Swiper
      spaceBetween={130}
      slidesPerView={2}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide><div
          className="testimonial-wrapper p-3 rounded shadow-md"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div></SwiperSlide>
      <SwiperSlide> <div
          className="testimonial-wrapper p-3 rounded shadow-md"
          style={{ fontSize: "12px"}}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div
          className="testimonial-wrapper p-3 rounded shadow-md"
          style={{
            fontSize: "12px",
            backgroundColor: " #E6F0FA",
          }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center  gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div
          className="testimonial-wrapper p-3 rounded shadow-md"
          style={{ fontSize: "12px" }}
        >
          <p>
            We provide the finest full service Car Wash and Auto Detailing in
            Calgary, Edmonton, and Kelowna
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={LovedByManyComentImg} alt="" />
            <h5 style={{ fontSize: "14px" }}>Customer Name</h5>
          </div>
        </div></SwiperSlide>
    </Swiper>
      </div>
    </div>
  );
};

export default Hero3Component;
