import { BubblegumSans } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

type dummyProducts = {
  image: string;
  category: string;
  title: string;
  price: number;
  url: string;
};

interface ProductCardProps {
  product: dummyProducts;
}

export default function ProductsCard({ product }: ProductCardProps) {
  const { image, category, title, price, url } = product;
  return (
    <div className="cursor-pointer">
      <Image
        src={image}
        width={200}
        height={300}
        objectFit="cover"
        alt="Product"
        className="w-full"
      />
      <div className="space-y-1 text-center mt-5">
        <p className="text-xs text-gray-300">{category}</p>
        <h5
          className={`text-xl tracking-wider text-gray-800 font-bold ${BubblegumSans.className}`}
        >
          {title}
        </h5>
        <h5 className="text-green-600">${price}</h5>
      </div>
    </div>
  );
}
