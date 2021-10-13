import React from "react";

export default function SemnasHeader(props) {
  return (
    <div ref={props.gsapRef} className="flex items-center justify-center">
      <img
        src="/assets/projects/seminar/seminar-header-1.png"
        alt=""
        className="seminar-header-1 z-10"
        style={{
          position: "relative",
          height: 350,
          transform: "rotate(35deg)",
        }}
      />
      <img
        src="/assets/projects/seminar/seminar-header-2.png"
        alt=""
        className="seminar-header-2 z-0 md:ml-0"
        style={{
          position: "relative",
          height: 350,
          transform: "rotate(35deg)",
          top: "4rem",
        }}
      />
      <img
        src="/assets/projects/seminar/seminar-header-3.png"
        alt=""
        className="seminar-header-2 z-0 md:ml-0"
        style={{
          position: "relative",
          height: 350,
          transform: "rotate(35deg)",
          top: "8rem",
        }}
      />
    </div>
  );
}
