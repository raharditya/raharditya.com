import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";
import { useMediaQuery } from "../components/useMediaQuery";

import "../styles/global.scss";
import Footer from "../components/containers/Footer";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Nav />
      <Component {...pageProps} isMobile={isMobile} />
      <Footer />
      <Link href="#top">
        <a
          className="scroll-to-top fixed p-4 rounded-md shadow-lg bg-white z-20"
          style={{ bottom: "2rem", right: "2rem" }}
        >
          <img
            src="/assets/scroll-to-top.svg"
            alt=""
            className="w-6 transform transition duration-150 ease-in-out"
          />
        </a>
      </Link>
    </>
  );
}

export default MyApp;
