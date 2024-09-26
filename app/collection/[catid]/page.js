"use client";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Filters from "./Filters";
import { Drawer, Input } from "@material-tailwind/react";
import SideFilters from "./sidefilters";
import {
  Button,
  
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFilters, getProducts } from "@/store/productSlice";
import { debounce } from "lodash";
import { useAuth } from "@/context/AuthContext";
import NewCategoriess from "./NewCategoriess";
import ProductCard from "./productgrid";

function ProductPage({ params }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const name = params.catid;
  const data = useSelector((state) => state.productss?.Products);
  const Types = useSelector((state) => state.productss?.filters?.types);
  const Config = useSelector(
    (state) => state.productss?.filters?.configurations
  );
  const filterss = useSelector((state) => state.productss?.filters);

  const [filteredProducts, setFilteredProducts] = useState(data);
  const [priceRange, setPriceRange] = useState([0, 40000]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedConfigurations, setSelectedConfigurations] = useState([]);

  const { openFilter, Reqvalue, showNavbar, closeFilterDrawer } = useAuth();

  // Debounce the API call
  const debouncedGetFilters = useCallback(
    debounce(() => dispatch(getFilters()), 300), // adjust the debounce delay as needed
    [dispatch]
  );

  const debouncedGetProducts = useCallback(
    debounce((category) => {
      if (category === "products") {
        dispatch(getAllProducts());
      } else {
        dispatch(getProducts(category));
      }
    }, 300), // adjust the debounce delay as needed
    [dispatch]
  );

  useEffect(() => {
    if (data.length !== 0) {
      setFilteredProducts(data);
    }
    debouncedGetFilters();
  }, [data, debouncedGetFilters]);

  useEffect(() => {
    debouncedGetProducts(name);
  }, [name, debouncedGetProducts]);

  const availableTypes = useMemo(
    () => [...new Set(Types?.map((p) => p))],
    [Types]
  );

  const availableConfigurations = useMemo(
    () => [...new Set(Config?.map((p) => p))],
    [Config]
  );

  const handleFilterChange = (newPriceRange, newTypes, newConfigurations) => {
    const filtered = data.filter((product) => {
      const inPriceRange =
        product.price.amount >= newPriceRange[0] &&
        product.price.amount <= newPriceRange[1];
      const typeMatch =
        newTypes.length === 0 || newTypes.includes(product.type);
      const configMatch =
        newConfigurations.length === 0 ||
        newConfigurations.includes(product.attributes.configuration);
      return inPriceRange && typeMatch && configMatch;
    });
    setFilteredProducts(filtered);
    setPriceRange(newPriceRange);
    setSelectedTypes(newTypes);
    setSelectedConfigurations(newConfigurations);
  };


  return (
    <>
      {/* <div className="mx-auto px-4 md:px-6 py-32">
        <Banner />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-row lg:hidden" onClick={openFilterDrawer}>
            Filter
            <BiMenuAltLeft className="text-3xl" />
          </div>

          <Filters
            priceRange={priceRange}
            selectedTypes={selectedTypes}
            selectedConfigurations={selectedConfigurations}
            onFilterChange={handleFilterChange}
            availableTypes={availableTypes}
            availableConfigurations={availableConfigurations}
          />

          <div className="w-full lg:w-3/4">
            <NewCategoriess
              filteredProducts={filteredProducts}
              params={params}
            />
          </div>
        </div>
        <Drawer
          overlay={"bg-transparent blur-none"}
          open={openFilter}
          className="overflow-auto"
          onClose={closeFilterDrawer}
        >
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="blue-gray">
              LOGO
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeFilterDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          <div className="h-[calc(100vh-80px)] overflow-auto p-4">
            <SideFilters
              priceRange={priceRange}
              selectedTypes={selectedTypes}
              selectedConfigurations={selectedConfigurations}
              onFilterChange={handleFilterChange}
              availableTypes={availableTypes}
              availableConfigurations={availableConfigurations}
            />
          </div>
        </Drawer>
      </div> */}

      <div className="mx-auto">
        {/* Banner Section */}
        <div className="h-[200px] md:h-[300px] mt-16 bg-[url('https://mebel-dlya-vseh.ru/d/garderobnaya-eulaliya.jpg')] flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl  text-[#ffffff] font-bold">
            Product List
          </h1>
        </div>

        {/* filter section start */}
        <div className="relative">
          <div
            className={`sticky ${
              showNavbar
                ? Reqvalue == "flex"
                  ? "top-[101px]"
                  : "top-[68px]"
                : "top-0"
            } z-10 w-full px-5 lg:py-1 py-0 lg:px-20 bg-white transition-transform duration-300 ease-in-out`}
          >
            <NewCategoriess />
            <Filters
              priceRange={priceRange}
              selectedTypes={selectedTypes}
              selectedConfigurations={selectedConfigurations}
              onFilterChange={handleFilterChange}
              availableTypes={availableTypes}
              availableConfigurations={availableConfigurations}
            />

            
            <hr className="mt-5" />
          </div>

          {/* Product Cards Section */}
          <div className="grid mb-10 px-5 lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-10 shadow hover:shadow-lg transition"
              >
                <DemoCard />
              </div>
            ))} */}

            {filteredProducts?.map((product) => (
              <div key={product._id}>
                <ProductCard params={name} product={product} />
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

        <Drawer
          overlay={false}
          open={openFilter}
          className="overflow-auto"
          onClose={closeFilterDrawer}
        >
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="blue-gray">
              LOGO
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeFilterDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          <div className="h-[calc(100vh-80px)] overflow-auto p-4">
            <SideFilters
              priceRange={priceRange}
              selectedTypes={selectedTypes}
              selectedConfigurations={selectedConfigurations}
              onFilterChange={handleFilterChange}
              availableTypes={availableTypes}
              availableConfigurations={availableConfigurations}
            />
          </div>
        </Drawer>

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
          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Write the message and then click button.
            </Typography>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Your Name
              </Typography>
              <Input label="Username" />
              <Textarea label="Message" />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button className="ml-auto" onClick={handleOpen}>
              Submit
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default ProductPage;
