"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade" | "scale";
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = domRef.current;
    if (!currentElement) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold,
      }
    );

    // If already in viewport on mount, trigger reveal
    const rect = currentElement.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30) {
      setIsVisible(true);
    } else {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade":
        return isVisible ? "opacity-100" : "opacity-0";
      case "scale":
        return isVisible 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95";
      case "fade-up":
      default:
        return isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-6";
    }
  };

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDuration: "650ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

