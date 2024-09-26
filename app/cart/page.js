"use client";
import React, { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CartProducts from "./CartProducts";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "@/store/cartSlice";

const Cart = () => {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartss.cartitems);
  // console.log(data)


  const totalPrice = data?.items?.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <>
      {/* <div className='h-screen flex justify-center items-center'>
         <EmptyCart/>
     </div> */}

      {data.items?.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 my-24 lg:my-40">
          <div className="col-span-2 px-0 lg:px-10">
            <h3 className="text-xl my-5">Your Cart ({data?.items?.length} item)</h3>
            <CartProducts data={data} />
          </div>
          <div className="border col-span-2 lg:col-span-1  w-full leading-loose mt-16 border-gray-400 p-5">
            <h4 className="text-xl">Cart Summary</h4>
            <div className="text-sm flex justify-between my-2">
              <p className="text-gray-600	">SubTotal :</p>

              <p>{totalPrice}</p>
            </div>
            <div className="text-sm flex justify-between my-2">
              <p className="text-gray-600	">Packing Charges :</p>

              <p className="">
                ₹0<span className="ms-2 line-through	text-gray-600">₹8,646</span>
                FREE
              </p>
            </div>
            <div className="text-sm flex justify-between my-2">
              <p className="text-gray-600	">Shipping & Handling :</p>

              <p className="">
                ₹0
                <span className="ms-2 line-through	text-gray-600">₹17,292</span>{" "}
                FREE
              </p>
            </div>
            <div className="text-sm flex justify-between my-2">
              <p className="text-gray-600	">Negotiated Discount :</p>

              <p>₹0</p>
            </div>
            <div className="text-sm flex justify-between my-2">
              <p className="text-gray-600	">Tax :</p>

              <p>₹31,126.27</p>
            </div>
            <hr className="my-1" />
            <div className="flex justify-between">
              <h4 className="text-medium">Total Amount </h4>
              <p className="font-bold">{totalPrice}</p>
            </div>

            <div className="text2-sm flex justify-between	text-green-600	">
              <h4>Total savings</h4>
              <h4>₹113,388</h4>
            </div>

            <Link href={"/checkout"}>
              <button
                className="select-none mt-5 rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
