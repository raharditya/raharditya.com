import React from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

export default function Invitation() {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="" style={{ backgroundColor: "#DBC4F8" }}>
      <div className="text-center md:container md:mx-auto px-6 relative py-12 md:py-20">
        <h3 className="text-white milliard-bold text-3xl md:text-4xl mb-8">
          Thank you for reading!
        </h3>

        <p style={{ color: "#463160" }} className="text-sm">
          Feel free to contact me at
        </p>
        <a
          href="mailto:contact@raharditya.com"
          className="font-bold underline project-text"
          style={{ color: "#463160" }}
        >
          contact@raharditya.com
        </a>

        <div
          className="p-3 rounded-2xl mt-8 mx-auto"
          style={{ backgroundColor: "#C4ABE3", width: "fit-content" }}
        >
          <div className="flex">
            <a
              href="https://github.com/Asebodi"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl">
                <img src="/assets/social/github.svg" alt="" className="h-6" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/a.raharditya/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl">
                <img
                  src="/assets/social/instagram.svg"
                  alt=""
                  className="h-6"
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-raharditya-athafitra-a17b201a9/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="bg-white hover:bg-gray-300 transition duration-150 flex items-center p-3 rounded-xl">
                <img src="/assets/social/linkedin.svg" alt="" className="h-6" />
              </div>
            </a>
          </div>

          <div className="">
            <Link href="/contact-me">
              <a
                className="bg-white hover:bg-gray-300 transition duration-150 block mt-3 rounded-xl py-2"
                style={{ color: "#463160" }}
              >
                Contact me
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
