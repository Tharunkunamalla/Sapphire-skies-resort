import React from "react";
import {assets, cities} from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2 w-full">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block object-cover"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>
          <div className="w-full">
            {/* Hotel name */}
            <div className="w-full mt-4">
              <label htmlFor="name" className="font-medium text-gray-500">
                Hotel Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>
            {/* Phone */}
            <div className="w-full mt-4">
              <label htmlFor="contact" className="font-medium text-gray-500">
                Contact
              </label>
              <input
                id="contact"
                type="text"
                placeholder="Type here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>
            {/* Address */}
            <div className="w-full mt-4">
              <label htmlFor="address" className="font-medium text-gray-500">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Type here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>
            {/* Select city */}
            <div className="w-full mt-4 max-w-60">
              <label htmlFor="city" className="font-medium text-gray-500">
                City
              </label>
              <select
                id="city"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your city
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 rounded cursor-pointer mt-6">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
