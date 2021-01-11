import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

export default function Invitation() {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="invitation text-center mb-12 md:flex md:mt-12">
      <div
        className="invitation-bg text-white text-heading-serif text-3xl flex items-center justify-center md:flex-grow md:h-auto md:w-1/2"
        style={{ height: isDesktop ? 280 : 400 }}
      >
        <h2>
          Let's work
          <br />
          Together
        </h2>
      </div>
      <div className="invitation-cta px-8 py-16 md:flex-grow md:w-1/2 md:px-32">
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          tempor lorem non odio tincidunt.
        </p>

        <Link href="/contact">
          <a className="inline-block py-2 px-8 rounded-full bg-red-400 text-white font-bold mt-6">
            Contact me
          </a>
        </Link>
      </div>
    </div>
  );
}
