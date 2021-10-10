import React from "react";
import Project from "../Project";
import KknHeader from "./KknHeader";

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
        <h3 className="milliard-bold text-2xl text-white mt-6 mb-1">Concept</h3>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          This is a progressive web app that I made in early 2020 for my
          Community Service Program in my college, which was done online due to
          the Covid-19 pandemic. This website aims to educate people about the
          new pandemic. With that in mind, I designed the outline of what this
          web app{" "}
        </p>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          The initial concept of this PWA revolves around the information
          regarding Covid-19 and its total cases. So I included cumulative
          Covid-19 cases on the scale of national and local down to each
          district. Up-to-date news is also crucial for the public’s education
          about the pandemic, so I compiled covid-related news from 5 different
          sources, covering national and local news.
        </p>

        <img src="/assets/projects/01-mid.png" alt="" className="my-8" />

        <h3 className="milliard-bold text-2xl text-white mt-6 mb-1">
          Implementation
        </h3>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          I built this full-stack PWA using MongoDB, Express, React, NodeJS. The
          NodeJS server connects to the front-end via REST API and it does a
          series of scheduled cron jobs, such as running the web scraper to get
          news and covid data using Puppeteer and Cheerio. The news scraper runs
          every 2 hours automatically and scrapes covid-19 related news from
          predefined sources (CNBC Indonesia, Detik, Kompas for national news,
          as well as Suara, and TribunNews for local news).
        </p>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          The covid-19 web scraper gets data from Yogyakarta Special Region
          Government’s website for the local Covid-19 cases data. The website
          accepts zip codes, so I compiled every zip-codes in Yogyakarta
          Province and programmed the scaper to automatically input those zip
          codes one by one and save the scraped data to the database. I also
          used Mathdroid’s Indonesia COVID-19 API to show the current data and
          set a cron job each day to log that particular day’s Covid-19 data and
          save it to the database to create the line chart.
        </p>
      </Project>
    </div>
  );
}
