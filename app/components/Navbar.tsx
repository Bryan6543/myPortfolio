"use client";

import { IoMenu } from "react-icons/io5";
import Wrapper from "./subComponents/Wrapper";
import { usePathname } from "next/navigation";
import Logo from "./subComponents/Logo";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import FadeInSection from "../utils/FadeInSection";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const pathname = usePathname();

  const navList = [
    { label: "Projects", linkTo: "/sd" },
    { label: "Work Experience", linkTo: " " },
    { label: "About Me", linkTo: "/aboutUs" },
    { label: "Download CV", linkTo: " " },
  ];

  return (
    <div className="absolute z-50 w-full">
      <FadeInSection direction="down" delay={1} className="opacity-0">
        <Wrapper>
          <div className="flex items-center justify-between">
            {/* logo */}
            <div>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            {/* navigation links */}
            <div className="hidden md:block">
              <ul className="flex text-white font-anta gap-10">
                {navList.map((index) => (
                  <Link key={index.label} href={index.linkTo}>
                    <li
                      className={`relative inline-block 
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                    after:bottom-0 after:h-[2px] after:w-0 after:bg-current 
                    after:transition-all after:duration-300 hover:after:w-full 
                    transition duration-500 hover:text-black hover:cursor-pointer hover:-translate-y-1
                    ${pathname === "/aboutUs" ? "hover:text-white" : ""}
                    ${
                      index.label === "Download CV"
                        ? "text-[#788cfc] hover:text-[#B42613]"
                        : ""
                    }
                    `}
                    >
                      {index.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* hamburger */}
            <div onClick={toggleMobileMenu} className="z-50">
              {!isMobileMenuOpen ? (
                <IoMenu className="md:hidden text-[24px] cursor-pointer text-primary" />
              ) : (
                <FaTimes className="md:hidden text-[24px] cursor-pointer text-primary" />
              )}
            </div>
            {/* Mobile Menu Overlay */}
            <div
              onClick={closeMobileMenu}
              className={`fixed inset-0 h-screen w-screen bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            ></div>
            {/* Mobile Menu */}
            <div
              className={`fixed bg-black top-0 left-0 h-full w-80 max-w-88 z-40 lg:hidden transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0 open" : "-translate-x-full"
              } shadow-2xl p-5`}
            >
              <h2 className="text-white font-anta text-5xl py-20">
                Bryan Fernando
              </h2>
              <ul className="">
                {navList.map((index) => (
                  <Link key={index.label} href={index.linkTo}>
                    <li className="text-white py-4 text-xl">{index.label}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </FadeInSection>
    </div>
  );
}
