import React, { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { NavLink } from "./NavLink";

function Nav(props) {
  const [showBg, setShowBg] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -200) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
    // console.log(currPos.x);
    // console.log(currPos.y);
  });

  return (
    <nav
      className={`${
        showBg ? "active shadow-lg" : ""
      } w-full px-6 md:px-0 h-16 flex items-center`}
    >
      <div className="flex justify-between items-center container md:px-8 mx-auto">
        <h3 className="text-heading-serif text-xl">
          <Link href="/">
            <a>Raharditya</a>
          </Link>
        </h3>

        <ul
          className={`items-center gap-8 md:gap-12 md:flex ${
            navOpen ? "nav-mobile-open" : ""
          }`}
        >
          <li>
            <NavLink
              href="/"
              exact
              className="text-light text-2xl md:text-sm"
              onClick={() => setNavOpen(false)}
            >
              Home
            </NavLink>
            {/* <Link href="/">
              <a className="active text-light text-sm">Home</a>
            </Link> */}
          </li>
          <li>
            <NavLink
              href="/projects"
              className="text-light text-2xl md:text-sm"
              onClick={() => setNavOpen(false)}
            >
              Projects
            </NavLink>
            {/* <Link href="/projects">
              <a className="text-light text-sm">Projects</a>
            </Link> */}
          </li>
          <li>
            <NavLink
              href="/contact-me"
              exact
              className="text-light text-2xl md:text-sm"
              onClick={() => setNavOpen(false)}
            >
              Contact Me
            </NavLink>
            {/* <Link href="/contact-me">
              <a className="text-light text-sm">Contact Me</a>
            </Link> */}
          </li>

          <h2 className="mt-24 font-bold md:hidden">raharditya.com</h2>
        </ul>

        <div
          className={`burger md:hidden ${
            navOpen ? "toggle" : ""
          } cursor-pointer`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className="line1 rounded-sm h-1 w-6 my-1 bg-black"></div>
          <div className="line2 rounded-sm h-1 w-6 my-1 bg-black"></div>
          <div className="line3 rounded-sm h-1 w-6 my-1 bg-black"></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
