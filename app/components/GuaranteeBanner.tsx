import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { IoIosLock } from "react-icons/io";

const GuaranteeBanner: React.FC = () => {
  return (
    <div className="w-full bg-primary my-20 h-auto flex items-center justify-center">
      <div className="w-[95%] py-16 sm:w-[80%] text-white md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
        <div className="flex items-center gap-4">
          <GoRocket size={100} />
          <div className="space-y-2">
            <h1 className="text-lg font-bold uppercase tracking-wider">
              Free Delivery
            </h1>
            <p className="text-sm">
              Free Delivery on all order with price more than PKR 5000
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <GiReturnArrow size={100} />
          <div className="space-y-2">
            <h1 className="text-lg font-bold uppercase tracking-wider">
              Money Guarantee
            </h1>
            <p className="text-sm">
              7 Days money back guarantee no question asked!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoIosLock size={100} />
          <div className="space-y-2">
            <h1 className="text-lg font-bold uppercase tracking-wider">
              Online Supprt 24/7
            </h1>
            <p className="text-sm">
              We’re here to support to you. Let’s shopping now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBanner;
