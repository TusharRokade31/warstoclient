import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./userSidebar";
import EditUserComp from "../(user-layouts)/edit-user/page";
import OrderHistory from "../(user-layouts)/order-history/page";
import AddressComp from "../(user-layouts)/address/page";

const UserLayout = () => {
  const data = [
    {
      label: "Account",
      value: "html",
      desc: `Finding Design For Component`,
    },
    {
      label: "Edit Profile ",
      value: "react",
      desc: <EditUserComp />,
    },
    {
      label: "Your Orders",
      value: "vue",
      desc: <OrderHistory />,
    },
    {
      label: "Your Address",
      value: "angular",
      desc: <AddressComp />,
    },
    {
      label: "Others",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
              We're constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="flex items-start">
      <div className="w-full  md:w-auto">
        <UserSidebar />
      </div>
      <div className="w-full hidden md:block mt-40 px-0 lg:px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
