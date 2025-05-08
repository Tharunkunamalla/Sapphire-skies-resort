import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const {id} = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    if (room) {
      setRoom(room);
      setMainImage(room.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* room details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>
        {/* room Rating */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room Images */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  alt={`Room ${index}`}
                  key={index}
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image
                      ? "outline outline-3 outline-orange-500"
                      : ""
                  }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
          </div>
        </div>
        {/* Room Description */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>
        {/* Checkin checkout */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl text-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 text-gray-500 w-full">
            <div className="flex flex-col px-4 md:px-10 w-full md:w-auto">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px bg-gray-300 h-12" />

            <div className="flex flex-col px-4 md:px-10 w-full md:w-auto">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px bg-gray-300 h-12" />

            <div className="flex flex-col px-4 md:px-10 w-full md:w-auto">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-full md:max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
                min={1}
                max={6}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white rounded-md w-full md:w-auto mt-6 md:mt-0 md:ml-6 px-10 py-3 md:py-4 text-base cursor-pointer whitespace-nowrap"
          >
            Check Availability
          </button>
        </form>
        {/* Common specifications */}
        <div className="mt-24 space-y-6">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Room detailed description */}
        <div className="max-w-4xl text-left text-gray-600 mt-16 pt-8 border-t border-gray-300">
          <p className="mb-6">
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable two-bedroom apartment with a
            true city feeling. The price quoted is for two guests; please mark
            the correct number of guests to get the exact price for groups.
            You’ll enjoy a relaxing stay in a well-furnished space with
            thoughtful amenities.
          </p>
          <div className="w-full h-px bg-gray-300" />
        </div>
        {/* Hosted by */}

        <div className="flex flex-col items-start gap-4 mt-10">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
              <p className="text-lg md:text-xl">Hosted By {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer border border-gray-300">
            Contact Now
          </button>
        </div>
        {/* Room Map */}
        <div className="mt-4 w-full h-72 rounded-xl overflow-hidden">
          <iframe
            title="room-location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              room.hotel.address
            )}&output=embed`}
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
