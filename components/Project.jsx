import React from "react";

export default function Project(props) {
  const titleSplit = props.title.split("/n");
  let titleWithBreak;

  if (titleSplit.length > 1) {
    titleWithBreak = (
      <h2
        className="milliard-bold text-3xl leading-none mb-4"
        style={{ color: props.titleColor }}
      >
        {titleSplit[0]}
        <br />
        {titleSplit[1]}
      </h2>
    );
  } else {
    titleWithBreak = (
      <h2
        className="milliard-bold text-3xl leading-none mb-4"
        style={{ color: props.titleColor }}
      >
        {titleSplit[0]}
      </h2>
    );
  }

  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="md:container md:mx-auto px-6 py-10 relative overflow-hidden">
        <h2
          className="absolute milliard-bold project-index"
          style={{
            color: props.indexColor,
          }}
        >
          {props.index}
        </h2>

        {props.children}
      </div>
    </div>
  );
}
