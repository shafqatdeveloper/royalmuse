"use client";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLocalPhone, MdOutlineWhatsapp } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const inputRef = useRef(null);
  const pathname = usePathname(); // Get the current route

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-16 bg-primary flex items-center justify-center">
        <h1 className="text-lg font-medium tracking-wide">
          Welcome to <span className="font-bold uppercase">RoyalMuse</span>
        </h1>
      </div>
      <div className="h-32 bg-background text-black px-4 w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-5 h-full w-full sm:w-[80%] md:w-[70%]">
          <div className="flex items-center w-full justify-between gap-2">
            <h1 className="text-2xl hidden md:block font-bold font-sans">
              RoyalMuse
            </h1>
            <div className="border rounded-full flex items-center w-full md:w-2/4">
              <input
                type="text"
                ref={inputRef}
                placeholder="Search for Fragrances"
                className="px-4 py-2.5 bg-transparent w-full outline-none"
              />
              <div
                onClick={handleIconClick}
                className="bg-primary flex items-center justify-center h-full rounded-r-full p-2 ml-2"
              >
                <AiOutlineSearch className="text-white w-12 h-8" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="tel:923104527120"
              className="bg-primary rounded-full text-white p-2"
            >
              <MdOutlineLocalPhone size={30} />
            </Link>
            <Link
              href="https://wa.me/923104527120"
              target="_blank"
              className="bg-green-500 rounded-full text-white p-2"
            >
              <MdOutlineWhatsapp size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 bg-secondary h-16 flex items-center justify-center">
        <div className="flex items-center gap-8 uppercase font-semibold w-[95%] sm:w-[80%] md:w-[70%]">
          {(pathname === "/" || pathname === "/shop") && (
            <div className="md:flex items-center hidden gap-2 bg-primary text-white px-7 py-5">
              <RiMenu2Fill /> All Categories
            </div>
          )}
          <Link href={"#TopPicks"}>Home</Link>
          <Link href={"#Shop"}>Shop</Link>
          <Link href={"#About"}>About</Link>
          <Link href={"#Conatct"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
