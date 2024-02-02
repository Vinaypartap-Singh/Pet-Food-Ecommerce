import { BubblegumSans } from "@/app/layout";
import Image from "next/image";

type infoType = {
  title: string;
  btnURL: string;
  className: string;
};

export default function InfoSection() {
  const infoData: infoType[] = [
    {
      title: "Hot Summer Deals",
      btnURL: "",
      className: "info1",
    },
    {
      title: "For Your True Love",
      btnURL: "",
      className: "info2",
    },
    {
      title: "The Best Products",
      btnURL: "",
      className: "info3",
    },
  ];
  return (
    <div className="max-w-7xl m-auto mt-20 px-5">
      <div className="relative flex flex-wrap">
        {infoData.map(({ title, btnURL, className }, index) => {
          return (
            <div
              key={index}
              className={`${className} w-full md:w-1/3 lg:w-1/3 h-[400px] px-5 py-10`}
            >
              <h3
                className={`text-3xl cursor-pointer hover:font-bold hover:underline transition-all ${BubblegumSans.className}`}
              >
                {title}
              </h3>
              <button className="text-sm mt-3 text-white hover:font-bold transition-all underline">
                Shop Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
