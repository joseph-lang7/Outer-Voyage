import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black h-auto max-w-screen flex flex-col md:flex-row justify-center gap-4 md:gap-[50px] p-8 text-white">
      <div className="max-w-[500px]">
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptas dolorum cupiditate, eos similique quae voluptate iure.
            Ipsum est, pariatur veniam modi ad suscipit eos ut reprehenderit
            saepe excepturi similique.
          </p>
          <div className="flex gap-3 mt-2">
            <div className="hover:text-blue-500 duration-300 hover:scale-150 cursor-pointer">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={30} />
              </a>
            </div>
            <div className="hover:text-blue-500  duration-300 hover:scale-150 cursor-pointer">
              <a href="https://www.instagram.com/" target="_blank">
                <FaSquareInstagram size={30} />
              </a>
            </div>
            <div className="hover:text-blue-500  duration-300 hover:scale-150 cursor-pointer">
              <a href="https://twitter.com/" target="_blank">
                <FaSquareXTwitter size={30} />
              </a>
            </div>
            <div className="hover:text-blue-500  duration-300 hover:scale-150 cursor-pointer">
              <a href="https://youtube.com/" target="_blank">
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-2 md:mt-0">Company</h2>
        <div>
          <ul>
            <Link href="/">
              <li className="hover:text-blue-500 duration-300 hover:ml-2">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-blue-500 duration-300 hover:ml-2">
                Legal
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-blue-500 duration-300 hover:ml-2">
                Technology
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-56">
        <h2 className="text-2xl font-bold mt-2 md:mt-0">Contact Us</h2>
        <div>
          <ul>
            <li className="flex gap-1 items-center hover:text-blue-500 duration-300 hover:ml-2 cursor-pointer">
              {" "}
              <FaPhone /> +1 234 567 8900
            </li>
            <li className="w-full flex gap-1 items-center hover:text-blue-500 duration-300 hover:ml-2 cursor-pointer">
              {" "}
              <MdMail /> info@outervoyage.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
