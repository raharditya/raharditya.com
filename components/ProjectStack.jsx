import React from "react";

function ProjectStack(props) {
  return (
    <div
      className="p-3 md:p-4 rounded-2xl mt-6 md:flex md:justify-between project-text"
      style={{ backgroundColor: props.containerColor }}
    >
      <div className="flex mb-3 md:mb-0 md:mr-4 md:w-4/6">
        <div
          className="p-2 rounded-xl mr-3 md:mr-4 flex-1"
          style={{ backgroundColor: props.bgColor }}
        >
          <h3
            className="milliard-bold text-base md:mb-2"
            style={{ color: props.textColor }}
          >
            Links:
          </h3>

          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: props.textColor,
              backgroundColor: props.containerColor,
            }}
            className="block py-1 px-2 rounded-md  mb-2"
          >
            Project
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: props.textColor,
              backgroundColor: props.containerColor,
            }}
            className="block py-1 px-2 rounded-md "
          >
            Github
          </a>
        </div>

        <div
          className="p-2 rounded-xl flex-1"
          style={{ backgroundColor: props.bgColor }}
        >
          <h3
            className="milliard-bold text-base md:mb-2"
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
        className="p-2 rounded-xl text-center md:text-left md:w-2/6"
        style={{ backgroundColor: props.bgColor }}
      >
        <h3
          className="milliard-bold text-base md:mb-2"
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
