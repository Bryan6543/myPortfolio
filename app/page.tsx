"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonV1 from "./components/subcomponents/ButtonV1";
import Image from "next/image";
import Wrapper from "./components/subcomponents/Wrapper";

export default function Page() {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const roboticRef = useRef<HTMLImageElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textNameRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const robotic = roboticRef.current;
    const gradient = gradientRef.current;
    const nameText = textNameRef.current;

    if (!container || !background) return;

    let defaultAnimation: gsap.core.Tween;
    let isMouseActive = false;

    if (nameText) {
      const text = nameText.innerText;
      nameText.innerText = "";
      // Doing the split text manually since its payed
      const letters = text.split("");
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        nameText?.appendChild(span);
      });
// Text Animation
      gsap.from(nameText.querySelectorAll("span"), {
        opacity: 0,
        y: 50,
        duration: 0.1,
        delay: 2,
        ease: "back.out(1)",
        stagger: 0.05,
      });
    }

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
      className="relative w-full h-screen overflow-hidden"
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
        className="absolute bottom-0 object-cover max-h-[543px] overflow-visible"
        alt="robotic_Bryan Fernando"
      />

      {/* Content */}
      <div className="w-full h-screen absolute flex justify-center pt-20 z-20 text-shadow-2xs text-primary">
        <Wrapper>
          <div className="w-full h-full flex flex-col pt-30 items-center text-center">
            <h1
              ref={textNameRef}
              className="text-6xl leading-[60px] drop-shadow-md font-bold font-anta"
            >
              Bryan
            </h1>
             <h1
              ref={textNameRef}
              className="text-6xl leading-[60px] drop-shadow-md font-bold font-anta"
            >
              Fernando
            </h1>
            <p className="mt-4 font-antic">
              Hi there traveler, <br /> Welcome to my portfolio! I'm Bryan
              Fernando, a web developer. In this space I'll share a glimpse into
              my work and what I love to do.
            </p>
            <div className="mt-auto mb-20">
              <ButtonV1 />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
