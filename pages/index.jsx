import Head from "next/head";
import ProjectItem from "../components/ProjectItem";
import ProjectNavigation from "../components/ProjectNavigation";
import { motion } from "framer-motion";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  return { props: { data } };
}

export default function Home({ pos, setPos, data }) {
  const posInc = () => {
    if (pos == data.length - 1) {
      return setPos(0);
    }

    setPos(pos + 1);
  };
  const posDec = () => {
    if (pos == 0) {
      return setPos(data.length - 1);
    }
    setPos(pos - 1);
  };
  // console.log(pos);

  return (
    <div>
      <Head>
        <title>Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="project-container">
        <ProjectNavigation pos={pos} posInc={posInc} posDec={posDec} />

        <motion.div
          className="items-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {data.map((item, idx) => {
            return <ProjectItem key={idx} idx={idx} pos={pos} data={item} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}
