import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [pos, setPos] = useState(0);

  return (
    <>
      <Nav />
      <Component {...pageProps} pos={pos} setPos={setPos} />
    </>
  );
}

export default MyApp;
