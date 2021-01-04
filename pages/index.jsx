import Head from "next/head";
import data from "../data";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <HomeHeader />
      </div>
    </div>
  );
}
