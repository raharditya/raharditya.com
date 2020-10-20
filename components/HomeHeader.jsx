import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function HomeHeader(props) {
  return (
    <header className="home-header padding-both">
      <div className="header-hi">
        <h1>
          Hi<span>.</span>
        </h1>
      </div>
      <div className="header-name">
        <p className="subtitle">my name is</p>
        <h1 className="title">
          Adit
          <br />
          Raharditya
        </h1>

        <div className="main-cta">
          <Link href="#works">
            <a className="cta-secondary">View works</a>
          </Link>
          <Link href="#contact-me">
            <a className="cta-primary">Contact me</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

HomeHeader.propTypes = {};

export default HomeHeader;
