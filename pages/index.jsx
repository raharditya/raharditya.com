import Head from "next/head";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import Stack from "../components/containers/Stack";
import Projects from "../components/containers/Projects";
import Invitation from "../components/Invitation";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <Introduction />
        <Stack />
        <Projects />
        <Projects bgColor="bg-yellow-100" />
        <Invitation />
      </div>
    </div>
  );
}
