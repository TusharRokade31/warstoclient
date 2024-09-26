"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Button,
} from "@/store/features/materialTailwind/tailwindComp";

const CategoriesTabs = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Opulance",
      value: "html",
      desc: `https://plus.unsplash.com/premium_photo-1723901829993-56f5582053e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      heading:"Discover Luxury in Every Detail",
      content:"The Opulence collection redefines elegance with its luxurious designs and high-quality materials. Each wardrobe is meticulously crafted to provide not only ample storage but also a statement piece that enhances your home’s aesthetic. Experience the perfect blend of style and functionality with our opulent solutions."
    },
    {
      label: "NexGen",
      value: "react",
      desc: `https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      heading:"Embrace the Future of Furniture",
      content:"NexGen wardrobes offer cutting-edge designs tailored for modern living. Featuring smart technology and innovative materials, this collection prioritizes convenience without compromising on style. Elevate your space with versatile storage solutions that adapt to your lifestyle and needs."
    },
    {
      label: "SmartSpace",
      value: "vue",
      desc: `https://i.pinimg.com/originals/b4/6a/96/b46a9668152d8b375fe666061426120f.jpg`,
      heading:"Maximize Efficiency with Intelligent Design",
      content:"SmartSpace wardrobes are engineered to optimize storage while maintaining a sleek appearance. Designed for urban living, these modular units help you utilize every inch of available space efficiently. Experience the harmony of form and function with our intelligent wardrobe solutions."
    },
    {
      label: "StyleShift",
      value: "angular",
      desc: `https://мебель-по-цене-фабрики.рф/thumb/2/QV7jPtF6Ncr4_PxSzY-zgQ/r/d/vstroennyj-shkaf-kupe-modest.jpg`,
      heading:"Transform Your Space with Versatile",
      content:"The StyleShift collection embodies adaptability, allowing you to personalize your wardrobe to suit your evolving tastes. With a range of styles and configurations, these wardrobes ensure that your storage solutions can shift and grow with you, making them perfect for any home environment."
    },
    {
      label: "Sovereign",
      value: "svelteo",
      desc: `https://mebelkakmebel.ru/assets/images/products/17596/raspashnoy-shkaf-ipaumirin.jpg`,
      heading:"Experience Regal Storage Solutions",
      content:"Sovereign wardrobes bring a touch of royalty to your living space. Crafted with premium materials and intricate detailing, these wardrobes offer a sophisticated storage solution that reflects your refined taste. Enjoy a perfect balance of grandeur and practicality with Sovereign."
    },
    {
      label: "Ornet",
      value: "svelte",
      desc: `https://www.gpwih.com/wp-content/uploads/2018/03/solid-wood-fitted-wardrobes-doors-with-regard-to-recent-interior-furniture-alluring-solid-wood-bedroom-wardrobe-with-slide.jpg`,
      heading:"Sustainable Elegance for Modern Living",
      content:"The Ornet collection focuses on eco-friendly materials and sustainable practices without sacrificing style. These wardrobes are designed for the environmentally conscious consumer, combining modern aesthetics with responsible craftsmanship. Elevate your home while making a positive impact on the planet with Ornet."
    },
  ];

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-20 lg:py-16">
        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg mb-6 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
            We Believe You Are Unique
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Why settle for furniture that is made for someone else? With
            aesthetic designs, premium materials, and skilled artisanship, our
            team is committed to improving your shopping experience.
          </p>
        </div>
      </div>
      <div className="px-5 md:px-5 w-full lg:px-36">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none overflow-auto border-b border-blue-gray-50 bg-whie p-0"
            indicatorProps={{
              className:
                "bg-white border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`z-10  ${
                  activeTab === value ? "bg-white text-gray-900" : ""
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc,content, heading }) => (
              <TabPanel
                key={desc}
                value={value}
                className="px-0 pt-3 pb-0 h-[400px] lg:h-[570px]"
              >
                <div className="relative h-full">
                  <img
                    src={desc}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid w-full place-items-center bg-black/50 opacity-100 lg:opacity-0  transition-opacity duration-500 ease-in-out transform hover:opacity-100 hover:translate-y-0">
                    <div className="slide-up w-3/4 text-center lg:w-2/4 md:w-3/4 transform translate-y-4 transition-transform duration-500 ease-in-out">
                      <Typography
                        variant="h2"
                        color="white"
                        className="mb-4 text-md md:text-4xl lg:text-3xl"
                      >
                        {heading}
                      </Typography>
                      <Typography
                        variant="lead"
                        color="white"
                        className="mb-5 lg:mb-12  text-sm lg:text-lg opacity-90"
                      >
                        {content}
                      </Typography>
                      <div className="flex justify-center gap-2">
                        <Button
                          className={`lg:px-7 lg:text-sm lg:py-3 sm:text-xs sm:px-4 sm:py-2 text-base `}
                          color="white"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default CategoriesTabs;
