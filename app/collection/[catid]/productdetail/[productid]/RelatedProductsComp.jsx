import Link from "next/link";
import React from "react";

const RelatedProductsComp = ({ data }) => {
  console.log('related product data', data)
  return (
    <>
      {data?.map((item) => {
        return (
          <Link
            key={item._id}
            href={`/collection/products/productdetail/${item._id}`}
          >
            <div className="flex flex-col space-y-2">
              {item?.images?.map((img) => {
                return (
                  <img
                  key={img.url}
                    src="https://www.dtalemodern.com/media/catalog/product/cache/1/thumbnail/800x/9df78eab33525d08d6e5fb8d27136e95/m/i/microfiber_sofa.jpg"
                    alt="Product"
                    className="rounded-lg"
                  />
                );
              })}
              <p className="text-gray-900 font-semibold">{item.name}</p>
              <p className="text-gray-500">₹{item.price.amount}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RelatedProductsComp;
