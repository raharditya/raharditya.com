import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";
import { useMediaQuery } from "../components/useMediaQuery";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AnimatedCursor from "react-animated-cursor";

import "../styles/global.scss";
import Footer from "../components/containers/Footer";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [showSTT, setShowSTT] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (prevPos.y < currPos.y && currPos.y < -200) {
      setShowSTT(true);
    } else {
      setShowSTT(false);
    }
    // console.log(currPos.x);
    // console.log(currPos.y);
  });

  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={36}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.5}
      />
      <Nav />
      <Component {...pageProps} isMobile={isMobile} />
      <Footer />
      <Link href="#top">
        <a
          className={`scroll-to-top fixed p-4 rounded-md shadow-lg bg-white z-20 transition duration-150 ease-in-out ${
            showSTT ? "opacity-100" : "opacity-0"
          }`}
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
