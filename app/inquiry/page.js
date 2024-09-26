'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const InquiryForm = () => {
    const navigate = useRouter()
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
    alert(JSON.stringify(formData))
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });

      navigate.push('/thank')
    
  };
  return (
    <>
      <section className="bg-gray-100 pt-48">
        <div className="mx-auto max-w-screen-xl px-4 py-5 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl mb-5 text-3xl">Get In Touch</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae earum nobis doloremque esse excepturi delectus magnam
                explicabo ipsam sit officia libero cum dolorum enim voluptatum
                ipsa, eveniet odio sequi magni.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                      maxlength="10" 
                      className="no-spinner w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full focus:outline-none border rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    onChange={handleChange}
                    rows="8"
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryForm;
