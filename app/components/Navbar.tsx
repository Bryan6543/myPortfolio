"use client";

import { IoMenu } from "react-icons/io5";
import Wrapper from "./subcomponents/Wrapper";


import Logo from "./subcomponents/Logo";


export default function Navbar() {


  return (
    <div className="absolute z-50 w-full">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Logo />
          </div>
          {/* navigation links */}
          <div className="hidden"></div>
          {/* hamburger */}
          <div>
            <IoMenu className="text-[24px] cursor-pointer text-primary" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
