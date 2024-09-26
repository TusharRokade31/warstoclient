import Link from "next/link";
import { Button, Typography } from "@/store/features/materialTailwind/tailwindComp";
import React from "react";

const ShopNowBanner = () => {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.architonic.com/img_pro2-4/125/2447/interniarmadio-4-b.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute grid h-full w-full items-center bg-black/75">
        <div className=" px-20 sm:py-24 w-4/4 md:pt-24 pl-12 pb-12 lg:w-2/4 md:w-3/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-xl md:text-2xl lg:text-3xl"
          >
            Transform Your Space with Warsto
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-4 text-base md:text-base lg:text-lg opacity-80"
          >
            Discover precision-engineered wardrobes and storage solutions that blend innovation, style, and functionality. At Warsto, we offer customizable furniture designed to fit your unique needs, all available online with instant pricing and fast delivery. Experience effortless shopping and elevate your home today.
          </Typography>
          <div className="flex gap-2">
            <Link href={"/collection/products"}>
              <Button size="md" color="white">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNowBanner;
