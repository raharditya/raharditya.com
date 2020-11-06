import React from "react";
import PropTypes from "prop-types";

function StackItem(props) {
  return (
    <div className="rounded-lg bg-orange-200 center-align p-4">
      <img src={props.img} alt="" />
      <p>{props.stack}</p>
    </div>
  );
}

StackItem.propTypes = {
  img: PropTypes.string,
  stack: PropTypes.string,
};

export default StackItem;
