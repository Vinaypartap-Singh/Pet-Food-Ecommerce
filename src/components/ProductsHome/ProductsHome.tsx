import { BubblegumSans } from "@/app/layout";
import Image from "next/image";
import ProductsCard from "./Component/ProductsCard";

interface dummyProducts {
  image: string;
  category: string;
  title: string;
  price: number;
  url: string;
}

export default function ProductsHome() {
  const dummyProductsList: dummyProducts[] = [
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-002-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-009-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },

    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-006-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },

    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-004-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },

    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-009-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },

    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-pet-product-009-600x600.jpg",
      category: "dummy",
      title: "Pet Food",
      price: 35.55,
      url: "/",
    },
  ];

  return (
    <div className="mt-24 max-w-7xl m-auto">
      <div className="flex items-center justify-center flex-col">
        <Image
          src={
            "https://gcroquette.oceanwp.org/wp-content/uploads/2022/07/bone-feline-pet-background-heap-1.jpg"
          }
          width={400}
          height={400}
          alt="Pet Food"
        />
        <h3 className={`text-5xl mt-3 ${BubblegumSans.className}`}>
          Best Dog Food Brands
        </h3>

        <div className="mt-16 w-full flex flex-wrap gap-8 justify-center">
          {dummyProductsList.map((data, index) => {
            return <ProductsCard key={index} product={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
