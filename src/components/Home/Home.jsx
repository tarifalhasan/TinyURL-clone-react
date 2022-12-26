import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (

          
    <div className="mx-auth px-12 py-14">
      <div className="block md:flex lg:flex w-full md:w-3/4 pb-20">
        {/* right */}
        <div className="basis-3/6	">
           <form action="submit" className="bg-white rounded-md p-4">
           <h2 className="text-xl pb-5">Enter a long URL to make a TinyURL</h2>
          <input
            className="outline-0 border-2 rounded-md w-full text-lg p-2 border-slate-700	"
            type="search"
          />
          <label className="text-lg py-2">Customize your link</label>
          <div className="flex border-2 rounded-md border-slate-700">
            <select name="tnyurl.com" className="bg-gray-50 text-gray-900 text-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="">
              <option value="option-1">option-1</option>
              <option value="option-2">option-2</option>
              <option value="option-3">option-3</option>
              <option value="option-4" >
                    <button className="bg-green-600 px-8 ">Add Domain</button>
    
              </option>
            </select>

            <div className="border-l-2 border-slate-700 ">
              <input
                className="p-2 outline-0 w-full h-full"
                type="text"
                placeholder="Alias"
              />
            </div>
          </div>
          <button className="bg-green-600 w-full py-3 text-white text-xl rounded-lg mt-5 hover:bg-green-800" type="submit">Make TinyUrl</button>
           </form>
           <p className="text-white w-full md:w-2/3 mt-7 font-bold">
           By clicking Make TinyURL, I agree to the <a href="/terms_of_service">Terms of Service</a>, <a href="/privacy_policy">Privacy Policy</a> and Use of Cookies.
           </p>
        </div>
        <div className="ml-0 md:ml-12 text-white py-2 md:py-0">
          <h2 className="text-md">Welcome to</h2>
          <h1 className="text-4xl font-bold tinyurl">TinyURL</h1>
          <p className="py-3 text-xl font-bold">Create a free account to enjoy:</p>
          <ul className="text-xl pb-4">
            <li className="flex items-center"> <BiCheck/> Easy Link Shortening</li>
            <li className="flex items-center"><BiCheck/> Full Link History</li>
            <li className="flex items-center"><BiCheck/> Customized TinyURLs</li>
            <Link to='sign-up'>
            <button className="bg-cyan-700 p-2 md:p-3 rounded-lg mt-2 md:mt-6 lg:mt-6">Create Free Account</button></Link>
          </ul>
        </div>
      </div>
    </div>
  
  );
};

export default Home;
