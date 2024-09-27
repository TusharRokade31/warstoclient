"use client";
import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";

const BannerSection = React.memo(() => {
  return (
    <div className="relative mb-8">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/028/207/246/small_2x/hotel-lobby-with-scandinavian-style-furniture-profesionalgrapy-ai-generated-photo.jpg"
        alt="Banner"
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-30">
        <h1 className="text-3xl md:text-4xl font-bold">Featured Collections</h1>
      </div>
    </div>
  );
});
BannerSection.displayName = "BannerSection";

const Collections = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.categoriess.Collections,
    shallowEqual
  );

  const fetchCategories = useCallback(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="container mx-auto px-0 lg:px-24 pt-28 pb-10">
      <BannerSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 lg:gap-8">
        {data.map((collection) => (
          <div
            key={collection?.name}
            className="bg-white p-2 lg:p-0 overflow-hidden"
          >
            <Link href={`/collection/${collection?.name}`}>
              <div className="w-full lg:h-80 transform transition-transform duration-300 ease-in-out hover:scale-105">
                {collection?.image.map((img) => (
                  <img
                    key={img}
                    // src={img}
                    src="https://www.dtalemodern.com/media/catalog/product/cache/1/small_image/416x/9df78eab33525d08d6e5fb8d27136e95/f/o/foster_single_seater_charlotte_3.jpg"
                    alt={img}
                    className="w-full h-[200px] lg:h-full object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </Link>
            <div className="p-0 lg:p-4">
              <h3 className="text-lg md:text-3xl m-1 font-baskerville">
                {collection.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
Collections.displayName = "Collections";

export default Collections;
