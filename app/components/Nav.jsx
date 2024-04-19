"use client";
import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import { BiNavigation } from "react-icons/bi";
const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const currentPath = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];
  return (
    /* Nav */
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-white z-10">
      <div className="z-20">
        <Link href="/">
          <div className="hover:scale-110 hover:text-blue-500 duration-300">
            <BiNavigation size={50} />
          </div>
        </Link>
      </div>

      {/* nav menu */}
      <ul className="hidden md:flex gap-5">
        {navLinks.map((navLink) => (
          <li
            key={navLink.href}
            className={`${
              currentPath === navLink.href
                ? "border-b-2 border-blue-500 "
                : "relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            }`}
          >
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-20">
        <Hamburger
          toggled={isOpen}
          toggle={() => [setMobileNav(!mobileNav), setOpen(!isOpen)]}
        />
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !mobileNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black"
        }
      >
        {navLinks.map((navLink) => (
          <li key={navLink.to} className="py-6 text-3xl">
            <Link
              href={navLink.href}
              onClick={() => {
                [setMobileNav(!mobileNav), setOpen(!isOpen)];
              }}
            >
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
