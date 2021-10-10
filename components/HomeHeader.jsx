import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

function HomeHeader(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <header
      className="h-screen relative"
      id="top"
      style={{ backgroundColor: "#DBC4F8" }}
    >
      <div className="md:flex md:container md:mx-auto px-6 pt-20">
        <div className="">
          <p className="milliard-book text-white">Hi, my name is</p>
          <h1 className="milliard-bold text-3xl text-white leading-none">
            Muhammad Raharditya Athafitra
          </h1>

          <p className="mt-6 font-bold" style={{ color: "#463160" }}>
            I am a full-stack web/mobile developer based in Yogyakarta,
            Indonesia. I mainly work with the MERN Stack
          </p>
          {/* <p className="mt-6" style={{ color: "#463160" }}>
            I mainly code with Javascript and NodeJS, but I’ve used other
            programming languages in the past, such as Java, Python, Dart, etc.
          </p> */}
          <p className="mt-6" style={{ color: "#463160" }}>
            I have been making websites since 2018. Apart from being a
            full-stack developer, I am also skilled in UI/UX design. In 2018, I
            became the Vice Chair of the Media and Information division in my
            college study program organization. In 2019, me and my team won a
            silver medal in the 2019 KIWIE innovation competition held in Seoul,
            South Korea.
          </p>
        </div>

        <div className="">
          <img src="/assets/header/hero.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
