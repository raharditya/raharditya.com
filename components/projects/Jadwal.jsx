import React from "react";
import Project from "../Project";
import ProjectStack from "../ProjectStack";
import JadwalHeader from "./JadwalHeader";

export default function Jadwal() {
  const textColor = "#373737";
  const bgColor = "#DDE2E5";
  const titleColor = "#F17457";
  const indexColor = "#D1D8DC";
  const containerColor = "#BBC9D1";

  const link = "https://github.com";
  const github = "https://github.com";
  const stacks = ["React", "NodeJS"];
  const year = "July 2020";

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
        <div className="md:flex">
          <div className="md:w-1/2 md:mr-8">
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

            <JadwalHeader />

            <div className="md:hidden">
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

          <div className="md:w-1/2 md:mt-12">
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

            <div className="hidden md:block">
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

        <div className="md:flex md:flex-row-reverse md:mt-12 mb-8">
          <div className="md:w-1/2 flex items-center justify-center md:mr-8">
            <img
              src="/assets/projects/01-mid.png"
              alt=""
              className="my-8 w-full md:w-3/5"
            />
          </div>

          <div className="md:w-1/2">
            <h3
              className="milliard-bold text-2xl md:mb-6 mt-6 mb-1"
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
