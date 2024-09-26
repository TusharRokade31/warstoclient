"use client";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ProductCard from "./productgrid";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";

const NewCategoriess = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const collectionMenu = useSelector((state) => state.categoriess.Collections);
  const check = collectionMenu.slice(1, 7);

  if (param.catid == null) {
    router.push(`/collection/products`);
  }
  const router = useRouter();

  const [alignment, setAlignment] = useState(param.catid);
  // console.log(alignment)

  const handleChange = (event, newAlignment) => {
    if (newAlignment == null) {
      setAlignment("products");
      router.push(`/collection/products`);
    } else {
      setAlignment(newAlignment);
      router.push(`/collection/${newAlignment}`);
    }
  };

  const children = [
    <ToggleButton
      value="products"
      key="products"
      sx={{ width: "auto", height: "auto" }}
    >
      <div className="flex items-center">
        <img
          className="w-12 h-10 object-cover hidden lg:block"
          src="https://fiesta-mebel.ru/assets/images/resources/91267/garderob-pax-ikea-kombinaciya-s-10-yaschikami-250x58x236-sm-belyy-1.jpg"
          alt=""
        />
        <p className="ms-2 capitalize">All products</p>
      </div>
    </ToggleButton>,

    check.map((collection) => {
      return (
        <ToggleButton
          value={collection?.name}
          key={collection?.name}
          sx={{ width: "auto", height: "auto" }}
        >
          <div className="flex items-center">
            <img
              className="w-12 h-10 object-cover hidden lg:block"
              src="https://mebelyes.com/wp-content/uploads/2021/05/213.jpg"
              alt=""
            />
            <p className="ms-2 capitalize">{collection?.name}</p>
          </div>
        </ToggleButton>
      );
    }),
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <div className="my-5 overflow-x-auto">
        <Stack className="flex items-left md:items-center">
          <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
            {children}
          </ToggleButtonGroup>
        </Stack>
      </div>
      
    </>
  );
};

export default NewCategoriess;
