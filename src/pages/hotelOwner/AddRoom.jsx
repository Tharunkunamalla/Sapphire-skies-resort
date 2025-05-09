import React, {useState} from "react";
import Title from "../../components/Title";
import {assets} from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    PricePerNight: "0",
    amenities: {
      "Free Wi-Fi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Pool Access": false,
      "Mountain View": false,
    },
  });

  return (
    <div className="pb-10">
      <form className="max-w-1xl mx-auto">
        <Title
          align="left"
          font="outfit"
          title="Add Room"
          subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience"
        />

        {/* Upload Area for images */}
        <p className="text-gray-800 mt-10">Images</p>
        <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label
              htmlFor={`roomImage${key}`}
              key={key}
              className="flex gap-4 mt-4"
            >
              <img
                className="max-h-32 cursor-pointer opacity-80"
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=""
              />
              <input
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={(e) =>
                  setImages({...images, [key]: e.target.files[0]})
                }
              />
            </label>
          ))}
        </div>

        {/* Room Type & Price */}
        <div className="w-full flex  max-sm:flex-col sm:gap-4 mt-4">
          {/* Room Type */}
          <div className="max-w-48">
            <p className="text-gray-800 mt-4">Room Type</p>
            <select
              onChange={(e) => setInputs({...inputs, roomType: e.target.value})}
              className="border opacity-70 border-gray-300 mt-2 rounded p-2 w-full"
            >
              <option value="">Select Room Type</option>
              <option value="single">Single Bed</option>
              <option value="double">Double Bed</option>
              <option value="luxury">Luxury Room</option>
              <option value="family">Family Suite</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex-1 max-w-[150px]">
            <p className="mt-4 text-gray-800">
              Price <span className="text-xs">/night</span>
            </p>
            <input
              type="number"
              placeholder="0"
              className="border border-gray-300 mt-1 rounded p-2 w-full"
              min={0}
              value={inputs.PricePerNight}
              onChange={(e) =>
                setInputs({...inputs, PricePerNight: e.target.value})
              }
            />
          </div>
        </div>

        {/* Amenities */}
        <p className="text-gray-800 mt-4">Amenities</p>
        <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id={`amenities${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity],
                    },
                  })
                }
              />
              <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-2 rounded mt-8 cursor-pointer"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
