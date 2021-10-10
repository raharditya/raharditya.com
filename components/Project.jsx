import React from "react";
import ProjectStack from "./ProjectStack";

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

  // console.log(titleWithBreak);

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
        {/* {titleWithBreak} */}

        {/* {props.header} */}

        {/* <ProjectStack
          link={props.link}
          github={props.github}
          stacks={props.stacks}
          year={props.year}
          containerColor={props.containerColor}
          bgColor={props.bgColor}
          textColor={props.textColor}
        /> */}

        {props.children}
      </div>
    </div>
  );
}
