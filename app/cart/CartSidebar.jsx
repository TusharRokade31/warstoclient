import Link from "next/link";
import React from "react";
import CartItems from "./CartItems";
import { Button } from "@material-tailwind/react";

const CartSidebar = ({data}) => {
  // console.log(data)
  return (
    <>
      <div className="overflow-auto overflow-x-hidden	 max-h-[600px]">
        {data?.length == 0 ? (
          <div className="flex justify-center h-3/4 flex-col items-center">
            <p className="my-4">Your Cart is Empty</p>
            <Link href={"/collection/products"}>
              <Button variant="outlined">Return To Shop</Button>
            </Link>
          </div>
        ) : (
          data?.map((item) => (
            <div className="px-4" key={item._id}>
              <CartItems cartNum={2}  items={item} />
            </div>
          ))
        )}
        {data?.length == 0 ? (
          ""
        ) : (
          <Link href={"/cart"}>
            <div className="text-center border border-white border-start text-white bg-black w-full py-3 absolute bottom-0">
              <button>View Cart</button>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
