import gsap from "gsap";
import { useEffect, useRef } from "react";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (logoRef.current) {
  //     gsap.to(logoRef.current, {
  //       rotation: 360,
  //       duration: 6,
  //       ease: "back.inOut(1.7)",
  //       repeat: -1,
  //       yoyo: true,
  //     });
  //   }
  // });

  return (
    <div
      ref={logoRef}
      className={`${className} h-[40px] w-[40px] bg-gradient-to-b from-secondary/20 to-secondary/60  flex justify-center items-center rounded-[50%] text-primary`}
    >
      <p>B</p>
    </div>
  );
}
