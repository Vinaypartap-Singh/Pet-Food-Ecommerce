"use client";

import Image from "next/image";
import Logo from "../../assets/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

type navItemType = {
  title: string;
  url: string;
};

export default function Header() {
  const [flyoutCart, setFlyoutCart] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const navItem: navItemType[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "My Account",
      url: "/account",
    },
  ];

  return (
    <div className="min-h-[70px] flex items-center justify-start">
      <div className="max-w-7xl w-full h-full px-4 lg:hidden">
        {/* Mobile Menu */}
        <div className="flex justify-between items-center w-full">
          <Image src={Logo} width={120} height={90} alt="Logo" />

          <div className="flex gap-3 items-center">
            <button onClick={() => console.log("Cart")}>
              <FaShoppingBasket size={20} />
            </button>

            <button className="cursor-pointer" onClick={() => setOpenNav(true)}>
              <HiMenu size={25} />
            </button>
          </div>
        </div>

        <div
          className={`absolute ${
            openNav
              ? "top-0 left-0 opacity-100"
              : "top-0 left-[-1000px] opacity-0"
          }  h-full w-full bg-yellow-400 px-10 py-10 transition-all`}
        >
          <div className="relative flex justify-end">
            <button onClick={() => setOpenNav(false)}>
              <RxCross2 size={30} />
            </button>
          </div>

          {/* Mobile Nav Items */}

          <div>
            <div className="flex flex-col gap-y-20 mt-10">
              {navItem.map(({ title, url }, index) => {
                return (
                  <Link
                    className="text-2xl text-right transition-all hover:text-3xl hover:underline"
                    key={index}
                    href={url}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full lg:flex px-10 items-center justify-between">
        <Image src={Logo} width={120} height={90} alt="Logo" />

        <div className="flex gap-x-10 items-center">
          {navItem.map(({ title, url }, index) => {
            return (
              <Link
                className="text-xs uppercase text-right transition-all hover:text-sm hover:underline hover:font-bold"
                key={index}
                href={url}
              >
                {title}
              </Link>
            );
          })}
          <button>
            <FaShoppingBasket />
          </button>
        </div>
      </div>
    </div>
  );
}
