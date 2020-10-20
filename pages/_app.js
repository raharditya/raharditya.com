import Nav from "../components/Nav";
import "../styles/global.scss";
import "../styles/Home.module.scss";
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [pos, setPos] = useState(0)

  return (
    <>
      <Nav />
      <Component {...pageProps} pos={pos} setPos={setPos} />
    </>
  );
}

export default MyApp;
