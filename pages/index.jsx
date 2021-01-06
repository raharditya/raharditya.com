import Head from "next/head";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import Stack from "../components/containers/Stack";
import Projects from "../components/containers/Projects";
import Invitation from "../components/Invitation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <Stack />
        <Projects />
        <Invitation />
      </div>
    </div>
  );
}
