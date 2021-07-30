import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function ProjectHeader(props) {
  const { data } = props;
  return (
    <div className="mb-20 md:mb-32 px-6 pt-24" id="top">
      <div className="">
        <h2 className="text-heading-serif text-black text-3xl md:text-4xl relative z-10 pl-4 md:pl-16">
          {data.title}
        </h2>
        <img
          src={data.thumbnail}
          alt=""
          className="w-full img-obj rounded-lg shadow-lg -mt-6 relative z-0 project-page-img"
        />
      </div>

      <div className="md:grid md:grid-cols-3">
        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Stack:</p>
          {data.stack.map((stackItem, index) => (
            <h4 className="font-bold text-black text-lg" key={index * 4}>
              {stackItem}
            </h4>
          ))}
        </div>

        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Role:</p>
          <h4 className="font-bold text-black text-lg">{data.role}</h4>
        </div>

        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Links:</p>
          {data.links.map((link) => (
            <>
              <a
                className="block"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-black text-lg underline">
                  {link.url}
                </h4>
              </a>
              {link.github ? (
                <a
                  className="block"
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold text-black text-lg underline">
                    Github
                  </h4>
                </a>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectHeader.propTypes = {};

export default ProjectHeader;
