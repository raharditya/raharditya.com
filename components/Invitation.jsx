import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

export default function Invitation() {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="invitation text-center md:container md:mx-auto px-6 relative mb-12">
      <img src="/assets/invite-bg.svg" alt="" className="w-full" />

      <div
        className="py-10 md:py-24 backdrop-glass w-4/5 mx-auto rounded-lg absolute shadow-lg"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <small className="text-light text-defocused block mb-2 md:mb-4">
          Hire Me
        </small>
        <h2 className="font-bold text-xl md:text-3xl">Let's work Together</h2>

        <Link href="/contact-me">
          <a className="inline-block py-2 px-8 rounded-lg header-cta-bg hover:bg-green-500 transition duration-150 ease-in-out text-white text-sm md:text-base font-bold mt-6">
            Get in touch
          </a>
        </Link>
      </div>
    </div>
  );
}
