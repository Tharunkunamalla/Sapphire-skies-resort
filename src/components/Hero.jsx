import React, {useState} from "react";
import {assets, cities} from "../assets/assets";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (city) => {
    setDestination(city);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center h-screen">
      <p className="bg-[#000000]/50 text-2xl px-1.5 py-1 rounded-full mt-20">
        Your Comfort, Our Priority
      </p>
      <h1 className="font-playfair text-4xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Find the Perfect Place to Relax and Recharge
      </h1>
      <p className="max-w-130 mt-2 text-lg md:text-base">
        Experience unmatched comfort and luxury at the finest hotels and resorts
        around the world. Start Your Journey today
      </p>

      <form className="bg-white/20 text-white rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        {/* Custom Destination Dropdown */}
        <div className="relative w-60">
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="h-4 filter brightness-0 invert"
            />
            <label
              htmlFor="destinationInput"
              className="text-white font-medium"
            >
              Destination
            </label>
          </div>
          <input
            id="destinationInput"
            type="text"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-full rounded border border-gray-200 bg-white text-gray-900 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            autoComplete="off"
          />
          {showDropdown && (
            <ul className="absolute z-10 w-full bg-white/90 border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-xl backdrop-blur-md">
              {cities
                .filter((city) =>
                  city.toLowerCase().includes(destination.toLowerCase())
                )
                .map((city, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelect(city)}
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-900 cursor-pointer transition-all duration-150 text-sm"
                  >
                    {city}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Check-in Input */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="h-4 filter brightness-0 invert"
            />
            <label htmlFor="checkIn" className="text-white font-medium">
              Check in
            </label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm text-gray-900 bg-white outline-none"
          />
        </div>

        {/* Check-out Input */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="h-4 filter brightness-0 invert"
            />
            <label htmlFor="checkOut" className="text-white font-medium">
              Check out
            </label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm text-gray-900 bg-white outline-none"
          />
        </div>

        {/* Guests Input */}
        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests" className="text-white font-medium">
            Guests
          </label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm text-gray-900 bg-white outline-none max-w-16"
            placeholder="0"
          />
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img
            src={assets.searchIcon}
            alt="searchIcon"
            className="h-7 filter brightness-0 invert"
          />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
