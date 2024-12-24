'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/crops-growing-in-thailand.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for dark contrast */}

      {/* Registration Form */}
      <div className="relative z-10 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-0 backdrop-brightness-150 backdrop-blur-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/AGRI-SMART.png" // Replace with your actual logo image
            alt="Logo"
            className="h-40" // Adjust the size as needed
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-black mb-6">Register</h2>

        {/* Registration Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-black">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Register
          </button>
        </form>

        {/* OTP Popup */}
        {showOtpPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Enter OTP</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter OTP"
                    required
                  />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-black">
            Already have an account?{' '}
            <Link href="/Auth/Loginpage" className="text-blue-600 hover:text-blue-800 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
