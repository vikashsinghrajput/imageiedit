import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <div>
        <nav className="bg-white  dark:bg-white fixed w-full top-0 left-0   z-10 ,">
        <header className="py-4 md:py-6 ">
    <div className="container px-4 mx-auto sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between fixe">
        <div className="flex-shrink-0">
          <a
            href="#"
            title=""
            className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            <img
              className="w-auto h-8"
              src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="text-gray-900">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
          <a
            href="#"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            {" "}
            Solutions{" "}
          </a>
          <a
            href="#"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            {" "}
            Industries{" "}
          </a>
          <a
            href="#"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            {" "}
            Fees{" "}
          </a>
          <a
            href="#"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            {" "}
            About Rareblocks{" "}
          </a>
        </div>
        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
          <a
            href="#"
            title=""
            className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            {" "}
            Sign in{" "}
          </a>
          <a
            href="#"
            title=""
            className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Create free account
          </a>
        </div>
      </div>
    </div>
  </header>
      </nav>
    </div>
  )
}

export default Navbar
