import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TopBar from "@/components/TopBar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
    </>
  );
}
