import React from "react";
import PropTypes from "prop-types";

function SkillItem(props) {
  return (
    <div
      className={`${props.color} w-full min-h-16 flex gap-4 rounded-xl mb-8`}
    >
      {props.children}
    </div>
  );
}

SkillItem.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default SkillItem;
