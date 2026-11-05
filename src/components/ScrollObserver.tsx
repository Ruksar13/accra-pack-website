"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fallback if IntersectionObserver is unsupported
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal, .reveal-fade, .reveal-scale, [data-reveal]").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Once revealed, unobserve to maintain performance and avoid flicker
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.08,
    });

    const initObserver = () => {
      const elements = document.querySelectorAll(
        ".reveal, .reveal-fade, .reveal-scale, [data-reveal]"
      );
      elements.forEach((el) => {
        // If element is already above or in current viewport on initial render, reveal it
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("revealed");
        } else {
          observer.observe(el);
        }
      });
    };

    // Small delay to ensure DOM is ready after hydration / route transition
    const timeoutId = setTimeout(initObserver, 80);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

