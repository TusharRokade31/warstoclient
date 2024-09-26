"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@/store/features/materialTailwind/tailwindComp";

import { useRouter } from "next/navigation";

const UserSidebar = () => {
  const navigate = useRouter();

  const data = [
    {
      label: "Account",
      value: "html",
      mainpath: "/user-profile/user-info",
    },
    // {
    //   label: "Edit Profile",
    //   value: "react",
    //   mainpath: "/user-profile/edit-user",
    // },
    {
      label: "Your Orders",
      value: "vue",
      mainpath: "/user-profile/order-history",
    },
    {
      label: "Your Address",
      value: "angular",
      mainpath: "/user-profile/address",
    },
    {
      label: "Others",
      value: "svelte",
      mainpath: "/user-profile/others",
    },
  ];

  const handleTabClick = (mainpath, path) => {
    const isLaptop = window.innerWidth >= 640; // Laptop width and above

    const navigatePath = isLaptop ? mainpath : path;
    navigate.push(navigatePath);
  };

  return (
    <>
    
      <Tabs value="html" orientation="vertical" className="w-full hidden md:block">
        <div className="border h-screen mt-40 text-center sticky top-20 pb-24 lg:pb-[417px] w-full md:w-[250px] lg:w-[350px]">
          <h2 className="my-5">
            Hello, <br />
            <span className="font-bold text-lg">Tushar Rokade</span>
            
          </h2>

          <TabsHeader
            className="bg-transparent"
            orientation="vertical"
            indicatorProps={{
              className: "bg-gray-900/10 h-10 shadow-none !text-gray-900",
            }}
          >
            {data.map(({ label, value, mainpath, path }) => (
              <Tab
                key={value}
                className="my-1"
                value={value}
                onClick={() => handleTabClick(mainpath, path)}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </Tabs>

      
    </>
  );
};

export default UserSidebar;
