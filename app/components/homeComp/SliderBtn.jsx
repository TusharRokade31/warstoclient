import React from "react";
import Link from "next/link";
import { Button } from "@/store/features/materialTailwind/tailwindComp";

const SliderBtn = () => {
  return (
    <div className="flex justify-center gap-2">
      <Link href={"/collection/products"}>
        <Button size="lg" color="white">
          Explore
        </Button>
      </Link>
      <Button size="lg" color="white" variant="text">
        Get In Touch
      </Button>
    </div>
  );
};

export default SliderBtn;
