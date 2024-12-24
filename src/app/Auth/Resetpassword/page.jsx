'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/crops-growing-in-thailand.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for dark contrast */}

      <div className="relative z-10 backdrop-brightness-150 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-0">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/AGRI-SMART.png" // Replace with your actual logo image
            alt="Logo"
            className="h-40" // Adjust the size as needed
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-black mb-6">Forgot Password</h2>

        {/* Forgot Password Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-black placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-black">
            Remembered your password?{' '}
            <Link href="/Auth/Loginpage" className="text-blue-600 hover:text-blue-800 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
