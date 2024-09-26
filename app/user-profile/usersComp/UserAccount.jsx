'use client'
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import EditUserComp from "../(user-layouts)/edit-user/page";
import AddressComp from "../(user-layouts)/address/page";
import OrderHistory from "../(user-layouts)/order-history/page";

const UserAccount = () => {
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
    <div className="h-screen mt-40">
      <Tabs value="html" orientation="vertical" className=" w-full">
        <div className="border text-center sticky top-20 z-20 pb-[417px] w-[350px]">
          <h2 className="my-5">
            Hello, <br />
            <span className="font-bold text-lg ">Tushar Rokade</span>
          </h2>
          <TabsHeader
            className="bg-transparent "
            orientation="vertical"
            indicatorProps={{
              className: "bg-gray-900/10 h-10 shadow-none !text-gray-900",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} className="my-1" value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default UserAccount;
