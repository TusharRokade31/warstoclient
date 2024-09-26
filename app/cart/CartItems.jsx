"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem, updateCart } from "@/store/cartSlice";
import Link from "next/link";

const CartItems = ({ items, cartNum }) => {
  const [count, setCount] = useState(items.quantity);
  const [size, handleOpen] = useState(false);
  
  const dispatch = useDispatch();
  const id = items?.product?.id;
  // console.log(id)

  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  const handlePlus = () => {
    const newCount = count + 1;
    setCount(newCount);

    const product = {
      productId: id,
      quantity: newCount,
    };

    dispatch(updateCart(product));
  };

  const handleMinus = () => {
    const newCount = count - 1;
    if (newCount >= 1) {
      // Ensure quantity doesn't go below 1
      setCount(newCount); // Update the local state with the new quantity

      const product = {
        productId: id,
        quantity: newCount, // Use the updated count
      };

      dispatch(updateCart(product));
    }
  };
  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-${
          cartNum == 2 ? "2" : "4"
        } items-center`}
      >
        <div className="py-3 col-span-2 flex items-start w-full">
          <div className="">
            <Link href={`/collection/products/productdetail/${id}`}>
              <img
                src="https://i.pinimg.com/originals/ef/7a/9e/ef7a9e14df49277a4e1316f61b09afb0.jpg"
                className="w-40 px-2"
                alt=""
              />
            </Link>
            <div onClick={() => handleOpen(true)} className="flex p-2">
              <MdDeleteOutline /> <p className="text-xs">Remove</p>
            </div>
          </div>
          <h2 className="w-full text-sm">
            {items?.product?.name} <br />
            <span className="text-xs">{items?.product?.description}</span>{" "}
          </h2>
        </div>
        <div className="w-full ms-0 lg:ms-5">
          <Button
            variant="outlined"
            size="sm"
            onClick={handleMinus}
            className=" rounded-none"
          >
            -
          </Button>
          <Button variant="outlined" size="sm" className=" rounded-none">
            {items?.quantity}
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={handlePlus}
            className=" rounded-none"
          >
            +
          </Button>
        </div>
        <div className="w-full ms-2 text-center lg:text-left md:ms-0 lg:ms-20">
          <h4 className="font-bold">₹{eval(items.price * items.quantity)}</h4>
        </div>
      </div>
      <hr className="mt-5" />
      <Dialog
        overlay={false}
        open={size}
        className="flex flex-col items-center"
        size={"md"}
        handler={handleOpen}
      >
        <DialogBody>
          Are you sure you want to remove{" "}
          <span className="font-bold text-black-100">
            {items?.product?.name}
          </span>{" "}
          from cart ?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="black"
            onClick={() => handleRemove()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CartItems;
