import React from "react";
import PropTypes from "prop-types";

function ProjectHeader(props) {
  return (
    <div className="mb-20 md:mb-32 px-6 pt-24">
      <div className="">
        <h2 className="text-heading-serif text-black text-3xl md:text-4xl relative z-10 pl-4 md:pl-16">
          Doolan: Wisata Praktif Harga Transparan
        </h2>
        <img
          src="/assets/placeholder.jpg"
          alt=""
          className="w-full img-obj rounded-lg shadow-lg -mt-6 relative z-0 project-page-img"
        />
      </div>

      <div className="md:grid md:grid-cols-3">
        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Stack:</p>
          <h4 className="font-bold text-black text-lg">Fullstack Javascript</h4>
        </div>

        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Stack:</p>
          <h4 className="font-bold text-black text-lg">Fullstack Javascript</h4>
        </div>

        <div className="mt-8 pl-4">
          <p className="text-xs text-defocused">Link:</p>
          <h4 className="font-bold text-black text-lg">https://doolan.com</h4>
        </div>
      </div>
    </div>
  );
}

ProjectHeader.propTypes = {};

export default ProjectHeader;
