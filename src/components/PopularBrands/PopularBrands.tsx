import { BubblegumSans } from "@/app/layout";
import Image from "next/image";

export default function PopularBrands() {
  const imagesData: { image: string }[] = [
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-croquette-img-009.jpg",
    },
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-croquette-img-008.jpg",
    },
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-croquette-img-007.jpg",
    },
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-croquette-img-006.jpg",
    },
    {
      image:
        "https://gcroquette.oceanwp.org/wp-content/uploads/2022/05/owp-croquette-img-010.jpg",
    },
  ];
  return (
    <div className="my-20 text-center">
      <h2 className={`${BubblegumSans.className} text-4xl`}>Popular Brands</h2>
      <div className="flex justify-center mt-10 gap-x-6">
        {imagesData.map((data, index) => {
          return (
            <Image
              key={index}
              src={data.image}
              alt="Product Images"
              width={200}
              height={300}
              objectFit="cover"
            />
          );
        })}
      </div>
    </div>
  );
}
