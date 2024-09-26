import BestSellerComp from "./components/homeComp/BestSellerComp";
import CategoriesTabs from "./components/homeComp/CategoriesTabs";
import Dummy from "./components/homeComp/Dummy";
import HeroSlider from "./components/homeComp/HeroSlider";
import HowitsWork from "./components/homeComp/HowitsWork";
import ProductScroll from "./components/homeComp/ProuductScroll";
import ShopNowBanner from "./components/homeComp/ShopNowBanner";
import VisionandMission from "./components/homeComp/VisionandMission";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategoriesTabs/>
      <ProductScroll/>
      <BestSellerComp/>
      <HowitsWork />
      <VisionandMission/>
      <Dummy/>
      <ShopNowBanner />
    </>
  );
}
