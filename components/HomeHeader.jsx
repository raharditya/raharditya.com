import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

function HomeHeader(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <header className="h-screen">
      <div className="md:px-8 flex h-full items-center text-center relative overflow-hidden">
        <div
          className="backdrop absolute left-0 right-0 bottom-0 w-full z-0"
          style={{
            height: isDesktop ? "48%" : "100%",
            width: isDesktop ? "100%" : "40%",
          }}
        ></div>

        <img
          src="/assets/header/decor1.svg"
          alt=""
          className="absolute w-32 z-0"
          style={{
            top: isDesktop ? "45%" : "-1rem",
            left: isDesktop ? "-2rem" : "-2rem",
          }}
        />

        <img
          src="/assets/header/decor2.svg"
          alt=""
          className="absolute w-24 z-0"
          style={{
            bottom: isDesktop ? "8%" : "50%",
            left: isDesktop ? "4rem" : "12rem",
          }}
        />

        <img
          src="/assets/header/decor3.svg"
          alt=""
          className="absolute w-24 z-0"
          style={{
            bottom: isDesktop ? "23%" : "3rem",
            right: isDesktop ? "-1rem" : "70%",
          }}
        />
        <img
          src="/assets/header/decor4.svg"
          alt=""
          className="absolute w-40 z-0"
          style={{
            top: isDesktop ? "4%" : "6rem",
            right: isDesktop ? "-2.8rem" : "-2.5rem",
          }}
        />

        <div className="container mx-auto w-full text-center">
          <p className="text-light relative z-10">Hi. My name is</p>

          <div className="header-img relative mt-20">
            <img
              src="/assets/header/hero.jpg"
              alt=""
              className="rounded-full w-32 shadow-xl inline relative z-10"
            />
            <h2 className="text-heading-serif font-bold text-5xl absolute text-hero-1 text-hero">
              Adit
            </h2>
            <h2 className="text-heading-serif font-bold text-5xl absolute text-hero-2 text-hero">
              Raharditya
            </h2>
          </div>

          <small className="text-defocused text-light mt-32 block relative z-10">
            Scroll
          </small>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
