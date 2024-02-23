"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ban1 from "../../public/banner/1.jpg";
import ban2 from "../../public/banner/2.jpg";
import ban3 from "../../public/banner/3.jpg";

const BannerCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-10"></div>
        <Image src={ban1} alt="Slide 1" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
          <h2 className="text-2xl font-bold">Maldive Islands Resort-Scenery</h2>
          <p className="text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quo
            voluptatum quia vitae optio fugit asperiores ad accusamus eaque
            consequatur.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-10"></div>
        <Image src={ban2} alt="Slide 2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
          <h2 className="text-2xl font-bold">Bungalow, Ocean, Pool, Palm, Resort</h2>
          <p className="text-xs lg:text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quo
            voluptatum quia vitae optio fugit asperiores ad accusamus eaque
            consequatur.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-10"></div>
        <Image src={ban3} alt="Slide 3" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
          <h2 className="text-2xl font-bold">Beach Bungalow</h2>
          <p className="text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quo
            voluptatum quia vitae optio fugit asperiores ad accusamus eaque
            consequatur.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
