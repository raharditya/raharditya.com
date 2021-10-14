import React from "react";

export default function SemnasHeader(props) {
  return (
    <div
      ref={props.gsapRef}
      className="flex items-center justify-center overflow-hidden"
      style={{ height: props.isDesktop ? 450 : 500 }}
    >
      <div className="flex items-center justify-center md:w-4/5">
        <img
          src="/assets/projects/seminar/seminar-header-3.png"
          alt=""
          className="seminar-header-1 z-20 mr-2 w-1/2"
          style={{
            position: "relative",
            // height: props.isDesktop ? 300 : 350,
          }}
        />
        <div className="seminar-row-2 w-1/2">
          <img
            src="/assets/projects/seminar/seminar-header-2.png"
            alt=""
            className="seminar-header-2 z-10 mb-2"
            style={{
              position: "relative",
              // height: props.isDesktop ? 300 : 350,
            }}
          />
          <img
            src="/assets/projects/seminar/seminar-header-1.png"
            alt=""
            className="seminar-header-3 z-0 "
            style={{
              position: "relative",
              // height: props.isDesktop ? 300 : 350,
            }}
          />
        </div>
      </div>
    </div>
  );
}
