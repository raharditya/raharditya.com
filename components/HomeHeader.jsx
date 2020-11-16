import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function HomeHeader(props) {
  return (
    <header className="h-screen bg-gray-200">
      <div className="container md:px-8 mx-auto flex h-full items-center">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl leading-none mb-4">
            Adit
            <br /> Raharditya
          </h1>
          <p className="mb-8 text-gray-700">
            Fullstack Web Developer
            <br />
            Based in Yogyakarta, Indonesia
          </p>

          <div className="main-cta">
            <Link href="#projects">
              <a className="cta-secondary mr-6  py-2 px-3 rounded-lg border-4 border-red-300 text-gray-700 box-border">
                See Projects
              </a>
            </Link>
            <Link href="/contact-me">
              <a className="cta-primary py-2 px-3 rounded-lg bg-red-500 text-white">
                Contact Me!
              </a>
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <img src="/assets/header-hero.png" alt="" className="w-full" />
        </div>
      </div>
    </header>
  );
}

HomeHeader.propTypes = {};

export default HomeHeader;
