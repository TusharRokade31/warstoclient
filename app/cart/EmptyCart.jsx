import React from "react";
import emptyCart from "../../src/images/shopping.png";
import Link from "next/link";
import Image from "next/image";
const EmptyCart = () => {
  return (
    <div className="text-center h-screen flex flex-col justify-center items-center">
      <Image src={emptyCart} className="w-48" alt="" />
      <h3 className="mb-4 text-2xl font-medium">Your cart is empty</h3>
      <p className="text-lg px-4">Your cart is empty, Add Items to your cart</p>
      <Link href='/'>
        <button
          className="select-none mt-5 rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
