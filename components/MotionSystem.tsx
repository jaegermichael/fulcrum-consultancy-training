"use client";

import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section, .trust-strip, .impact, .corporate-band, .location-strip, .course-row, .why-list article, .audience-grid article, .service-list span, .promise-steps article"
      )
    );

    targets.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-order", String(index % 4));
    });

    if (reduceMotion) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    targets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
