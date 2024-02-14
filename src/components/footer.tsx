import Link from "next/link";
import React from "react";

const Footer = () => {
 return (
  <div className="w-full border-t py-2 mt-12">

<div className="flex items-center justify-center flex-row capitalize gap-2">
   <Link
    className=" bg-blue-700 p-2 text-white rounded "
    href="#top">
    Up
   </Link>
   <p className="text-gray-600 tracking-wide py-2">All rights are resreved to D.notes 2024 - KSA</p>
  </div>
  </div>
 );
};

export default Footer;
