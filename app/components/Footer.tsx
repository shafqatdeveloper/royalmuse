import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const date = new Date();
  return (
    <div className="w-full flex flex-col mt-20  items-center justify-center">
      <div className="flex items-center text-[#555555] gap-16">
        <Link
          className="p-2 hover:bg-primary hover:rounded-full hover:text-white transition-all duration-300"
          href={"https://instagram.com"}
          target="_blank"
        >
          <FaInstagram size={25} />
        </Link>
        <Link
          className="p-2 hover:bg-primary hover:rounded-full hover:text-white transition-all duration-300"
          href={"https://facebook.com"}
          target="_blank"
        >
          <FaFacebookF size={25} />
        </Link>
        <Link
          className="p-2 hover:bg-primary hover:rounded-full hover:text-white transition-all duration-300"
          href={"https://twitter.com"}
          target="_blank"
        >
          <FaTwitter size={25} />
        </Link>
      </div>
      <h1 className="pt-10 text-center pb-4 text-[#555555]">
        Copyright © {String(date.getFullYear())}{" "}
        <Link href={"/"} className="text-primary font-semibold">
          ROYALMUSE
        </Link>{" "}
        . All rights reserved
      </h1>
      <div className="bg-primary w-full text-center py-2 text-lg text-white">
        <h1>
          Developed by{" "}
          <Link
            href={"https://github.com/shafqatdeveloper"}
            className="font-bold border-b-2"
            target="_blank"
          >
            MSR
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
