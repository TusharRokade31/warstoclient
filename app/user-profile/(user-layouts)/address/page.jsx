"use client";
import { Addaddress, loadUser } from "@/store/authSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddressForm = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])
  const formRef = useRef(null);

  const data = useSelector((state)=>state.auth.user)
  const Recentaddress = data?.addresses.slice(data?.addresses.length - 1)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    const address = Object.fromEntries(formData.entries());

    // console.log(address)
    dispatch(Addaddress(address))
    formRef.current.reset();


    
  };
  return (
    <>
      <div className="my-0 shadow-lg p-6">
        <div className="text-left text-black mb-4 max-w-2xl">
          <h3 className="pb-4 text-2xl lg:text-3xl font-medium">
            Your Address
          </h3>
        </div>
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white w-12/12 flex flex-col-reverse	lg:flex-row mb-6">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        value={data?.name}
                        placeholder="Full Name"
                        id="full_name"
                        className=" outline-none	border h-10 mt-1 rounded px-4 w-full"
                        required />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        value={data?.email}
                        id="email"
                        className="border outline-none h-10 mt-1 rounded px-4 w-full"
                        placeholder="email@domain.com"
                        required />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        placeholder="Your Address / Street"
                        name="street"
                        id="address"
                        className=" outline-none	border h-10 mt-1 rounded px-4 w-full"
                        required />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="border outline-none h-10 mt-1 rounded px-4 w-full"
                        placeholder="Mumbai"
                        required />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className=" outline-none	border h-10 mt-1 rounded px-4 w-full"
                        required />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className=" outline-none	border h-10 mt-1 rounded px-4 w-full"
                        required />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipcode"
                        className="transition-all outline-none flex items-center border h-10 mt-1 rounded px-4 w-full"
                        placeholder="pincode"
                        required />
                    </div>

                    <div className="md:col-span-5 mt-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="grid grid-cols-1 ms-0 lg:ms-5 mb-5 lg:mb-0 md:w-12/12 w-12/12 lg:w-7/12 gap-2">
              <div>
                <a
                  href="#"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className=" text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                    Recent Address added
                  </h5>
                  {Recentaddress?.map((add)=>{
                    return (
                      <p key={add.street} className="font-normal text-gray-700 dark:text-gray-400">
                    {add.street} <br /> {add.city} {add.state} {add.zipCode}
                    </p>
                    )
                  })}
                  
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
