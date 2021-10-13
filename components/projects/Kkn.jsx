import React, { useRef, useEffect } from "react";
import Project from "../Project";
import ProjectStack from "../ProjectStack";
import KknHeader from "./KknHeader";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Kkn() {
  const textColor = "#4D3139";
  const bgColor = "#FFABC4";
  const titleColor = "#ffffff";
  const indexColor = "#F0A5BB";
  const containerColor = "#EB94AD";

  const link = "https://github.com";
  const github = "https://github.com";
  const stacks = ["React", "NodeJS"];
  const year = "July 2020";

  gsap.registerPlugin(ScrollTrigger);
  const kknHeader = useRef();

  useEffect(() => {
    gsap.fromTo(
      kknHeader.current.querySelector(".featured-col-1"),
      { y: 0 },
      {
        y: 200,
        scrollTrigger: {
          trigger: kknHeader.current,
          start: "top bottom",
          end: "top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      kknHeader.current.querySelector(".featured-col-2"),
      { y: 0 },
      {
        y: -400,
        scrollTrigger: {
          trigger: kknHeader.current,
          start: "top bottom",
          end: "top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      kknHeader.current.querySelector(".featured-col-3"),
      { y: -300 },
      {
        y: 50,
        scrollTrigger: {
          trigger: kknHeader.current,
          start: "top bottom",
          end: "top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <Project
        index="01"
        title="KKN Covid/nJogja"
        indexColor={indexColor}
        titleColor={titleColor}
        header={<KknHeader />}
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
              className="milliard-bold text-3xl md:text-4xl leading-none mb-4 md:mb-10"
              style={{ color: titleColor }}
            >
              KKN Covid
              <br />
              Jogja
            </h2>

            <KknHeader gsapRef={kknHeader} />

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
              Concept
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              This is a progressive web app that I made in early 2020 for my
              Community Service Program in my college, which was done online due
              to the Covid-19 pandemic. This website aims to educate people
              about the new pandemic. With that in mind, I designed the outline
              of what this web app{" "}
            </p>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              The initial concept of this PWA revolves around the information
              regarding Covid-19 and its total cases. So I included cumulative
              Covid-19 cases on the scale of national and local down to each
              district. Up-to-date news is also crucial for the public’s
              education about the pandemic, so I compiled covid-related news
              from 5 different sources, covering national and local news.
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
            <h3 className="milliard-bold text-2xl md:mb-6 text-white mt-6 mb-1">
              Implementation
            </h3>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              I built this full-stack PWA using MongoDB, Express, React, NodeJS.
              The NodeJS server connects to the front-end via REST API and it
              does a series of scheduled cron jobs, such as running the web
              scraper to get news and covid data using Puppeteer and Cheerio.
              The news scraper runs every 2 hours automatically and scrapes
              covid-19 related news from predefined sources (CNBC Indonesia,
              Detik, Kompas for national news, as well as Suara, and TribunNews
              for local news).
            </p>
            <p className="mb-4 project-text" style={{ color: textColor }}>
              The covid-19 web scraper gets data from Yogyakarta Special Region
              Government’s website for the local Covid-19 cases data. The
              website accepts zip codes, so I compiled every zip-codes in
              Yogyakarta Province and programmed the scaper to automatically
              input those zip codes one by one and save the scraped data to the
              database. I also used Mathdroid’s Indonesia COVID-19 API to show
              the current data and set a cron job each day to log that
              particular day’s Covid-19 data and save it to the database to
              create the line chart.
            </p>
          </div>
        </div>
      </Project>
    </div>
  );
}
