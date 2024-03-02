"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const middlevariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomvariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };
  const links = [
    { id: 0, title: "home", path: "/" },
    { id: 1, title: "men", path: "/men" },
    { id: 2, title: "women", path: "/women" },
    { id: 3, title: "kids", path: "/kids" },
    { id: 4, title: "about", path: "/about" },
    { id: 5, title: "contact", path: "/contact" },
    { id: 6, title: "eleganza", path: "/images/logo.png" },
  ];
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-20 w-full border-b-2 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between py-3">
            <div className="md:order-last">
              <Link href="#">
                <IoCartOutline size={30} className="cursor-pointer" />
              </Link>
            </div>

            <div className="md:order-first">
              <Link href="/" className="flex items-center">
                <h1 className="capitalize font-medium text-3xl">
                  {links[6].title}
                </h1>
              </Link>
            </div>

            <button
              className="md:hidden w-[29px] h-6 flex flex-col justify-between"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <motion.div
                variants={topVariant}
                animate={menuOpen ? "opened" : "closed"}
                className="w-[29px] h-[2px] bg-black origin-left"
              ></motion.div>
              <motion.div
                variants={middlevariant}
                animate={menuOpen ? "opened" : "closed"}
                className="w-[29px] h-[2px] bg-black origin-left"
              ></motion.div>
              <motion.div
                variants={bottomvariant}
                animate={menuOpen ? "opened" : "closed"}
                className="w-[29px] h-[2px] bg-black origin-left"
              ></motion.div>
            </button>

            <div
              className={`${
                menuOpen ? "" : "hidden"
              } w-full mt-3 md:items-center md:justify-between md:mt-0 md:flex md:w-auto`}
            >
              <ul className="flex flex-col md:gap-x-5 xl:gap-x-8 lg:gap-x-6 md:gap-y-0 gap-y-4 md:flex-row items-center pt-6 pb-3 md:pt-0 md:pb-0">
                {links.slice(0, 6).map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    className={`nav-items ${
                      pathname === link.path ? "text-congressBlue" : ""
                    }`}
                  >
                    <li aria-current="page">{link.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
