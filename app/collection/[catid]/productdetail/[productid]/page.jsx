"use client";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getRelatedProducts } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import { addToCart, removeItem } from "@/store/cartSlice";
import { Addwishlist } from "@/store/wishlistSlice";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import RelatedProductsComp from "./RelatedProductsComp";
import Reviews from "./Reviews";
import { useAuth } from "@/context/AuthContext";
import { ToggleButton } from "@mui/material";

const ProductDetail = ({ params }) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(false);

  const { openCart, openCartDrawer, closeCartDrawer } = useAuth();

  const ProductData = useSelector((state) => state.productss);
  const detailpage = ProductData?.Product;
  console.log(detailpage);
  const averageRatings = detailpage?.reviews?.averageRating;

  const totalReviews = detailpage?.reviews?.totalReviews || 0;

  // Function to display stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // full stars
    const halfStar = rating % 1 !== 0; // check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // remaining empty stars

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    // Render half star
    if (halfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0-1.575-1.044H14.93l-3.195-6.5-3.195 6.5H2.462a1.523 1.523 0 0 0-.387 1.575l3.656 3.563-.863 5.031a1.534 1.534 0 0 0 2.226 1.616L11 17.033v-1.615Z" />
        </svg>
      );
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0-1.575-1.044H14.93l-3.195-6.5-3.195 6.5H2.462a1.523 1.523 0 0 0-.387 1.575l3.656 3.563-.863 5.031a1.534 1.534 0 0 0 2.226 1.616L11 17.033v-1.615Z" />
        </svg>
      );
    }

    return stars;
  };

  const RelatedProducts = ProductData?.RelatedProducts;
  console.log(RelatedProducts);
  const id = params.productid;

  const product = { productId: id, quantity: 1 };
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState();
  const [isKeyFeaturesOpen, setKeyFeaturesOpen] = useState(false);
  const [isDimensionOpen, setDimensionOpen] = useState(false);

  useEffect(() => {
    dispatch(getProduct(id));
    dispatch(getRelatedProducts(id));
  }, [dispatch]);

  const handleWishlistcart = () => {
    if (selected == true) {
      dispatch(removeItem(id));
    } else {
      dispatch(Addwishlist(id));
    }
    // route.push("/wishlist");
  };

  const handleAddtocart = () => {
    dispatch(addToCart(product));
    openCartDrawer();
    setDescriptionOpen(false);
    // route.push("/cart");
  };

  const pincodeRef = useRef(null);
  const [isServiceAvailable, setIsServiceAvailable] = useState(null);
  const validPincode = "400034";

  const handleCheckAvailability = () => {
    const enteredPincode = pincodeRef.current.value;
    console.log(enteredPincode);
    setIsServiceAvailable(true);
    console;
    if (enteredPincode === validPincode) {
      setTimeout(() => {
        handleAddtocart();
        setIsServiceAvailable(null);
      }, 1000);
    }

    console.log(isServiceAvailable);
  };

  const [selectedImage, setSelectedImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCYk6owYMyzFR0Q5qBLVr4_6TslbbajRfOw&s"
  );

  const handleMouseEnter = (src) => {
    setSelectedImage(src);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const reviewsSectionRef = useRef(null);
  const scrollToReviews = () => {
    if (reviewsSectionRef.current) {
      reviewsSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white my-24 text-gray-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <ul className="flex space-x-2">
            <li>Home</li>
            <li>/</li>
            <li>Seating</li>
            <li>/</li>
            <li>Chairs</li>
            <li>/</li>

            <li className="text-gray-900">{detailpage.name}</li>
          </ul>
        </nav>
        {/* Product Section */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex relative flex-col space-y-4">
            <div
              onClick={handleWishlistcart}
              className="absolute right-4 top-8"
            >
              {/* <IoMdHeartEmpty className="text-3xl bg-red me-2" /> */}
              <ToggleButton
                value="check"
                className="border-none hover:bg-transparent focus:bg-transparent"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                {selected ? (
                  <FavoriteIcon
                    sx={{ color: "#ef4666" }}
                    className="text-3xl  "
                  />
                ) : (
                  <FavoriteBorderIcon color="white" className="text-3xl" />
                )}
              </ToggleButton>
            </div>
            <img
              src={selectedImage}
              alt="Foster Single Seater"
              className="rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCYk6owYMyzFR0Q5qBLVr4_6TslbbajRfOw&s"
                alt="Product Thumbnail"
                className="rounded-lg cursor-pointer"
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCYk6owYMyzFR0Q5qBLVr4_6TslbbajRfOw&s"
                  )
                }
              />
              <img
                src="https://5.imimg.com/data5/CM/MO/MY-16180212/modular-bedroom-wardrobe.jpg"
                alt="Product Thumbnail"
                className="rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter("https://5.imimg.com/data5/CM/MO/MY-16180212/modular-bedroom-wardrobe.jpg")}
              />
              <img
                src="https://www.ikea.com/in/en/images/products/vilhatten-wardrobe-with-2-doors-and-2-drawers-oak-effect__1163151_pe890132_s5.jpg"
                alt="Product Thumbnail"
                className="rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter("https://www.ikea.com/in/en/images/products/vilhatten-wardrobe-with-2-doors-and-2-drawers-oak-effect__1163151_pe890132_s5.jpg")}
              />
              <img
                src="https://www.at-home.co.in/cdn/shop/products/FLWDETERNALWD3DGRY.jpg?v=1654059468"
                alt="Product Thumbnail"
                className="rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter("https://www.at-home.co.in/cdn/shop/products/FLWDETERNALWD3DGRY.jpg?v=1654059468")}
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold">{detailpage.name}</h1>

            <div className="flex items-center">
              {renderStars(averageRatings)}
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white m-3"
                onClick={scrollToReviews}
              >
                {totalReviews} reviews
              </a>
            </div>

            <p className="mt-4 text-gray-500">{detailpage.description}</p>
            <p className="text-2xl font-semibold my-2 text-gray-900">
              ₹{detailpage.price?.amount}
            </p>

            {/* Quantity Selector */}
            {/* <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 text-lg font-bold border-r"
                >
                  −
                </button>
                <span className="px-4 py-2 text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 text-lg font-bold border-l"
                >
                  +
                </button>
              </div>
              <IoMdHeartEmpty className="text-xl me-2" />
            </div> */}

            <Popover placement="bottom" open={isServiceAvailable} dismiss={true}>
              <PopoverHandler>
                <button className="mt-4 w-3/4 bg-black text-white py-3 rounded-lg">
                  Add To Cart
                </button>
              </PopoverHandler>
              <PopoverContent>
                <h6 className="mb-2 font-bold">Check Service Availability</h6>
                <p className="mb-1 ">
                  Please enter your pincode to check if we deliver to your area.
                </p>
                <div className="flex gap-2">
                  <input
                    size="lg"
                    ref={pincodeRef}
                    placeholder="Enter your pincode"
                    className=" !border-t-blue-gray-200 border px-2 focus:!border-t-gray-900"
                  />
                  <Button
                    variant="gradient"
                    onClick={handleCheckAvailability}
                    className="flex-shrink-0"
                  >
                    Check Availability
                  </Button>
                </div>
                {isServiceAvailable !== null &&
                  (isServiceAvailable ? (
                    <div className="text-center">
                      <p>
                        Great! We deliver to your area. we are adding this item
                        to your cart.
                      </p>
                      <Spinner />
                    </div>
                  ) : (
                    <p className="mt-2">
                      Sorry, we do not deliver to this area try another one.
                    </p>
                  ))}
              </PopoverContent>
            </Popover>

            {/* Additional Information */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <p className="ml-2">
                  Expected Dispatch Date:{" "}
                  <span className="text-green-600">Oct 11, 2024</span>
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                  <i className="fas fa-home"></i>
                </div>
                <p className="ml-2">Free Design Consultation</p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                  <i className="fas fa-truck"></i>
                </div>
                <p className="ml-2">
                  Pan India Free Shipping{" "}
                  <a href="#" className="text-blue-600">
                    Click to Know More
                  </a>
                </p>
              </div>
            </div>

            {/* Social Share Icons */}
            {/* <div className="flex items-center mt-4 space-x-4">
              <span>Share:</span>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div> */}
            <div>
              <div className="mt-6">
                <div className="cursor-pointer flex justify-between items-center border-b py-2">
                  <h2 className="text-xl font-semibold">Description</h2>
                  <span>{"−"}</span>
                </div>

                <p className="mt-4 text-gray-500">
                  This single-seater chair offers a luxurious and comfortable
                  seating experience with its plush cushioning and sturdy build.
                  Designed with a sleek and modern aesthetic, it fits perfectly
                  into any living room, office, or lounge area.
                </p>

                {/* {isDescriptionOpen && (
                  <p className="mt-4 text-gray-500">
                    This single-seater chair offers a luxurious and comfortable
                    seating experience with its plush cushioning and sturdy
                    build. Designed with a sleek and modern aesthetic, it fits
                    perfectly into any living room, office, or lounge area.
                  </p>
                )} */}
              </div>
              <div className="mt-6">
                <div
                  className="cursor-pointer flex justify-between items-center border-b py-2"
                  onClick={() => setDimensionOpen(!isDimensionOpen)}
                >
                  <h2 className="text-xl font-semibold">Dimensions</h2>
                  <span>{isDimensionOpen ? "−" : "+"}</span>
                </div>
                {isDimensionOpen && (
                  <p className="mt-4 text-gray-500">
                    • Premium quality fabric
                    <br />
                    • Ergonomically designed for comfort
                    <br />
                    • Durable and long-lasting construction
                    <br />• Sleek and modern aesthetic
                  </p>
                )}
              </div>
              <div className="mt-6">
                <div
                  className="cursor-pointer flex justify-between items-center border-b py-2"
                  onClick={() => setKeyFeaturesOpen(!isKeyFeaturesOpen)}
                >
                  <h2 className="text-xl font-semibold">Key Features</h2>
                  <span>{isKeyFeaturesOpen ? "−" : "+"}</span>
                </div>
                {isKeyFeaturesOpen && (
                  <p className="mt-4 text-gray-500">
                    • Premium quality fabric
                    <br />
                    • Ergonomically designed for comfort
                    <br />
                    • Durable and long-lasting construction
                    <br />• Sleek and modern aesthetic
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <div className="mt-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <RelatedProductsComp data={RelatedProducts} />
          </div>
        </div>
        <Reviews ID={id} reviewsSectionRef={reviewsSectionRef} />
      </div>
    </div>
  );
};

export default ProductDetail;
