/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className="text-gray-600 body-font max-w-[1540px] mx-auto sticky top-0 z-10 bg-[#e5e5e5]">
        <div className="container mx-auto flex flex-wrap p-2 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="title-font font-medium text-gray-900 flex items-center"
          >
            <span className="ml-3 text-xl">CureConnect</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href="#" className="mr-5 hover:text-gray-900">First Link</a>
            <a href="#" className="mr-5 hover:text-gray-900">Second Link</a>
            <a href="#" className="mr-5 hover:text-gray-900">Third Link</a>
            <a href="#" className="hover:text-gray-900">Fourth Link</a>
          </nav>

          {/* Desktop Button */}
          {/* Dekstop buttons */}
          <div className="hidden lg:inline-flex lg:w-2/5 lg:justify-end">
            <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
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
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
      style={{zIndex:'99'}}
        className={`fixed inset-y-0 right-0 w-3/4 bg-white shadow-xl transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
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
