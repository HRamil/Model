'use client'

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

//style
import './mySlider.scss'

//img
import img from '@/images/img.jpg'

export default function MySlider() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mySlider">
      <Slider {...settings}>
        <div className="mySlide"> 
         <Image src={img} alt=""/>
        </div>
        <div className="mySlide"> 
         <Image src={img} alt=""/>
        </div>
        <div className="mySlide"> 
         <Image src={img} alt=""/>
        </div>
        <div className="mySlide"> 
         <Image src={img} alt=""/>
        </div>
      </Slider>
    </div>
  );
}