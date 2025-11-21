"use client";
import { forwardRef } from "react";

type ButtonV1Props = {
  className?: string; // optional additional CSS
};

const ButtonV1 = forwardRef<HTMLDivElement, ButtonV1Props>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={`text-3xl md:text-2xl font-anta rounded-3xl border-2 bg-black/50 border-primary px-5 py-3 transition duration-500  hover:bg-black cursor-pointer hover:border-black ${
        className ?? ""
      }`}
    >
      ENTER
    </div>
  );
});

ButtonV1.displayName = "ButtonV1";
export default ButtonV1;
