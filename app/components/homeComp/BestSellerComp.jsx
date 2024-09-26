import React from "react";
import { Button } from "@/store/features/materialTailwind/tailwindComp";

const BestSellerComp = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
          Best Sellers
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Explore popular pieces that blend elegance and practicality, favored by our satisfied customers.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://fiesta-mebel.ru/assets/images/resources/91267/garderob-pax-ikea-kombinaciya-s-10-yaschikami-250x58x236-sm-belyy-1.jpg"
              alt="Person"
            />

            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Marta Clermont
              </p>
              <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Amet I love liquorice jujubes pudding croissant I love pudding.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://mebelyes.com/wp-content/uploads/2021/05/213.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Marta Clermont
              </p>
              <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Amet I love liquorice jujubes pudding croissant I love pudding.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://furnicomp.co.uk/cdn/shop/products/Klassy_3_Door_3_Drawer_Black_Matt_Mirrored_Sliding_Door_Wardrobe_KL-01_1024x1024.png?v=1578393154"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Anthony Geek
              </p>
              <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Apple pie macaroon toffee jujubes pie tart cookie caramels.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://www.ikea.com/rs/sr/images/products/pax-forsand-garderober-tamnosiva-tamnosiva__1182483_pe897229_s5.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Alice Melbourne
              </p>
              <p className="mb-4 text-xs text-gray-100">Human Resources</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                elit.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://fineartqatar.com/wp-content/uploads/2019/07/20.40.1001.00-trio-medium-dolap-636023725047430175.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Martin Garix
              </p>
              <p className="mb-4 text-xs text-gray-100">Good guy</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                flank.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://мебель-по-цене-фабрики.рф/thumb/2/i9MwZJWs1-25VeXnSpL76g/r/d/vstroennyj-shkaf-ilbert.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Andrew Larkin
              </p>
              <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Moonfish, steelhead, lamprey southern flounder tadpole fish
                bigeye.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i.pinimg.com/originals/79/af/53/79af53111f02f3b42f9b30db542413ca.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Sophie Denmo
              </p>
              <p className="mb-4 text-xs text-gray-100">Designer</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                Veggies sunt bona vobis, proinde vos postulo esse magis grape
                pea.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://m.media-amazon.com/images/I/61yB7zJ5xLL.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-25  opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Benedict Caro
              </p>
              <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                I love cheese, especially airedale queso. Cheese and biscuits
                halloumi.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Button size="md" color="white">
                View More
              </Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerComp;
