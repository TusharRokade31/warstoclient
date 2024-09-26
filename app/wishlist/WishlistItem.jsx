"use client";
import { addToCart } from "@/store/cartSlice";
import { removeWishlist } from "@/store/wishlistSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { openCartDrawer } = useAuth();
  const id = item?.id;
  const product = { productId: id, quantity: 1 };

  const handleRemove = () => {
    dispatch(removeWishlist(id));
  };

  const handleAddtocart = () => {
    dispatch(addToCart(product));
    dispatch(removeWishlist(id));
    openCartDrawer();
    // navigate.push('/cart')
  };
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-16 h-16 flex-shrink-0 mr-2 sm:mr-3">
            <Link href={`/collection/products/productdetail/${id}`}>
              <img
                src="https://image.made-in-china.com/2f0j00hgUfkJtqgBol/Supersize-Bedroom-Furniture-Classic-Oak-Plank-Wooden-Wardrobe-for-Sale.jpg"
                className="w-28"
                alt="Alex Shatov"
              />
            </Link>
          </div>
          <div className="font-medium text-gray-800">{item?.name}</div>
        </div>
      </td>

      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{item?.description}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-black">
          ₹{item?.price.amount}
        </div>
      </td>
      
      <td className="p-2 whitespace-nowrap">
        <div className="text-sm flex items-center justify-center text-center">
          <button
            type="submit"
            onClick={handleAddtocart}
            className="inline-block w-full rounded-lg bg-black px-3 py-2 font-medium text-white sm:w-auto"
          >
            Add to Cart
          </button>
          <div onClick={handleRemove} className="flex ms-3 text-2xl ">
          <DeleteIcon sx={{color:"#ef4666"}} />
        </div>
        </div>
        
      </td>
    </tr>
  );
};

export default WishlistItem;
