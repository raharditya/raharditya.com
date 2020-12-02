import React from "react";
import PropTypes from "prop-types";

function StackItem(props) {
  return (
    <div className="rounded-xl text-center py-8 px-4 w-32 bg-orange-300 stack-item">
      <img src={props.img} alt="" className="mb-4 text-center inline-block" />
      <p>{props.stack}</p>
    </div>
  );
}

StackItem.propTypes = {
  img: PropTypes.string,
  stack: PropTypes.string,
};

export default StackItem;
