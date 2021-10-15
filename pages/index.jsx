import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import Stack from "../components/Stack";
import Invitation from "../components/Invitation";
import Kkn from "../components/projects/Kkn";
import Glegleg from "../components/projects/Glegleg";
import Jadwal from "../components/projects/Jadwal";
import Semnas from "../components/projects/Semnas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raharditya's</title>
        <link rel="icon" href="/icons/icon192.png" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Muhammad Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta property="og:url" content="https://raharditya.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Raharditya's" />
        <meta
          property="og:description"
          content="Muhammad Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
      </Head>

      <div className="project-container">
        <HomeHeader />
        <Stack />
        <Kkn />
        <Glegleg />
        <Jadwal />
        <Semnas />
        <Invitation />
      </div>
    </div>
  );
}
