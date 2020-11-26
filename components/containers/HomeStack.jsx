import React from "react";
import PropTypes from "prop-types";
import StackItem from "../StackItem";

function HomeStack(props) {
  return (
    <div className="container mx-auto md:px-8">
      <h2 className="font-bold text-3xl mt-8 mb-6">Techstack</h2>

      <p className="text-center mb-4">Front-end</p>

      <div className="flex gap-16 justify-center">
        <StackItem img="/assets/techstack/fe-js.svg" stack="Javascript" />
        <StackItem img="/assets/techstack/fe-react.svg" stack="React JS" />
        <StackItem img="/assets/techstack/fe-sass.svg" stack="Sass" />
        <StackItem
          img="/assets/techstack/fe-tailwind.svg"
          stack="Tailwind CSS"
        />
      </div>

      <p className="text-center mt-8 mb-4">Back-end</p>
      <div className="flex gap-16 justify-center">
        <StackItem img="/assets/techstack/be-node.svg" stack="NodeJS" />
        <StackItem img="/assets/techstack/be-mongo.svg" stack="MongoDB" />
        <StackItem img="/assets/techstack/be-express.svg" stack="Express" />
      </div>
    </div>
  );
}

HomeStack.propTypes = {};

export default HomeStack;
