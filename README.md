# 🏨 Sapphire Skies Resort

**Where sky meets indulgence**

A modern, full-stack hotel management and booking platform built with React and Vite. Sapphire Skies Resort provides a seamless experience for both guests and hotel owners, featuring secure authentication, intuitive room browsing, and comprehensive booking management.

## ✨ Features

### For Guests
- **🔐 Secure Authentication**: User authentication powered by [Clerk](https://clerk.com/) for secure login and session management
- **🏠 Browse Rooms**: Explore a wide variety of rooms with detailed information and high-quality images
- **📅 Easy Booking**: Simple and intuitive room booking system
- **📋 Booking Management**: View and manage all your bookings in one place
- **💎 Exclusive Offers**: Access special deals and promotional packages
- **⭐ Testimonials**: Read reviews from other guests
- **📰 Newsletter**: Stay updated with latest offers and news

### For Hotel Owners
- **📊 Dashboard**: Comprehensive dashboard to monitor bookings, revenue, and guest statistics
- **➕ Add Rooms**: Easy-to-use interface to add new rooms with details and images
- **📝 List Management**: View and manage all available rooms
- **📈 Analytics**: Track total revenue, bookings, and guest information

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.5.3
- **Authentication**: Clerk (@clerk/nextjs 6.19.0)
- **Styling**: Tailwind CSS 3.4.17
- **Language**: JavaScript (JSX)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tharunkunamalla/Sapphire-skies-resort.git
cd Sapphire-skies-resort
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Get your `VITE_CLERK_PUBLISHABLE_KEY` from your [Clerk dashboard](https://clerk.com/)
   - Add it to your `.env` file:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📂 Project Structure

- **src/components**: Reusable UI components (Navbar, Footer, Hero, etc.)
- **src/pages**: Main application pages (Home, AllRooms, RoomDetails, MyBookings)
- **src/pages/hotelOwner**: Hotel owner dashboard and management pages
- **src/assets**: Images, icons, and static assets (Access all images from assets folder)
- **public**: Public assets including favicon

## 🔑 Authentication

This project uses **Clerk** for user authentication, providing:
- Secure user sign-up and sign-in
- Session management
- User profile management
- Protected routes for authenticated users

Visit [Clerk.com](https://clerk.com/) to learn more about the authentication service.

## 📱 Pages Overview

- **Home**: Landing page with hero section, featured destinations, exclusive offers, and testimonials
- **All Rooms**: Browse all available rooms with filtering options
- **Room Details**: Detailed view of individual rooms with booking options
- **My Bookings**: Personal booking history and management
- **Owner Dashboard**: Hotel owner interface for managing rooms and viewing analytics

## 📸 Screenshots

<img src="src/assets/r1.png" alt="Home Page - Hero Section">
<img src="src/assets/r2.png" alt="Featured Destinations">
<img src="src/assets/r3.png" alt="Room Listings">
<img src="src/assets/r4.png" alt="Room Details">
<img src="src/assets/r5.png" alt="Booking Interface">
<img src="src/assets/r6.png" alt="Hotel Owner Dashboard">
<img src="src/assets/r7.png" alt="Room Management">

...and many more features to explore!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available for educational and personal use.

## 👤 Author

**Tharun Kunamalla**
- GitHub: [@Tharunkunamalla](https://github.com/Tharunkunamalla)

---

⭐ If you found this project helpful, please consider giving it a star!
