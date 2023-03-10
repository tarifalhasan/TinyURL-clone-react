import React from "react";
import { Link } from "react-router-dom";
import Label from "../Label/Label";
import Input from "./../Input/Input";

const SignIn = () => {
  const signUpData = [
    {
      name: `Email`,
      Placeholder: `Enter your Email`,

      Type: "email",
    },
    {
      name: `Password`,

      Placeholder: `Enter your Password`,

      Type: "password",
    },
  ];

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-5">
        <form className="">
          <div className="text-center py-3">
            <h2 className="tinyurl text-4xl">TinyURL</h2>
            <p className="text=white">Welcome to TinyURL</p>
          </div>
          {signUpData.map((data, index) => (
            <div key={index} className="form-group mb-6">
              <Label name={data.name} />
              <Input Type={data.Type} Placeholder={data.Placeholder} />
            </div>
          ))}
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign Up
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already a user?
            <Link
              to="/sign-up"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Sign Up
            </Link>
          </p>
        </form>
      
      </div>
     
      <p className="pb-[124px]"></p>
    </>
  );
};

export default SignIn;
