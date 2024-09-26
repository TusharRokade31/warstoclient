import { getSearchProducts } from "@/store/productSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [inp, setInp] = useState(""); // Input value
  const router = useRouter()
  const [debouncedInp, setDebouncedInp] = useState(""); // Debounced input value
  const dispatch = useDispatch();
  const SearchProducts = useSelector((state) => state.productss.SearchProducts);
  const ProductLink =  SearchProducts[0]


  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInp(inp); // Set the debounced input after a delay
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler); // Clear the timeout if the input changes before the delay
    };
  }, [inp]);

  useEffect(() => {
    if (debouncedInp !== "") {
      dispatch(getSearchProducts(debouncedInp));
    }
  }, [debouncedInp, dispatch]);

  const handleChange = (e) => {
    setInp(e.target.value); // Update the input value
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && ProductLink !== undefined ) {
      router.push(`/collection/products/productdetail/${ProductLink._id}`)
      setInp('')
    }
  };

  return (
    <div className="p-4 w-[200px] me-0 md:mx-5 md:w-[500px] lg:w-[550px] xxs:px-0">
      <div className="relative group">
        <input
          type="text"
          onChange={handleChange}
          value={inp}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="pl-10 text-sm group-focus-within:outline-none pr-4 py-1 focus:outline-none lg:py-2 w-full rounded-full border  shadow-sm"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="text-[#ef4665ac]" />
        </div>

        {/* Dropdown is shown on focus */}
        <div className="absolute lg:w-full w-[300px] h-fit overflow-y-auto right-0 left-1 z-50 bg-white border border-gray-300 rounded-md shadow-lg mt-1 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-300 ease-in-out">
          <ul>
            {SearchProducts?.map((item) => (
              <Link
                href={`/collection/opulence/productdetail/${item._id}`}
                key={item.name}
              >
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  {item.name} <br />
                  <small>{item.description}</small>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
