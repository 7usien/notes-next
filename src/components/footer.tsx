import Link from "next/link";
import React from "react";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
 return (
  <div className="w-full border-t py-2 mt-12 relative">
   <div className="flex items-center justify-center flex-row capitalize gap-2">
    <Link
     className=" bg-blue-700 p-2 text-white rounded-full absolute -top-4 m-auto"
     href="#top">
     <FaAngleUp />
    </Link>
    <p className="text-gray-600 tracking-wide py-4">
     All rights are resreved to D.notes 2024 - KSA
    </p>
   </div>
  </div>
 );
};

export default Footer;
