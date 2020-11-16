import Head from "next/head";
import { motion } from "framer-motion";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import HomeSkills from "../components/HomeSkills";
import HomeStack from "../components/HomeStack";
import Invitation from "../components/Invitation";

export default function Home({ pos, setPos }) {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <HomeSkills />
        <HomeStack />

        <Invitation />
      </div>
    </div>
  );
}
