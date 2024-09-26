import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="bg-black py-28 lg:py-0 px-24 xxs:px-12 sm:py-20 text-white">
    <div className="flex flex-col h-full lg:h-80 justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 max-w-screen-lg w-full">
        <div className="w-full mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Warsto</h3>
          <p className="text-gray-400 text-sm">
            Stylish furniture solutions for your home.
          </p>
        </div>
        <div className="w-full mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Living Room
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Dining & Kitchen
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Bedroom
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Pillows & Decor
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Warsto B2B
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="text-gray-400 text-sm">
          <li className="mb-2">
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Shipping & Returns
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:text-white">
                Order Tracking
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default footer