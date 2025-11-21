"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Background() {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const roboticRef = useRef<HTMLImageElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const robotic = roboticRef.current;

    if (!container || !background) return;

    let defaultAnimation: gsap.core.Tween;

    // Start Animation
    const scaleInOut = () => {
      gsap.set(background, {
        scale: 10,
      });
      gsap.set(robotic, {
        opacity: 0,
      });

      gsap.to(background, {
        scale: 1.5,
        duration: 2,
        ease: "power4.Out",
        onComplete: () => {
          startDefaultAnimation();
        },
      });

      gsap.to(robotic, {
        opacity: 1,
        duration: 5,
        delay: 2,
        ease: "power4.out",
      });
    };

    scaleInOut();

    // Default floating animation
    const startDefaultAnimation = () => {
      defaultAnimation = gsap.to(background, {
        x: "+=10",
        y: "+=5",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    };
    startDefaultAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed w-full h-screen overflow-hidden -z-10"
    >
      {/* Background Image */}
      <Image
        ref={backgroundRef}
        src="/home_background.jpg"
        width={1920}
        height={1080}
        priority
        className="w-full h-screen object-cover object-[72%] -z-10 absolute blur-sm"
        alt="home_background_image"
      />

      {/* Background gradient */}
      <div
        ref={gradientRef}
        className="inset-0 w-full h-full -z-10 absolute"
        style={{
          background:
            "linear-gradient(180deg, rgba(40, 5, 239, 0.125) 0%, rgba(0, 0, 0, 0.565) 100%)",
        }}
      />

      <Image
        ref={roboticRef}
        src="/bryan_fernando_robotic.png"
        width={1024}
        height={1536}
        priority
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2/3 md:translate-x-0 w-auto object-cover h-[500px] opacity-0 md:object-contain md:h-[85%] lg:h-[800px] xl:h-[90%] "
        alt="robotic_Bryan Fernando"
      />
    </div>
  );
}
