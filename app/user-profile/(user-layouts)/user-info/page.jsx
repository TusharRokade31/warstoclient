"use client";
import { setUser, updateUser } from "@/store/authSlice";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfo = () => {
  const location = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [unlock, setUnlock] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    addresses: [],
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        mobileNumber: user?.mobileNumber || "",
        addresses: user?.addresses || [],
      });
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith("address")) {
      // Update specific address
      const newAddresses = [...formData.addresses];
      newAddresses[index] = { ...newAddresses[index], [name]: value };
      setFormData((prevState) => ({ ...prevState, addresses: newAddresses }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleInput = () => {
    if (unlock) {
      setUnlock(false);
    } else {
      setUnlock(true);
      dispatch(updateUser(formData));
    }
  };

  const handleAddressChange = (index) => {
    // Call API to update the address for the specific index
    const updatedAddress = formData.addresses[index];
    // Call your address change API here
    setUnlock(true);  
  };
  return (
    <>
      <div
        className={`shadow-lg ${
          location == "/profile-info" ? "my-20" : ""
        } px-5 pb-10`}
      >
        <div className="pt-5 md:pt-14  text-black flex items-start">
          <div className="text-left w-3/4 mb-4 max-w-2xl">
            <h3 className="mb-2 text-2xl lg:text-3xl font-medium">
              Personal Information
            </h3>
            <p className="text-sm">
              Why settle for furniture that is made for someone else? With
              aesthetic designs, premium materials
            </p>
          </div>
          <button
            className="rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-bold ms-0 md:ms-36 uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 h-10 px-5 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleInput}
          >
            {unlock ? "Edit" : "Save"}
          </button>
        </div>
        <div className="grid grid-cols-2 md:w-12/12 w-12/12 lg:w-10/12 gap-5">
          <div className="flex group col-span-2 justify-between items-start p-6 group bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Your Name
              </h5>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${
                  !unlock ? "border-b-2" : ""
                } group-hover:bg-gray-100 border-gray-400 focus:outline-none text-gray-700`}
                readOnly={unlock}
              />
            </a>
          </div>

          {/* <div className="flex group justify-between items-start p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Last Name</h5>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none text-gray-700`}
                readOnly={unlock}
              />
            </a>
          </div> */}

          <div className="col-span-2 flex group justify-between items-start p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 md:col-span-1">
            <a href="#" className="">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Email Address
              </h5>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${
                  !unlock ? "border-b-2" : ""
                } group-hover:bg-gray-100 border-gray-400 focus:outline-none text-gray-700`}
                readOnly={unlock}
              />
            </a>
          </div>

          <div className="col-span-2 flex group justify-between items-start p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 md:col-span-1">
            <a href="#" className="">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Contact Number
              </h5>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                maxLength={10}
                className={`${
                  !unlock ? "border-b-2" : ""
                } group-hover:bg-gray-100 border-gray-400 focus:outline-none text-gray-700`}
                readOnly={unlock}
              />
            </a>
          </div>

          {formData.addresses.map((address, index) => (
            <div
              key={index}
              className="col-span-2 flex flex-col group justify-between items-start p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 md:col-span-1"
            >
               <h5 className="mb-2 text-lg font-bold tracking-tight">Address {index + 1}</h5>
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={address.street || ""}
                onChange={(e) => handleInputChange(e, index)}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none`}
                readOnly={unlock}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city || ""}
                onChange={(e) => handleInputChange(e, index)}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none mt-2`}
                readOnly={unlock}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state || ""}
                onChange={(e) => handleInputChange(e, index)}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none mt-2`}
                readOnly={unlock}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={address.country || ""}
                onChange={(e) => handleInputChange(e, index)}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none mt-2`}
                readOnly={unlock}
              />
              <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                value={address.zipCode || ""}
                onChange={(e) => handleInputChange(e, index)}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none mt-2`}
                readOnly={unlock}
              />
              <button
                onClick={() => handleAddressChange(index)}
                className="mt-2 text-blue-500"
              >
                Update Address
              </button>
            </div>
          ))}

          {/* <div className="col-span-2 flex group justify-between items-start p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 md:col-span-1">
            <a href="#" className="">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Current Address</h5>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`${!unlock ? "border-b-2" : ""} group-hover:bg-gray-100 border-gray-400 focus:outline-none text-gray-700`}
                readOnly={unlock}
              />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
