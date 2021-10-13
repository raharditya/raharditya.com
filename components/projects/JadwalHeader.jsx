import React from "react";

export default function JadwalHeader(props) {
  return (
    <div ref={props.gsapRef} className="flex items-center justify-center">
      <img
        src="/assets/projects/jadwal/jadwal-header-1.png"
        alt=""
        className="jadwal-header-1 z-10"
        style={{ position: "relative", height: 400 }}
      />
      <img
        src="/assets/projects/jadwal/jadwal-header-2.png"
        alt=""
        className="jadwal-header-2 z-0 -ml-4 md:ml-0"
        style={{ position: "relative", height: 350, bottom: 20 }}
      />
    </div>
  );
}
