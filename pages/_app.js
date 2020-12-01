import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";

import Footer from "../components/containers/Footer";

function MyApp({ Component, pageProps }) {
  const [pos, setPos] = useState(0);

  return (
    <>
      <Nav />
      <Component {...pageProps} pos={pos} setPos={setPos} />
      <Footer />
    </>
  );
}

export default MyApp;
