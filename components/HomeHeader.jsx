import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { useMediaQuery } from "./useMediaQuery";

function HomeHeader(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  const header = useRef();

  // useEffect(() => {
  //   gsap.fromTo(header.current, { opacity: 0 }, { opacity: 1 });
  // }, []);

  return (
    <header
      className="md:py-24 relative md:flex md:items-center"
      id="top"
      style={{ backgroundColor: "#DBC4F8" }}
      ref={header}
    >
      <div className="md:flex md:container md:mx-auto px-6 pt-10 md:pt-0">
        <div className="md:w-1/2 md:mr-8">
          <p className="text-white project-text">Hi, my name is</p>
          <h1 className="milliard-bold mb-8 md:mb-0 text-3xl md:text-5xl text-white leading-none">
            Muhammad Raharditya Athafitra
          </h1>

          <div className="md:hidden">
            <img
              src="/assets/header/hero.jpg"
              alt=""
              className="header-hero rounded-2xl shadow-lg mx-auto"
            />

            <div
              className="p-3 flex rounded-2xl mt-6 mx-auto"
              style={{ backgroundColor: "#C4ABE3", width: "fit-content" }}
            >
              <a
                href="https://github.com/raharditya"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <div className="bg-white flex items-center p-3 rounded-xl">
                  <img src="/assets/social/github.svg" alt="" className="h-6" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/a.raharditya/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <div className="bg-white flex items-center p-3 rounded-xl">
                  <img
                    src="/assets/social/instagram.svg"
                    alt=""
                    className="h-6"
                  />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-raharditya-athafitra-a17b201a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <div className="bg-white flex items-center p-3 rounded-xl">
                  <img
                    src="/assets/social/linkedin.svg"
                    alt=""
                    className="h-6"
                  />
                </div>
              </a>

              <a
                href="mailto:contact@raharditya.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="bg-white flex items-center p-3 rounded-xl">
                  <img src="/assets/social/mail.svg" alt="" className="h-6" />
                </div>
              </a>
            </div>
          </div>

          <p
            className="mt-6 font-bold project-text"
            style={{ color: "#463160" }}
          >
            I am a full-stack web/mobile developer based in Yogyakarta,
            Indonesia. I mainly work with the MERN Stack
          </p>
          {/* <p className="mt-6" style={{ color: "#463160" }}>
            I mainly code with Javascript and NodeJS, but I’ve used other
            programming languages in the past, such as Java, Python, Dart, etc.
          </p> */}
          <p className="mt-6 mb-6 project-text" style={{ color: "#463160" }}>
            I have been making websites since 2018. Apart from being a
            full-stack developer, I am also skilled in UI/UX design. In 2018, I
            became the Vice Chair of the Media and Information division in my
            college study program organization. In 2019, me and my team won a
            silver medal in the 2019 KIWIE innovation competition held in Seoul,
            South Korea.
          </p>
          <Link href="/contact-me">
            <a className="header-btn transition duration-150 py-2 px-5 font-bold rounded-xl text-lg text-white">
              Contact me!
            </a>
          </Link>
        </div>

        <div className="hidden md:flex-1 md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
          <img
            src="/assets/header/hero.jpg"
            alt=""
            className="header-hero rounded-2xl shadow-lg"
          />
          <div
            className="p-3 flex rounded-2xl mt-6"
            style={{ backgroundColor: "#C4ABE3" }}
          >
            <a
              href="https://github.com/raharditya"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 header-social"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl relative">
                <div
                  className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-3rem",
                    backgroundColor: "#71638E",
                  }}
                >
                  raharditya
                </div>
                <img src="/assets/social/github.svg" alt="" className="h-6" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/a.raharditya/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 header-social"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl relative">
                <div
                  className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-3rem",
                    backgroundColor: "#71638E",
                  }}
                >
                  @a.raharditya
                </div>
                <img
                  src="/assets/social/instagram.svg"
                  alt=""
                  className="h-6"
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-raharditya-athafitra-a17b201a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 header-social"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl relative">
                <div
                  className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-4.4rem",
                    backgroundColor: "#71638E",
                  }}
                >
                  Muh. Raharditya
                </div>
                <img src="/assets/social/linkedin.svg" alt="" className="h-6" />
              </div>
            </a>

            <a
              href="mailto:contact@raharditya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl relative">
                <div
                  className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-3rem",
                    backgroundColor: "#71638E",
                  }}
                >
                  contact@raharditya.com
                </div>
                <img src="/assets/social/mail.svg" alt="" className="h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
