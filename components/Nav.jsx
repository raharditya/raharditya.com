import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <nav className="w-full h-16 bg-gray-200 flex items-center">
      <div className="flex justify-between items-center container md:px-8 mx-auto">
        <h3 className="font-extrabold text-2xl text-red-500">
          <Link href="/">
            <a>RHDT</a>
          </Link>
        </h3>

        <ul>
          <li>
            <Link href="/">
              <a className="text-sm mr-4">Home</a>
            </Link>

            <Link href="#projects">
              <a className="text-sm mr-4">Projects</a>
            </Link>

            <Link href="/contact">
              <a className="text-sm mr-4">Contact Me</a>
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
