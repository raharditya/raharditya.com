import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

function HomeHeader(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <header className="h-screen relative" id="top">
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

        <div className="container mx-auto -mt-16 w-full text-center">
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

          {/* <small className="text-defocused text-light mt-32 block relative z-10">
            Scroll
          </small> */}

          <div
            className="absolute p-4 bg-white md:flex md:items-center shadow-lg rounded-md"
            style={{
              bottom: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div className="mb-4 md:mb-0 md:mr-4">
              <Link href="/contact-me">
                <a className="header-cta-bg hover:bg-green-500 transitio n duration-150 ease-in-out py-3 px-4 rounded-md block h-full text-white w-full mb-4 md:mb-0">
                  Contact
                </a>
              </Link>
            </div>

            <div className="flex">
              <Link href="https://www.instagram.com/a.raharditya/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social header-cta-bg hover:bg-green-500 transition duration-150 ease-in-out p-2 rounded-md block h-full mr-4 relative group"
                >
                  <div
                    className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-3rem",
                      backgroundColor: "#71638E",
                    }}
                  >
                    @a.raharditya
                  </div>
                  <img src="/assets/social/instagram.svg" alt="" />
                </a>
              </Link>
              <Link href="https://github.com/Asebodi">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social header-cta-bg hover:bg-green-500 transition duration-150 ease-in-out p-2 rounded-md block h-full relative mr-4"
                >
                  <div
                    className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-3rem",
                      backgroundColor: "#71638E",
                    }}
                  >
                    Asebodi
                  </div>
                  <img src="/assets/social/github.svg" alt="" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/adit-raharditya-a17b201a9/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social header-cta-bg hover:bg-green-500 transition duration-150 ease-in-out p-2 rounded-md block h-full relative"
                >
                  <div
                    className="social-detail rounded-md absolute text-white py-1 px-2 text-sm group-hover:hidden"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-4rem",
                      backgroundColor: "#71638E",
                    }}
                  >
                    Muh. Raharditya
                  </div>
                  <img src="/assets/social/linkedin.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
