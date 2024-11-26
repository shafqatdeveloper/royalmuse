"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

type SlideType = {
  heading: string;
  description: string;
  price: Number;
  slideImg: any;
};

type AboutCarouselProps = {
  slides: SlideType[];
};

const AboutCarousel: React.FC<AboutCarouselProps> = ({ slides }) => {
  return (
    <div className="w-full pb-12 pt-6 flex flex-col items-center">
      <div className="w-[95%] sm:w-[80%] md:w-[60%]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={6000}
          transitionTime={1000}
          stopOnHover
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-secondary justify-center gap-8 h-[70vh] px-4">
              {/* Text Content */}
              <div className="flex flex-col items-start text-left gap-4 w-full md:w-1/3">
                <h1 className="text-3xl sm:text-4xl font-bold text-black">
                  {slide.heading}
                </h1>
                <p className="text-lg text-gray-600">{slide.description}</p>
                <p className="text-xl font-semibold text-[#b19772]">
                  Price: ${String(slide.price)}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[50vh]">
                <Image
                  src={slide.slideImg}
                  alt={slide.heading}
                  className="object-contain"
                  fill
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutCarousel;
