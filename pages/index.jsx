import Head from "next/head";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import Stack from "../components/containers/Stack";
import Projects from "../components/containers/Projects";
import Invitation from "../components/Invitation";
import HomeIntroduction from "../components/HomeIntroduction";
import FeaturedProject from "../components/FeaturedProject";
import Project from "../components/Project";
import Kkn from "../components/projects/Kkn";
import Glegleg from "../components/projects/Glegleg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Adit Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta property="og:url" content="https://raharditya.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adit Raharditya" />
        <meta
          property="og:description"
          content="Adit Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        <meta
          property="og:image"
          content="https://raharditya.com/assets/general-thumb.jpg"
        />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <Stack />
        <Kkn />
        <Glegleg />
        {/* <HomeIntroduction />
        <FeaturedProject />
        <Projects />
        <Invitation /> */}
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
