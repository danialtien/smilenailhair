"use client";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Nabarin: React.FC = () => {
  useEffect(() => {
    const debounce = (fn: any) => {
      let frame: number;

      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScoll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    document.addEventListener("scroll", debounce(storeScoll), {
      passive: true,
    });

    storeScoll();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Nabarin;
