import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInSectionProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = "up",
  delay = 0.2,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem) return;

    let xMove = 0;
    let yMove = 0;

    // Set animation direction
    if (direction === "left") xMove = -100;
    if (direction === "right") xMove = 100;
    if (direction === "up") yMove = 100;
    if (direction === "down") yMove = -100;

    gsap.fromTo(
      elem,
      { opacity: 0, x: xMove, y: yMove },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [direction, delay]);

  return (
    <div className={className} ref={sectionRef}>
      {children}
    </div>
  );
};

export default FadeInSection;
