"use client";
import React, { useEffect, useRef, useState } from "react";
import { products as filteredProducts } from "../collection/[catid]/products";
import {
  Input,
  Option,
  Select,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DemoCard } from "./DemoCard";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
} from "@material-tailwind/react";
import { useAuth } from "@/context/AuthContext";

const page = () => {
  const arr = [
    "sort",
    "size",
    "price",
    "doors",
    "material",
    "fetures",
    "type",
    "colour",
  ];

  const { openFilterDrawer, Reqvalue, showNavbar } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="mx-auto">
        {/* Banner Section */}
        <div className="h-[400px] bg-[url('https://mebel-dlya-vseh.ru/d/garderobnaya-eulaliya.jpg')] flex items-center justify-center">
          <h1 className="text-5xl mt-10 pe-8 text-[#ffffff] font-bold">
            Product List
          </h1>
        </div>

        {/* filter section start */}
        <div className="relative">
          <div
            className={`sticky top-${
              showNavbar ? (Reqvalue == "flex" ? "[110px]" : "[80px]") : "0"
            } z-10 w-full px-5 lg:px-20 pt-4 bg-white transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-wrap justify-between">
              {arr.map((p, index) => (
                <Menu key={index} placement="bottom">
                  <MenuHandler>
                    <button className="bg-gray-300 hidden lg:block text-black text-start py-2 px-6 rounded-full hover:bg-[#ef4665] hover:text-white transition">
                      {p} <ArrowDropDownIcon />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                  </MenuList>
                </Menu>
              ))}

              <button
                onClick={openFilterDrawer}
                className="bg-gray-300 hidden sm:block text-black text-start py-2 px-6 rounded-full hover:bg-[#ef4665] hover:text-white transition"
              >
                All Filter <ArrowDropDownIcon />
              </button>
            </div>
            <hr className="mt-5" />
          </div>

          {/* Product Cards Section */}
          <div className="grid mb-10 px-5 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-10 shadow hover:shadow-lg transition"
              >
                <DemoCard />
              </div>
            ))}
          </div>

          <div className="flex mb-24 justify-center text-center">
            <div>
              <Button
                size="md"
                variant="outlined"
                className="flex me-2 items-center "
              >
                Show More
              </Button>
            </div>

            <div className="">
              <Button onClick={handleOpen} className="ms-2" size="md">
                Need Help ?
              </Button>
            </div>
          </div>
        </div>

        {/* filter section end */}

        <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
          <DialogHeader className="relative m-0 block">
            <Typography variant="h4" color="blue-gray">
              Manage Item
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600">
              Keep your records up-to-date and organized.
            </Typography>
            <IconButton
              size="sm"
              variant="text"
              className="!absolute right-3.5 top-3.5"
              onClick={handleOpen}
            >
              Cancel
            </IconButton>
          </DialogHeader>
          <DialogBody className="space-y-4 pb-6">
            {/* Dialog content */}
          </DialogBody>
          <DialogFooter>
            <Button className="ml-auto" onClick={handleOpen}>
              Add Product
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
};

export default page;
