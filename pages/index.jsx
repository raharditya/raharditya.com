import Head from "next/head";
import { motion } from "framer-motion";
import data from "../data";
import HomeHeader from "../components/HomeHeader";
import HomeSkills from "../components/containers/HomeSkills";
import HomeStack from "../components/containers/HomeStack";
import Invitation from "../components/Invitation";
import CodeType from "../components/CodeType";

export default function Home({ pos, setPos }) {
  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        {/* <HomeHeader />
        <HomeSkills />
        <HomeStack />

        <Invitation /> */}
        <CodeType />
      </div>
    </div>
  );
}
