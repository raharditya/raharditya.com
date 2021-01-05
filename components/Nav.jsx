import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <nav className="w-full h-16 bg-gray-200 flex items-center">
      <div className="flex justify-between items-center container md:px-8 mx-auto">
        <h3 className="text-heading-serif text-2xl">
          <Link href="/">
            <a>Raharditya</a>
          </Link>
        </h3>

        <ul className="flex items-center gap-12">
          <li>
            <Link href="/">
              <a className="active text-light text-sm">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a className="text-light text-sm">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-light text-sm">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-light text-sm">Contact Me</a>
            </Link>
          </li>
        </ul>

        <div className="burger md:hidden">
          <div className="line1 rounded-sm h-1 w-6 my-1 bg-black"></div>
          <div className="line2 rounded-sm h-1 w-6 my-1 bg-black"></div>
          <div className="line2 rounded-sm h-1 w-6 my-1 bg-black"></div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
