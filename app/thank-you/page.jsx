'use client'
import React from "react";
import Message from "../../src/images/mail.png";
import Link from "next/link";
import Image from "next/image";

const ThankYouPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <Image src={Message} className="w-40" alt="" />
        <h3 className="mb-4 text-2xl font-medium">Thank you for submitting</h3>
        <p className="text-sm px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, repellendus!
        </p>
        <Link href={"/"}>
          <button
            className="select-none mt-5 rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
