import React from "react";
import Link from "next/link";

export default function Invitation() {
  return (
    <div className="px-6 my-16 md:container md:mx-auto">
      <div className="text-center bg-white rounded-xl px-6 py-6 shadow-lg">
        <h2 className="leading-6 mb-4 font-bold text-2xl">
          Let's work
          <br />
          Together!
        </h2>

        <Link href="/contact">
          <a className="inline-block py-2 w-full rounded-xl bg-red-400 text-white font-bold mt-6">
            Contact me
          </a>
        </Link>
      </div>
    </div>
  );
}
