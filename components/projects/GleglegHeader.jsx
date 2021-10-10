import React from "react";

export default function GleglegHeader() {
  return (
    <div className="flex items-center justify-center">
      <img
        src="/assets/projects/glegleg/0.png"
        alt=""
        className="z-10"
        style={{ height: 430 }}
      />
      <img
        src="/assets/projects/glegleg/1.png"
        alt=""
        className="absolute z-0"
        style={{ height: 360, transform: "translateX(0)", left: "1rem" }}
      />
      <img
        src="/assets/projects/glegleg/2.png"
        alt=""
        className="absolute z-0"
        style={{ height: 360, transform: "translateX(0)", right: "1rem" }}
      />
    </div>
  );
}
