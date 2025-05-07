import React, {useState, useMemo} from "react";
import {assets, roomsDummyData} from "../assets/assets";
import {useNavigate} from "react-router-dom";
import StarRating from "../components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    popular: [],
    price: "",
    sortBy: "",
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      if (category === "popular") {
        return {
          ...prev,
          popular: prev.popular.includes(value)
            ? prev.popular.filter((item) => item !== value)
            : [...prev.popular, value],
        };
      }
      return {
        ...prev,
        [category]: value,
      };
    });
  };

  const filteredRooms = useMemo(() => {
    let result = [...roomsDummyData];

    if (selectedFilters.popular.length > 0) {
      result = result.filter((room) =>
        selectedFilters.popular.some((type) =>
          room.roomType?.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    if (selectedFilters.price) {
      const [min, max] = selectedFilters.price
        .replace(/[₹,]/g, "")
        .split(" to ")
        .map(Number);
      result = result.filter(
        (room) => room.pricePerNight >= min && room.pricePerNight <= max
      );
    }

    if (selectedFilters.sortBy === "Price Low to High") {
      result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (selectedFilters.sortBy === "Price High to Low") {
      result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (selectedFilters.sortBy === "Newest First") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [selectedFilters]);

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        <div className="w-full lg:w-2/3">
          <h1 className="font-playfair text-3xl md:text-4xl">Hotel Rooms</h1>
          <p className="text-gray-600 mt-2 mb-6 text-sm md:text-base">
            Take advantage of our limited-time offers and special packages.
          </p>

          {filteredRooms.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row gap-6 border-b pb-6 mb-6"
            >
              <img
                src={room.images[0]}
                alt="hotel"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="w-full md:w-[300px] h-[200px] object-cover rounded-xl cursor-pointer shadow-md"
              />

              <div className="flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-500">
                    {room.hotel.city}, {room.hotel.state}, {room.hotel.country}
                  </p>
                  <p
                    className="text-xl font-playfair text-gray-800 cursor-pointer"
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      scrollTo(0, 0);
                    }}
                  >
                    {room.hotel.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <StarRating />
                    <p className="text-sm text-gray-600">200+ reviews</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="w-4 h-4"
                    />
                    <span>{room.hotel.address}</span>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-2 text-xs">
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-500 text-white rounded-full shadow-sm">
                      <img
                        src={assets.freeWifiIcon}
                        alt="wifi"
                        className="w-3.5 h-3.5"
                      />
                      wifi
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500 text-white rounded-full shadow-sm">
                      <img
                        src={assets.freeBreakfastIcon}
                        alt="breakfast"
                        className="w-3.5 h-3.5"
                      />
                      breakfast
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-pink-500 text-white rounded-full shadow-sm">
                      <img
                        src={assets.roomServiceIcon}
                        alt="service"
                        className="w-3.5 h-3.5"
                      />
                      service
                    </span>

                    {/* 🏔️ Mountain Icon */}
                    {(room.pricePerNight === 299 ||
                      room.pricePerNight === 399) && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-purple-500 text-white rounded-full shadow-sm">
                        <img
                          src={assets.mountainIcon}
                          alt="mountain"
                          className="w-3.5 h-3.5"
                        />
                        mountain
                      </span>
                    )}

                    {/* 🏊 Pool Icon */}
                    {room.pricePerNight === 399 && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-cyan-500 text-white rounded-full shadow-sm">
                        <img
                          src={assets.poolIcon}
                          alt="pool"
                          className="w-3.5 h-3.5"
                        />
                        pool
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-lg font-semibold text-gray-800">
                  ₹{room.pricePerNight}
                  <span className="text-sm text-gray-600 font-normal">
                    {" "}
                    /day
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {(showFilters || window.innerWidth >= 1024) && (
          <div className="w-full lg:w-1/3 lg:sticky top-28">
            <div className="border rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between border-b pb-2 mb-4">
                <p className="text-base font-medium text-gray-800">FILTERS</p>
                <button
                  className="text-xs text-blue-600"
                  onClick={() =>
                    setSelectedFilters({popular: [], price: "", sortBy: ""})
                  }
                >
                  CLEAR
                </button>
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800 pb-2">
                  Popular filters
                </p>
                {[
                  "Single Bed",
                  "Family Suite",
                  "Double Bed",
                  "Luxury Room",
                ].map((filter) => (
                  <label key={filter} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-checkbox accent-blue-600"
                      checked={selectedFilters.popular.includes(filter)}
                      onChange={() => handleFilterChange("popular", filter)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{filter}</span>
                  </label>
                ))}
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800 pb-2">Price</p>
                {["₹2500 to ₹5000", "₹5000 to ₹8000", "₹8000 to ₹15000"].map(
                  (range) => (
                    <label key={range} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="price"
                        className="form-radio accent-blue-600"
                        checked={selectedFilters.price === range}
                        onChange={() => handleFilterChange("price", range)}
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {range}
                      </span>
                    </label>
                  )
                )}
              </div>

              <div>
                <p className="font-medium text-gray-800 pb-2">Sort By</p>
                {["Price Low to High", "Price High to Low", "Newest First"].map(
                  (sort) => (
                    <label key={sort} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="sortBy"
                        className="form-radio accent-blue-600"
                        checked={selectedFilters.sortBy === sort}
                        onChange={() => handleFilterChange("sortBy", sort)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{sort}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRooms;
