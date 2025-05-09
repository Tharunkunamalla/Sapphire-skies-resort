import React, {useState} from "react";
import Title from "../../components/Title";
import {assets, dashboardDummyData} from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData || {});

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listing, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      <div className="flex gap-4 my-8 flex-wrap">
        {/* Total Bookings */}
        <div className="bg-blue-100 border border-blue-200 rounded flex p-4 pr-8 items-center min-w-[200px]">
          <img
            src={assets.totalBookingIcon}
            alt="booking-icon"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings || 0}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-green-100 border border-green-200 rounded flex p-4 pr-8 items-center min-w-[200px]">
          <img
            src={assets.totalRevenueIcon}
            alt="revenue-icon"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-green-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full ">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings?.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 transition-all duration-150 ${
                  index === dashboardData.bookings.length - 1
                    ? "border-b-0"
                    : ""
                }`}
              >
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {item.user.username || "N/A"}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                  {item.room.roomname || "N/A"}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium text-center">
                  ${item.totalPrice}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium text-center">
                  <button
                    className={`py-1 px-3 text-xs rounded-full mx-auto ${
                      item.isPaid
                        ? "bg-green-100 text-green-500"
                        : "bg-yellow-100 text-yellow-500"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
