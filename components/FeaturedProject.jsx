import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "./useMediaQuery";

function FeaturedProject(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-6 md:container md:mx-auto py-16">
      <h3 className="text-center text-heading-serif section-heading text-2xl mb-8 relative z-10">
        Featured Project
      </h3>
      <Link href="/projects/kkn-covid-jogja">
        <a>
          <div
            className="featured-project relative rounded-xl flex flex-col md:flex-row gap-6 hover:shadow-xl transition duration-150 ease-in-out"
            style={{
              backgroundColor: isHovered ? "#f16e94" : "#FF8FB0",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/assets/featured/decor1.svg"
              alt=""
              className="absolute w-56 z-0"
              style={{
                top: isDesktop ? "70%" : "-4rem",
                left: isDesktop ? "70%" : "30%",
              }}
            />

            <img
              src="/assets/featured/decor2.svg"
              alt=""
              className="absolute w-40 z-0"
              style={{
                top: isDesktop ? "50%" : "20%",
                right: isDesktop ? "50%" : "25%",
              }}
            />

            <img
              src="/assets/featured/decor3.svg"
              alt=""
              className="absolute w-48 z-0"
              style={{
                bottom: isDesktop ? "60%" : "-1rem",
                right: isDesktop ? "-2rem" : "-2rem",
              }}
            />

            <div className="overflow-hidden">
              <div className="featured-ss-container grid grid-cols-3">
                <div className="featured-col featured-col-1">
                  {/* START */}
                  <img
                    src="/assets/featured/ss1.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss2.png"
                    alt=""
                    className="featured-ss"
                  />

                  {/* COPY */}
                  <img
                    src="/assets/featured/ss1.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss2.png"
                    alt=""
                    className="featured-ss"
                  />
                </div>

                <div className="featured-col featured-col-2">
                  {/* START */}
                  <img
                    src="/assets/featured/ss2.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss3.png"
                    alt=""
                    className="featured-ss"
                  />

                  {/* COPY */}
                  <img
                    src="/assets/featured/ss2.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss3.png"
                    alt=""
                    className="featured-ss"
                  />
                </div>

                <div className="featured-col featured-col-3">
                  {/* START */}
                  <img
                    src="/assets/featured/ss3.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss4.png"
                    alt=""
                    className="featured-ss"
                  />

                  {/* COPY */}
                  <img
                    src="/assets/featured/ss3.png"
                    alt=""
                    className="featured-ss"
                  />
                  <img
                    src="/assets/featured/ss4.png"
                    alt=""
                    className="featured-ss"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center relative px-8 pb-16 md:p-0 z-10">
              <small className="text-white mb-6">PWA</small>

              <h2
                className="font-bold text-5xl text-white"
                style={{ lineHeight: "3rem" }}
              >
                KKN Covid
                <br />
                Jogja
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default FeaturedProject;
