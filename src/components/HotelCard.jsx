import React from "react";
import {Link} from "react-router-dom";
import {assets} from "../assets/assets";

const HotelCard = ({room, index}) => {
  return (
    <div className="w-70 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden">
      <Link
        to={"/rooms/" + room._id}
        onClick={() => scrollTo(0, 0)}
        className="block"
      >
        <div className="relative">
          <img
            src={room.images[0]}
            alt=""
            className="h-48 w-full object-cover"
          />
          {index % 2 === 0 && (
            <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
              Best Seller
            </p>
          )}
        </div>

        <div className="p-4 pt-5">
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {room.hotel.name}
            </p>
            <div className="flex items-center gap-1">
              <img
                src={assets.starIconFilled}
                alt="star-icon"
                className="h-4 w-4"
              />
              4.5
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm mt-1 text-gray-600">
            <img
              src={assets.locationIcon}
              alt="location-icon"
              className="h-4 w-4"
            />
            <span>{room.hotel.address}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p>
              <span className="text-xl text-gray-800">
                ${room.pricePerNight}
              </span>{" "}
              <span className="text-sm text-gray-500">/night</span>
            </p>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
