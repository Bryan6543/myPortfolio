"use client";

import { IoMenu } from "react-icons/io5";
import Wrapper from "../subComponents/Wrapper";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../subComponents/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import FadeInSection from "../utils/FadeInSection";
import gsap from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navList = [
    { label: "Home", linkTo: "/" },
    { label: "Projects", linkTo: "/projects" },
    { label: "About Me", linkTo: "/aboutUs" },
    { label: "Download CV", linkTo: " " },
  ];

 
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 

    const robotic = document.querySelector<HTMLImageElement>("#robotic-image");

    if (robotic) {
      gsap.to(robotic, {
        // x: "30%", 
        right: 50,
        // yPercent: -20, 
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          router.push("/projects");
        },
      });
    } else {
      router.push("/projects");
    }
  };

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
                {navList.map((item) =>
                  item.label === "Projects" ? (
                    <a
                      key={item.label}
                      href={item.linkTo}
                      onClick={handleProjectsClick}
                    >
                      <li
                        className={`relative inline-block 
                          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                          after:bottom-0 after:h-[2px] after:w-0 after:bg-current 
                          after:transition-all after:duration-300 hover:after:w-full 
                          transition duration-500 hover:text-black hover:cursor-pointer hover:-translate-y-1`}
                      >
                        {item.label}
                      </li>
                    </a>
                  ) : (
                    <Link key={item.label} href={item.linkTo}>
                      <li
                        className={`relative inline-block 
                          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                          after:bottom-0 after:h-[2px] after:w-0 after:bg-current 
                          after:transition-all after:duration-300 hover:after:w-full 
                          transition duration-500 hover:text-black hover:cursor-pointer hover:-translate-y-1
                          ${
                            item.label === "Download CV"
                              ? "text-[#ff4a4a] font-black"
                              : ""
                          }`}
                      >
                        {item.label}
                      </li>
                    </Link>
                  )
                )}
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
              className={`fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-sm lg:hidden transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            ></div>

            {/* Mobile Menu */}
            <div
              className={`fixed bg-black inset-0 top-0 left-0 h-screen w-80 max-w-88 z-40 lg:hidden transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0 open" : "-translate-x-full"
              } shadow-2xl p-5`}
            >
              <h2 className="text-white font-anta text-5xl py-20">
                Bryan Fernando
              </h2>
              <ul>
                {navList.map((item) =>
                  item.label === "Projects" ? (
                    <a
                      key={item.label}
                      href={item.linkTo}
                      onClick={handleProjectsClick}
                    >
                      <li className="text-white py-4 text-xl">{item.label}</li>
                    </a>
                  ) : (
                    <Link key={item.label} href={item.linkTo}>
                      <li className="text-white py-4 text-xl">{item.label}</li>
                    </Link>
                  )
                )}
              </ul>
            </div>
          </div>
        </Wrapper>
      </FadeInSection>
    </div>
  );
}
