import Head from "next/head";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import Stack from "../components/containers/Stack";
import Projects from "../components/containers/Projects";
import Invitation from "../components/Invitation";
import HomeIntroduction from "../components/HomeIntroduction";
import FeaturedProject from "../components/FeaturedProject";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <HomeIntroduction />
        <Stack />
        <FeaturedProject />
        <Projects />
        <Invitation />
      </div>

      {/* <div className="fixed p-4" style={{ left: "2rem", top: "4rem" }}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 p-2 rounded-md block h-full mb-4"
        >
          <img src="/assets/social/instagram.svg" alt="" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 p-2 rounded-md block h-full mb-4"
        >
          <img src="/assets/social/github.svg" alt="" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 p-2 rounded-md block h-full"
        >
          <img src="/assets/social/linkedin.svg" alt="" />
        </a>
      </div> */}
    </div>
  );
}
