import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function KknHeader(props) {
  // gsap.registerPlugin(ScrollTrigger);
  // const kknHeader = useRef();

  // const testTl = useRef(
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: kknHeader.current,
  //       start: "top center",
  //       toggleActions: "play none none reverse",
  //       markers: true,
  //     },
  //   })
  // );

  // useEffect(() => {
  //   gsap.fromTo(
  //     kknHeader.current.querySelector(".featured-col-1"),
  //     { y: 0 },
  //     {
  //       y: 200,
  //       scrollTrigger: {
  //         trigger: kknHeader.current,
  //         start: "top top",
  //         end: "bottom center",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     kknHeader.current.querySelector(".featured-col-2"),
  //     { y: 0 },
  //     {
  //       y: -400,
  //       scrollTrigger: {
  //         trigger: kknHeader.current,
  //         start: "top top",
  //         end: "bottom center",
  //         scrub: true,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     kknHeader.current.querySelector(".featured-col-3"),
  //     { y: 0 },
  //     {
  //       y: 400,
  //       scrollTrigger: {
  //         trigger: kknHeader.current,
  //         start: "top top",
  //         end: "bottom center",
  //         scrub: true,
  //         markers: true,
  //         pin: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div
      className="kkn-header featured-project relative rounded-xl transition duration-150 ease-in-out"
      ref={props.gsapRef}
    >
      <div className="overflow-hidden test-class">
        <div className="featured-ss-container grid grid-cols-3">
          <div className="featured-col featured-col-1 px-1 md:px-3">
            {/* START */}
            <img
              src="/assets/projects/kkn/0.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/4.png"
              alt=""
              className="featured-ss mb-2"
            />

            {/* COPY */}
            <img
              src="/assets/projects/kkn/0.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/4.png"
              alt=""
              className="featured-ss mb-2"
            />
          </div>

          <div className="featured-col featured-col-2 px-1 md:px-3">
            {/* START */}
            <img
              src="/assets/projects/kkn/1.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/2.png"
              alt=""
              className="featured-ss mb-2"
            />

            {/* COPY */}
            <img
              src="/assets/projects/kkn/1.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/2.png"
              alt=""
              className="featured-ss mb-2"
            />
          </div>

          <div className="featured-col featured-col-3 px-1 md:px-3">
            {/* START */}
            <img
              src="/assets/projects/kkn/3.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/4.png"
              alt=""
              className="featured-ss mb-2"
            />

            {/* COPY */}
            <img
              src="/assets/projects/kkn/3.png"
              alt=""
              className="featured-ss mb-2"
            />
            <img
              src="/assets/projects/kkn/4.png"
              alt=""
              className="featured-ss mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
