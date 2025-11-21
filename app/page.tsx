"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonV1 from "./subComponents/ButtonV1";
import Image from "next/image";
import Wrapper from "./subComponents/Wrapper";

export default function Page() {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const roboticRef = useRef<HTMLImageElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textNameRef = useRef<HTMLParagraphElement>(null);
  const textHeadingRef = useRef<HTMLHeadingElement>(null);
  const enterBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const robotic = roboticRef.current;
    const gradient = gradientRef.current;
    const nameText = textNameRef.current;
    const textHeading = textHeadingRef.current;
    const enterBtn = enterBtnRef.current;

    if (!container || !background) return;

    let defaultAnimation: gsap.core.Tween;
    let isMouseActive = false;

    // para animation
    if (nameText) {
      const text = nameText.innerText;
      nameText.innerText = "";

      // Split into words (preserve spaces too)
      const words = text.split(" ");

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block"; // keep word together
        wordSpan.style.whiteSpace = "nowrap"; // stop breaking inside word

        // Split word into letters
        word.split("").forEach((letter) => {
          const letterSpan = document.createElement("span");
          letterSpan.textContent = letter;
          letterSpan.style.display = "inline-block";
          wordSpan.appendChild(letterSpan);
        });

        nameText.appendChild(wordSpan);

        // Add space back after word (except last one)
        if (wordIndex < words.length - 1) {
          nameText.appendChild(document.createTextNode(" "));
        }
      });

      // Text Animation
      gsap.from(nameText.querySelectorAll("span"), {
        opacity: 0,
        y: 50,
        duration: 0.1,
        delay: 2,
        ease: "back.out(1)",
        stagger: 0.05,
        onStart: () => {
          nameText.style.opacity = "1";
        },
      });
    }
    // Set initial state
    gsap.set(enterBtnRef.current, { opacity: 0, y: 20 });

    // Animate in
    gsap.to(enterBtnRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 3, // delay before it appears
    });

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

    // Bryan Fernando Name Fade in
    const nameFadeIn = () => {
      gsap.to(textHeading, {
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "power4.out",
      });
    };

    nameFadeIn();

    // Default floating animation
    const startDefaultAnimation = () => {
      if (!isMouseActive && background) {
        defaultAnimation = gsap.to(background, {
          x: "+=10",
          y: "+=5",
          duration: 4,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    };

    startDefaultAnimation();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Kill default animation
      if (!isMouseActive) {
        isMouseActive = true;
        if (defaultAnimation) {
          defaultAnimation.kill();
        }
      }

      // Calculate mouse position as percentage (-1 to 1)
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      gsap.to(background, {
        scale: 2,
        duration: 2,
        ease: "power4.out",
      });

      // Parallax movement
      gsap.to(background, {
        x: xPercent * 25,
        y: yPercent * 15,
        duration: 1.5,
        ease: "power2.out",
      });

      // Move robotic image
      if (robotic) {
        gsap.to(robotic, {
          x: xPercent * 15,
          y: yPercent * 10,
          duration: 1.2,
          ease: "power2.out",
        });
      }

      // Dynamic gradient shift
      if (gradient) {
        gsap.to(gradient, {
          background: `linear-gradient(${45 + xPercent * 45}deg, 
            rgba(40, 5, 239, ${0.1 + Math.abs(xPercent) * 0.1}) 0%, 
            rgba(0, 0, 0, ${0.7 + Math.abs(yPercent) * 0.2}) 100%)`,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    // Mouse leave
    const handleMouseLeave = () => {
      isMouseActive = false;

      gsap.to(background, {
        scale: 1.25,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          startDefaultAnimation();
        },
      });

      gsap.to([background, robotic], {
        x: 0,
        y: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          startDefaultAnimation();
        },
      });

      if (gradient) {
        gsap.to(gradient, {
          background:
            "linear-gradient(180deg, rgba(40, 5, 239, 0.125) 0%, rgba(0, 0, 0, 0.565) 100%)",
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      if (defaultAnimation) {
        defaultAnimation.kill();
      }
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen md:h-screen overflow-hidden"
    >
      {/* Background Image */}
      <Image
        ref={backgroundRef}
        src="/home_background.jpg"
        width={1920}
        height={1080}
        priority
        className="w-full h-screen object-cover object-[72%] -z-10 absolute"
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

      {/* Me */}
      <Image
        ref={roboticRef}
        src="/bryan_fernando_robotic.png"
        width={1024}
        height={1536}
        priority
        className="absolute bottom-0  left-1/2 transform -translate-x-1/2 md:translate-x-0 w-auto object-cover h-[500px] bgwhite opacity-0 md:object-contain md:h-[85%] lg:h-[800px] right-[15%] xl:h-[90%]"
        alt="robotic_Bryan Fernando"
      />

      {/* Content */}
      <div className="w-full h-screen absolute flex justify-center pt-20 z-20 text-shadow-2xs text-primary md:items-center md:w-1/2 md:pl-8 xl:pl-[15%] lg:h-[800px] xl:h-[900px]">
        <Wrapper>
          <div className="w-full h-full flex flex-col pt-30 items-center text-center gap-5 md:gap-6 md:items-start lg:gap-12">
            <h1
              ref={textHeadingRef}
              className="text-6xl md:text-7xl lg:text-8xl leading-[60px] drop-shadow-md font-bold font-anta opacity-0 md:text-left"
            >
              Bryan Fernando
            </h1>
            <p
              ref={textNameRef}
              className="mt- font-antic opacity-0 md:text-left xl:w-[60%]"
            >
              Hi there traveler, Welcome to my portfolio! I'm Bryan Fernando, a
              web developer. In this space I'll share a glimpse into my work and
              what I love to do.
            </p>
            {/* Need to fix the br for gsap */}
            <div className="mt-auto mb-20">
              <ButtonV1 ref={enterBtnRef} className="opacity-0" />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
