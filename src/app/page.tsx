import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSection from "@/components/InfoSection/InfoSection";
import PopularBrands from "@/components/PopularBrands/PopularBrands";
import ProductsHome from "@/components/ProductsHome/ProductsHome";
import TopBar from "@/components/TopBar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <ProductsHome />
      <PopularBrands />
    </>
  );
}
