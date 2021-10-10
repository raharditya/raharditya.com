import React from "react";
import Project from "../Project";
import ProjectStack from "../ProjectStack";
import SemnasHeader from "./SemnasHeader";

export default function Semnas() {
  const textColor = "#4D4833";
  const bgColor = "#CAC4A0";
  const titleColor = "#ffffff";
  const indexColor = "#C2BA93";
  const containerColor = "#ACA47E";

  const link = "https://github.com";
  const github = "https://github.com";
  const stacks = ["React", "NodeJS"];
  const year = "July 2020";

  return (
    <div>
      <Project
        index="04"
        title="KKN Covid/nJogja"
        indexColor={indexColor}
        titleColor={titleColor}
        header={<SemnasHeader />}
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
              Seminar
              <br />
              Ticketing
            </h2>
            <small
              className="block mb-4 md:mb-10"
              style={{ color: titleColor }}
            >
              Temu Admi 2019
            </small>

            <SemnasHeader />

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
            <h3 className="milliard-bold text-2xl md:mb-6 text-white mt-6 mb-1">
              Implementation
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This is a ticketing website that I made for an offline seminar as
              part of a national-level event that I participated in. It was made
              using GatsbyJS with Firebase as the database.
            </p>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This website allows people to register to the seminar. Upon
              registration, registrant had to pay according to the instructions.
              The website also generates transaction code as well as the
              ticket’s QR code. This QR code was then used as ticket on
              entrance. The event comitee scans the QR code and made sure that
              the ticket was valid, hasn’t been used before, and has already
              been paid using data from the database and an interface that I
              made.
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
      </Project>
    </div>
  );
}
