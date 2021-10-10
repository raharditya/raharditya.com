import React from "react";

function ProjectStack(props) {
  return (
    <div
      className="p-4 rounded-2xl mt-6"
      style={{ backgroundColor: props.containerColor }}
    >
      <div className="flex mb-4">
        <div
          className="p-2 rounded-xl mr-4 flex-1"
          style={{ backgroundColor: props.bgColor }}
        >
          <h3
            className="milliard-bold text-lg mb-2"
            style={{ color: props.textColor }}
          >
            Links:
          </h3>

          <a
            href={props.link}
            style={{ color: props.textColor }}
            className="block"
          >
            Project
          </a>
          <a
            href={props.github}
            style={{ color: props.textColor }}
            className="block"
          >
            Github
          </a>
        </div>

        <div
          className="p-2 rounded-xl flex-1"
          style={{ backgroundColor: props.bgColor }}
        >
          <h3
            className="milliard-bold text-lg mb-2"
            style={{ color: props.textColor }}
          >
            Stacks:
          </h3>
          <ul>
            {props.stacks.map((stack, idx) => (
              <li
                key={idx * 100}
                className="list-disc list-inside"
                style={{ color: props.textColor }}
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="p-2 rounded-xl text-center"
        style={{ backgroundColor: props.bgColor }}
      >
        <h3
          className="milliard-bold text-lg mb-2"
          style={{ color: props.textColor }}
        >
          Year:
        </h3>
        <p style={{ color: props.textColor }}>{props.year}</p>
      </div>
    </div>
  );
}

export default ProjectStack;
