import React, { useRef, useEffect } from "react";
import Project from "../Project";
import ProjectStack from "../ProjectStack";
import GleglegHeader from "./GleglegHeader";
import { useMediaQuery } from "../useMediaQuery";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Glegleg() {
  const textColor = "#4D4833";
  const bgColor = "#E1D1CC";
  const titleColor = "#6C553D";
  const indexColor = "#DDC7C0";
  const containerColor = "#CEBEB9";

  const link = "https://glegleg-id.web.app/";
  const github = "https://github.com/Asebodi/glegeg-id";
  const stacks = ["React", "Tailwind"];
  const year = "January 2021";

  gsap.registerPlugin(ScrollTrigger);
  const gleglegHeader = useRef();

  const isDesktop = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    gsap.fromTo(
      gleglegHeader.current.querySelector(".glegleg-left-img"),
      { x: 0 },
      {
        x: isDesktop ? 100 : 140,
        scrollTrigger: {
          trigger: gleglegHeader.current,
          start: "top bottom",
          end: "-=130",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gleglegHeader.current.querySelector(".glegleg-right-img"),
      { x: 0 },
      {
        x: isDesktop ? -100 : -140,
        scrollTrigger: {
          trigger: gleglegHeader.current,
          start: "top bottom",
          end: "-=130",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <Project
        index="02"
        title="gleGleg"
        indexColor={indexColor}
        titleColor={titleColor}
        header={<GleglegHeader />}
        bgColor={bgColor}
        containerColor={containerColor}
        link={link}
        github={github}
        stacks={stacks}
        year={year}
      >
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:mr-8">
            <h2
              className="milliard-bold text-3xl md:text-4xl leading-none mb-4 md:mb-10"
              style={{ color: titleColor }}
            >
              Glegleg
            </h2>

            <GleglegHeader gsapRef={gleglegHeader} />

            <div className="lg:hidden">
              <ProjectStack
                link={link}
                github={github}
                stacks={stacks}
                year={year}
                containerColor={containerColor}
                bgColor={bgColor}
                textColor={textColor}
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:mt-12">
            <h3
              className="milliard-bold text-2xl md:mb-6 mt-6 mb-1"
              style={{ color: titleColor }}
            >
              Concept
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This project is a web-app for pre-ordering system of a beverages
              business called gleGleg. The purpose of this web-app is to view
              the business’ catalogue as well as to pre-order the products.
            </p>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              Buyers can add products into the cart and add more quantity of the
              products in the cart. When they’re ready to checkout, they will be
              asked to enter their information such as name, address, and phone
              number. Once they fill this information, it will be saved so
              future orders will be much faster and easier.
            </p>

            <div className="hidden lg:block">
              <ProjectStack
                link={link}
                github={github}
                stacks={stacks}
                year={year}
                containerColor={containerColor}
                bgColor={bgColor}
                textColor={textColor}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:mt-12 mb-8">
          <div className="lg:w-1/2 flex items-center  justify-center lg:ml-8 my-12 lg:my-0">
            <div className="relative">
              <img
                src="/assets/projects/glegleg/mid-main.png"
                alt=""
                className="my-8 relative z-10"
                style={{ height: isDesktop ? 320 : 350, width: "auto" }}
              />
              <img
                src="/assets/projects/glegleg/mid-tr.png"
                alt=""
                className="my-8 absolute z-20"
                style={{
                  height: 100,
                  top: "-3rem",
                  right: "-4rem",
                  transform: "rotate(24deg)",
                }}
              />
              <img
                src="/assets/projects/glegleg/mid-tl.png"
                alt=""
                className="my-8 absolute z-0"
                style={{
                  height: 100,
                  top: "-3rem",
                  left: "-5rem",
                  transform: "rotate(-16deg)",
                }}
              />
              <img
                src="/assets/projects/glegleg/mid-bl.png"
                alt=""
                className="my-8 absolute z-20"
                style={{
                  height: 100,
                  bottom: "-3rem",
                  left: "-5rem",
                  transform: "rotate(-6deg)",
                }}
              />
              <img
                src="/assets/projects/glegleg/mid-br.png"
                alt=""
                className="my-8 absolute z-0"
                style={{
                  height: 120,
                  bottom: "-3rem",
                  right: "-7rem",
                  transform: "rotate(14deg)",
                }}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="mb-4 project-text" style={{ color: textColor }}>
              When it’s finished, they will be taken to Whatsapp chat with the
              business’ contact person with the order details as well as the
              transaction id ready to be sent. The buyer’s order will also be
              saved so that they can repeat their order in a single touch.
            </p>

            <h3
              className="milliard-bold text-2xl md:mb-6 mt-6 mb-1"
              style={{ color: titleColor }}
            >
              Implementation
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This project was initially designed in Figma and later was made
              using React. I wrote the entire layout from scratch and used
              TailwindCSS to help with the styling. The cart and order history,
              as well as user’s shipping information are all saved to the
              device’s local storage using a custom hook. This is to make it
              easy for the buyer to repeat their previous order.
            </p>
          </div>
        </div>
      </Project>
    </div>
  );
}
