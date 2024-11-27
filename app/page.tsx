"use client";
import React, { Fragment } from "react";
import TopPickCarousel from "./components/TopPicksCarousel";
import Img1 from "../public/static/perfume1.png";
import Img2 from "../public/static/perfume2.png";
import Img3 from "../public/static/perfume3.png";
import Img4 from "../public/static/perfume4.png";
import DealsofDay from "./components/DealsofDay";
import Shop from "./components/Shop";
import GuaranteeBanner from "./components/GuaranteeBanner";

const page = () => {
  const slides = [
    {
      heading: "The Man Company",
      description: "Best Selling Fragrance",
      slideImg: Img1,
      price: 100,
    },
    {
      heading: "Eternity Now",
      description: "Best Selling",
      slideImg: Img2,
      price: 350,
    },
    {
      heading: "Heavenly Aroma",
      description: "Luxurious and Long-lasting",
      slideImg: Img3,
      price: 250,
    },
    {
      heading: "Floral Bliss",
      description: "Perfect for Any Occasion",
      slideImg: Img4,
      price: 180,
    },
  ];
  return (
    <Fragment>
      <div className="mt-14 flex flex-col items-center w-full justify-center">
        <h1 className="text-3xl font-bold text-center border-b-4 border-b-primary w-max">
          Top Picks
        </h1>
        <TopPickCarousel slides={slides} />
        <h1
          id="Shop"
          className="text-3xl font-bold mt-14 text-center border-b-4 border-b-primary w-max"
        >
          Deals of the Day
        </h1>
        <DealsofDay />
        <Shop />
        <GuaranteeBanner />
      </div>
    </Fragment>
  );
};

export default page;
