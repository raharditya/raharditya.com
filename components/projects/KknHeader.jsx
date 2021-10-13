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
    </div>
  );
}
