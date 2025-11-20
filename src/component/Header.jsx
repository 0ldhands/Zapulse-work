import React from "react";
import logo from "../assets/logo/logo.png"
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navi=useNavigate()

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo} // replace with your logo
          alt="Logo"
          className="h-6 w-auto"
        />
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
        <li className="cursor-pointer hover:text-black transition">Services</li>
        <li className="cursor-pointer hover:text-black transition">Industry</li>
        <li className="cursor-pointer hover:text-black transition">Portfolio</li>
        <li className="cursor-pointer hover:text-black transition">Case study</li>
        <li className="cursor-pointer hover:text-black transition">Blog</li>
        <li className="cursor-pointer hover:text-black transition">About us</li>
      </ul>

      {/* Contact Button (Pure Tailwind) */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm" onClick={()=>navi('/Contact')}>
        Contact Us ↗
      </button>
    </nav>
  );
}
