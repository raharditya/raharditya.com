import Link from "next/link";
import React from "react";

function ProjectItem(props) {
  return (
    <Link href={`/projects/${props.path}`}>
      <a className="">
        <div className="md:flex mb-12 relative z-10 rounded-xl project-item hover:shadow-lg">
          <img
            src={props.img}
            alt=""
            className="rounded-xl w-full h-48 md:mr-6 md:w-64"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          <div className="flex justify-between items-center md:w-full">
            <div className="prj-title flex-grow mt-3 md:mt-0 md:self-start">
              <small className="text-light text-defocused">
                {props.category}
              </small>
              <div className="text-heading-sans text-2xl md:text-3xl prj-title">
                {props.children}
              </div>
            </div>

            <div className="prj-cta px-4 border-l h-full flex items-center">
              <img
                src="/assets/next.svg"
                alt=""
                className="w-6 project-enter-img"
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectItem;
