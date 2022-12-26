import React from "react";
import { Link } from 'react-router-dom';
import Label from "../Label/Label";
import Input from "./../Input/Input";

const SignUp = () => {
  const signUpData = [
    {
      name: `name`,
      Placeholder: `Enter your name`,
      Type: "text",
    },
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
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
        <form>
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
              to="/login"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
      <p className="pb-20"></p>
    </>
  );
};

export default SignUp;
