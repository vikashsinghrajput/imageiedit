import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line, RiMenuUnfold4Fill } from "react-icons/ri";
const Navbar = () => {

  const hover =
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Solutions",
      path: "/solutions",
    },
    {
      id: 3,
      name: "Try Yourself",
      path: "/try-yourself",
    },

    {
      id: 4,
      name: "Pricing",
      path: "/Pricing",
    },
  ];
  return (
    <div>
      <nav className="bg-white  dark:bg-white fixed w-full top-0 left-0   z-10 ,">
        <header className="py-4 md:py-6 ">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between fixe">
              <div className="flex-shrink-0">
                <a
                  href="#"
               
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
                {isMobileMenuOpen ? (
                  <button className="hidden"> Hide </button>
                ) : (
                  <button
                    type="button"
                    className="text-gray-900"
                    onClick={toggleMobileMenu}
                  >
                  <RiMenu3Line   className="w-7 h-7" />
               
                  </button>
                )}
              </div>
              <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <NavLink className={Hover} to={item.path}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </div>
              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                <NavLink
                  to=""
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Sign in
                </NavLink>
                <a
                  href="#"
                  title=""
                  className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Create free account
                </a>
              </div>
              {/* Mobile responsvie */}
              <div
                className={`fixed top-0 left-0 right-0 min-h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }  z-50`}
              >
                <div className="flex flex-row items-center border-b pb-4">
                  <Link
                    href="/"
                    className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
                  >
                    NEXTNEWS
                  </Link>
                  <button
                    onClick={toggleMobileMenu}
                    className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col h-full gap-4 p-4">
                  {navItems.map((item, index) => (
                    <li
                      key={item.id}
                      className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                    >
                      <NavLink
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        href={item.path}
                        className="flex items-center"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                  <li className="mt-4">
                    <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">
                      Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
