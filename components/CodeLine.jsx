import React from "react";
import PropTypes from "prop-types";

function CodeLine({ indent = 0, line, children }) {
  const space = <>&nbsp;</>;
  const outputIndent = (amount) => {
    let idt = [];

    for (let i = 0; i < amount; i++) {
      idt.push(<span key={i}>&nbsp;</span>);
    }

    return idt;
  };

  return (
    <div className="w-full flex items-center">
      <div className="w-8 text-center text-sm">{line}</div>
      <code className="pl-4">
        {outputIndent(indent)}
        {children}
      </code>
    </div>
  );
}

CodeLine.propTypes = {
  indent: PropTypes.number,
  line: PropTypes.number,
};

export default CodeLine;
