/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import { BiSolidOffer } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import HealthcareServicesDropdown from '../Components/HealthcareServicesDropdown';
import SearchBox from '../Components/SearchBox';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className="text-gray-600 body-font max-w-[1540px] mx-auto sticky top-0 z-10 bg-[#f4f3f3] rounded-2xl my-2">
        <div className="container mx-auto flex p-2 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="title-font font-medium text-gray-900 flex items-center"
          >
            <span className="ml-3 text-xl">CureConnect</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:w-[36%] flex-wrap items-center text-base md:ml-auto">
            <a href="#" className="mr-5 text-[#21265f] ">Doctors</a>
            <a href="#" className="mr-5 text-[#21265f] ">Patient Portal</a>
            <a href="#" className="mr-5 text-[#21265f] ">Book Appointment</a>
            <a href="#" className=" text-[#21265f]">Blog</a>
          </nav>

          <div className=' hidden md:block'>

            <SearchBox />
          </div>


          {/* Desktop Button */}
          {/* Dekstop buttons */}
          <div className="hidden lg:inline-flex lg:w-[22%] lg:justify-end gap-3 items-center">

            <HealthcareServicesDropdown />
            <BiSolidOffer size={24} />
            <CiShoppingCart size={24} />
            <CiUser size={24} />
            {/* <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? <FiX color='#21265f' size={24} /> : <FiMenu color='#21265f' size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        style={{ zIndex: '99' }}
        className={`fixed inset-y-0 right-0 w-3/4 bg-white shadow-xl transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-5">
          <button
            className="text-gray-600 mb-4"
            onClick={toggleDrawer}
          >
            <FiX size={24} />
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-lg hover:text-gray-900">First Link</a>
            <a href="#" className="text-lg hover:text-gray-900">Second Link</a>
            <a href="#" className="text-lg hover:text-gray-900">Third Link</a>
            <a href="#" className="text-lg hover:text-gray-900">Fourth Link</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
