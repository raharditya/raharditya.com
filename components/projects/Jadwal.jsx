import React, { useRef, useEffect } from "react";
import Project from "../Project";
import ProjectStack from "../ProjectStack";
import JadwalHeader from "./JadwalHeader";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Jadwal() {
  const textColor = "#373737";
  const bgColor = "#DDE2E5";
  const titleColor = "#F17457";
  const indexColor = "#D1D8DC";
  const containerColor = "#BBC9D1";

  const link = "https://jadwal.raharditya.com/";
  const github = "https://github.com/Asebodi/jadwal-pemadatan";
  const stacks = ["React", "Sass"];
  const year = "March 2020";

  gsap.registerPlugin(ScrollTrigger);
  const jadwalHeader = useRef();

  const jadwalDecor = useRef();

  useEffect(() => {
    gsap.fromTo(
      jadwalHeader.current.querySelector(".jadwal-header-1"),
      { rotate: 0 },
      {
        rotate: -3,
        scrollTrigger: {
          trigger: jadwalHeader.current,
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
      jadwalHeader.current.querySelector(".jadwal-header-2"),
      { rotate: 0, x: -50 },
      {
        rotate: 9,
        x: 0,
        scrollTrigger: {
          trigger: jadwalHeader.current,
          start: "top bottom",
          end: "-=130",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     jadwalDecor.current.querySelector(".jadwal-decor-1"),
  //     { rotate: 4.5 },
  //     {
  //       rotate: -2,
  //       scrollTrigger: {
  //         trigger: jadwalDecor.current,
  //         start: "top bottom",
  //         end: "top",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     jadwalDecor.current.querySelector(".jadwal-decor-2"),
  //     { rotate: 8.5 },
  //     {
  //       rotate: 4,
  //       scrollTrigger: {
  //         trigger: jadwalDecor.current,
  //         start: "top bottom",
  //         end: "top",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     jadwalDecor.current.querySelector(".jadwal-decor-3"),
  //     { rotate: -7 },
  //     {
  //       rotate: -9,
  //       scrollTrigger: {
  //         trigger: jadwalDecor.current,
  //         start: "top bottom",
  //         end: "top",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div>
      <Project
        index="03"
        title="KKN Covid/nJogja"
        indexColor={indexColor}
        titleColor={titleColor}
        header={<JadwalHeader />}
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
              className="milliard-bold text-3xl md:text-4xl leading-none"
              style={{ color: titleColor }}
            >
              Jadwal
              <br />
              Pemadatan
            </h2>
            <small
              className="block mb-4 md:mb-10"
              style={{ color: titleColor }}
            >
              AN FISIP UNS
            </small>

            <JadwalHeader gsapRef={jadwalHeader} />

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
              This Progressive Web App (PWA) is a class schedule app for my
              faculty during the early Covid-19 times when schedules are rapidly
              changing which created confusions within students. Unfortunately,
              the badly-formatted schedule that the campus gave to students were
              hard to read. So I decided to make this PWA to help with this
              issue.
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

        <div
          className="lg:flex lg:flex-row-reverse mt-8 lg:mt-12 mb-8"
          ref={jadwalDecor}
        >
          <div className="relative lg:w-1/2 flex flex-col items-center justify-center lg:ml-8">
            <img
              src="/assets/projects/jadwal/jadwal-decor-1.png"
              alt=""
              className="relative w-56 jadwal-decor-1 ml-16 md:ml-32 mb-10 md:mb-16"
              style={{ alignSelf: "start", transform: "rotate(-2deg)" }}
            />
            <img
              src="/assets/projects/jadwal/jadwal-decor-2.png"
              alt=""
              className="relative w-64 jadwal-decor-2 mr-8 md:mr-16 mb-6"
              style={{ alignSelf: "end", transform: "rotate(9deg)" }}
            />
            <img
              src="/assets/projects/jadwal/jadwal-decor-3.png"
              alt=""
              className="relative w-56 jadwal-decor-3 ml-12 md:ml-24"
              style={{ alignSelf: "start", transform: "rotate(-7deg)" }}
            />
          </div>

          <div className="lg:w-1/2">
            <h3
              className="milliard-bold text-2xl md:mb-6 mt-6 mb-1 md:mt-8 lg:mt-0"
              style={{ color: titleColor }}
            >
              Implementation
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              I used Adobe XD to sketch and design the inital concept for this
              project. Design-wise, I put orange accent color to resemble my
              faculty’s theme color. I used React for this project and was
              deployed using Netlify. React-transition-group was used to handle
              the view transition as well as the schedule day transition. This
              PWA is installable and can be accessed when offline using service
              worker with stale-while-revalidate strategy.
            </p>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This PWA doesn’t use any database. Instead, it uses local files to
              store the schedule data. I preferred using this method since it
              significantly shortened the development time. It’s also easier to
              cache, making this PWA fully able to be opened while offline,
              without requiring to fetch the schedule from any external
              databases.
            </p>
          </div>
        </div>
      </Project>
    </div>
  );
}
