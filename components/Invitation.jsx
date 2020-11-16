import React from "react";
import Link from "next/link";

export default function Invitation() {
  return (
    <div className="bg-yellow-300 mx-auto my-32 w-1/2 rounded-xl">
      <div className="rounded-xl flex py-10 px-8 align-center">
        <div className="flex-1 text-center">
          <h3 className="text-3xl font-bold">
            Let's Work
            <br />
            Together!
          </h3>
        </div>

        <div className="flex-1 text-center">
          <Link href="/contact-me">
            <a className="cta-primary py-2 px-3 rounded-lg bg-red-500 text-white">
              Contact Me!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
