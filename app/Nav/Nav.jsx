"use client";
import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Training", href: "/training" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];
  return (
    /* Nav */
    <div className="fixed bg-blue-500 w-full h-[80px] flex justify-between items-center px-4 text-white z-10">
      <div className="z-20">
        <p>Logo</p>
      </div>

      {/* nav menu */}
      <ul className="hidden md:flex gap-5">
        {navLinks.map((navLink) => (
          <li key={navLink.to}>
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
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-blue-500"
        }
      >
        {navLinks.map((navLink) => (
          <li key={navLink.to} className="py-6 text-3xl">
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
