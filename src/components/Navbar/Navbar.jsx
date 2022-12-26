import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const handleNavToggle = () => {
        setShowNav(!showNav);
    }

  
  return (
    <>
      <nav className="bg-transparent sticky	 top-0 left-0 right-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-4xl text-white hover:underline underline-offset-8 font-semibold whitespace-nowrap  tinyurl">
            TinyURL
            </span>
          </Link>
          <button
          onClick={()=> handleNavToggle()}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`${ showNav ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col  mt-4 border border-gray-100 rounded-lg bg-cyan-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
              <li className="py-2 hover:bg-cyan-500 rounded-lg">
                <Link
                  to="/myurls"
                  className="block  pl-3 pr-4 text-base text-white font-bold"
                  aria-current="page"
                  onClick={()=> handleNavToggle()}
                >
                  My Urls
                </Link>
              </li>
              <li className="py-2 hover:bg-cyan-500 rounded-lg">
                <Link
                  to="/plans"
                  className="block  pl-3 pr-4 text-base text-white font-bold"
                  onClick={()=> handleNavToggle()}
                >
                  Plans
                </Link>
              </li>
              <li className="py-2 hover:bg-cyan-500 rounded-lg">
                <Link
                  to="/features"
                  className="block  pl-3 pr-4 text-base text-white font-bold"
                  onClick={()=> handleNavToggle()}
                >
                  Features
                </Link>
              </li>
              <li className="py-2 hover:bg-cyan-500 rounded-lg">
                <Link
                  to="/sign-up"
                  className="block  pl-3 pr-4 text-base text-white font-bold"
                  onClick={()=> handleNavToggle()}
                >
                  Sign Up
                </Link>
              </li>
              <li className="py-2 hover:bg-cyan-500 rounded-lg">
                <Link
                  to="/login"
                  className="block  pl-3 pr-4 text-base text-white font-bold"
                  onClick={()=> handleNavToggle()}
                >
                  Sign In
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
