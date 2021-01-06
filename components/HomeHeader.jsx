import React from "react";
import Link from "next/link";

function HomeHeader(props) {
  return (
    <header className="h-screen">
      <div className="container md:px-8 mx-auto flex h-full items-center text-center relative overflow-hidden">
        <div
          className="backdrop absolute left-0 right-0 bottom-0 w-full z-0"
          style={{ height: "48%" }}
        ></div>

        <img
          src="/assets/header/decor1.svg"
          alt=""
          className="absolute w-32 z-0"
          style={{ top: "45%", left: "-2rem" }}
        />

        <img
          src="/assets/header/decor2.svg"
          alt=""
          className="absolute w-24 z-0"
          style={{ bottom: "8%", left: "4rem" }}
        />

        <img
          src="/assets/header/decor3.svg"
          alt=""
          className="absolute w-24 z-0"
          style={{ bottom: "23%", right: "-1rem" }}
        />
        <img
          src="/assets/header/decor4.svg"
          alt=""
          className="absolute w-40 z-0"
          style={{ top: "4%", right: "-2.8rem" }}
        />

        <div className="w-full text-center">
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
