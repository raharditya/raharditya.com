import React from "react";

export default function GleglegHeader(props) {
  return (
    <div className="flex items-center justify-center" ref={props.gsapRef}>
      <img
        src="/assets/projects/glegleg/0.png"
        alt=""
        className="z-10 glegleg-main-img"
        style={{ height: 430 }}
      />
      <img
        src="/assets/projects/glegleg/1.png"
        alt=""
        className="absolute z-0 glegleg-left-img"
        style={{ height: 360 }}
      />
      <img
        src="/assets/projects/glegleg/2.png"
        alt=""
        className="absolute z-0 glegleg-right-img"
        style={{ height: 360 }}
      />
    </div>
  );
}
