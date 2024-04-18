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
    <nav className="w-screen bg-blue-500 h-20 flex justify-between pl-3 pr-3 items-center">
      <div>Logo</div>
      <ul className="md:flex gap-3 hidden">
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Nav;
