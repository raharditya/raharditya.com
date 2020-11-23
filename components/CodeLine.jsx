import React from "react";
import PropTypes from "prop-types";

function CodeLine(props) {
  return (
    <div className="w-full  flex items-center">
      <div className="w-8 text-center text-sm">{props.line}</div>
      <code className="pl-4">
        {props.indent * "&nbsp;"}
        {props.children}
      </code>
    </div>
  );
}

CodeLine.propTypes = {
  indent: PropTypes.number,
  line: PropTypes.number,
};

export default CodeLine;
