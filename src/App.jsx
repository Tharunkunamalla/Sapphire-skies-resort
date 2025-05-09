import React from "react";
import Navbar from "./components/Navbar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import AllRooms from "./pages/AllRooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./pages/hotelOwner/Layout.jsx";
import Dashboard from "./pages/hotelOwner/Dashboard.jsx";
import AddRoom from "./pages/hotelOwner/AddRoom.jsx";
import ListRoom from "./pages/hotelOwner/ListRoom.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Full height layout */}
      {!isOwnerPath && <Navbar />}
      {/* Toggle this to show hotel registration form */}
      {false && <HotelReg />}
      <div className="flex-1">
        {" "}
        {/* This will grow to fill available space */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Footer /> {/* Always at the bottom, never overlaps */}
    </div>
  );
};

export default App;
