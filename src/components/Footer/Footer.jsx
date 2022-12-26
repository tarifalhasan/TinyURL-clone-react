import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4  bg-black fixed top-92 left-0 right-0 z-50 flex md:items-center md:justify-between md:p-3 ">
        <span className="text-lg text-gray-500 sm:text-center">
          © 2022
          <a href="/" className="hover:underline">
            TARIF™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/licensing" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/cantact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
