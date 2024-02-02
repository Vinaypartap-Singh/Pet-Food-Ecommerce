import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type socialMediaIcons = {
  title: string;
  icon: React.ReactNode;
  url: string;
};

export default function TopBar() {
  const socialMediaIcons: socialMediaIcons[] = [
    {
      title: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
    },
    {
      title: "Pintrest",
      icon: <FaPinterest />,
      url: "https://pinterest.com",
    },
    {
      title: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/",
    },
    {
      title: "Linked In",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/",
    },
  ];

  return (
    <div className="bg-purple-900 text-white px-10 py-4">
      {/* Icons */}
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          {socialMediaIcons.map(({ title, icon, url }, index) => {
            return (
              <Link key={index} href={url}>
                {icon}
              </Link>
            );
          })}
        </div>
        <p className="text-xs">Free delivery over $100 on all products</p>
      </div>
    </div>
  );
}
