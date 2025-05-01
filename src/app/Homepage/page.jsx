'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/_nav_/Navbar';
import Footer from '@/_nav_/Footer';
import { useRouter } from 'next/navigation';


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userLocation, setUserLocation] = useState(''); // User's location placeholder
  const slides = [
    { id: 1, text: "Plant Disease Prediction - Discover how to identify crop issues quickly." },
    { id: 2, text: "Paddy Guide - Step-by-step instructions for better yields." },
    { id: 3, text: "Chemical Information - Learn about safe chemical use for crops." },
    { id: 4, text: "Weather Updates - Get real-time weather insights for your area." },
  ];

  // Function to automatically change slides every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  // Fetch user location (placeholder function)
  useEffect(() => {
    // Replace with actual location fetching code
    setUserLocation('Goa, India');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar with Contact Info and Weather */}
      <div className="bg-gray-800 text-white py-2 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center px-4 text-center">
        <p>Email: email@example.com | Location: {userLocation} | Phone: +123456789</p>
        <p className="mt-2 sm:mt-0">Weather: 25°C, Sunny</p>
      </div>

      {/* Navigation Bar with Logo */}
      <nav className="bg-green-700 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Image src="/images/AGRI-SMART.png" alt="Logo" width={40} height={40} className="mr-2" />
            <h1 className="text-white text-2xl sm:text-3xl font-bold">Agri Smart Portal</h1>
          </div>
          <ul className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 text-white font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/logout">Logout</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Background Slide */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/green-wheat.jpg.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Bringing Growth to Agriculture</h2>
          <p className="text-sm sm:text-lg mb-4 sm:mb-6">Promoting continuous improvement of human and technological resources.</p>

          {/* Sliding News & Updates as Background Overlay */}
          <div className="bg-transparent font-semibold rounded-lg shadow-md px-4 py-2 sm:px-6 sm:py-3 absolute bottom-8 w-11/12 sm:w-3/4 lg:w-1/2 mx-auto">
            <p className="text-center">{slides[currentSlide].text}</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-8 sm:mt-12 mb-4 sm:mb-6 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Services</h3>
        <p className="text-gray-600 mt-1 sm:mt-2">Explore our agricultural solutions to enhance your farming experience.</p>
      </div>

      {/* Main Content - Containers */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 px-4">
        {/* Container 1: Plant Disease and Pest Prediction */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <div className="text-green-600 text-3xl sm:text-4xl mb-3">🌾</div>
          <h2 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-4">Plant Disease & Pest Prediction</h2>
          <p className="text-gray-700 mb-4">Use our AI-powered tools to identify and manage diseases and pests affecting your crops.</p>
          <Link href="/plant-disease" className="text-blue-500 hover:underline">Learn More</Link>
        </div>

        {/* Container 2: Paddy Guide */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <div className="text-green-600 text-3xl sm:text-4xl mb-3">🌾</div>
          <h2 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-4">Paddy Guide</h2>
          <p className="text-gray-700 mb-4">Get step-by-step guidance for cultivating paddy, tailored to your specific region and soil type.</p>
          <Link href="/paddy-guide" className="text-blue-500 hover:underline">Explore Guide</Link>
        </div>

        {/* Container 3: Chemical Information */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <div className="text-green-600 text-3xl sm:text-4xl mb-3">🌾</div>
          <h2 className="text-lg sm:text-xl font-semibold text-green-700 mb-2 sm:mb-4">Chemical Information</h2>
          <p className="text-gray-700 mb-4">Learn about safe and effective chemical usage for crop protection and enhanced yield.</p>
          <Link href="/chemical-info" className="text-blue-500 hover:underline">Find Out More</Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-8 sm:mt-12">
        <p>&copy; 2024 Agri Smart Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
