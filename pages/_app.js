import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";

import "../styles/global.scss";
import Footer from "../components/containers/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
