'use client'
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditUserComp = () => {
  const location = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });

    navigate("/thank");
  };
  return (
    <div
      className={`rounded-lg bg-white p-8 ${
        location == "/edit-user" ? "my-40" : "0"
      } shadow-lg lg:col-span-3 lg:p-12`}
    >
      <div className="w-full text-black flex justify-start">
        <div className="text-left mb-4 max-w-2xl">
          <h3 className="mb-2 text-2xl lg:text-3xl font-medium">
            Edit Information
          </h3>
          <p className="text-sm">
            Why settle for furniture that is made for someone else? With
            aesthetic designs, premium materials
          </p>
        </div>
      </div>  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email address"
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="contact"
              pattern="[0-9]{10}"
              maxLength="10"
              className="no-spinner w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Password"
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="confirm password">
              Confirm Password
            </label>
            <input
              className="w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Confirm Password"
              onChange={handleChange}
              type="confirm password"
              name="confirm password"
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-5 py-2 font-medium text-white sm:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserComp;
