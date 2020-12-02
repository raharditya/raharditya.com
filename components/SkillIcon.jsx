import React from "react";
import PropTypes from "prop-types";

function SkillIcon(props) {
  return (
    <div className="flex">
      <div
        className={`rounded-full flex align-center items-center mr-4 skill-icon ${props.class}`}
      >
        <img src={props.skill1} alt="" />
      </div>
      <div
        className={`rounded-full flex align-center items-center mr-4 skill-icon ${props.class}`}
      >
        <img src={props.skill2} alt="" />
      </div>
    </div>
  );
}

SkillIcon.propTypes = {
  skill1: PropTypes.string,
  skill2: PropTypes.string,
  class: PropTypes.string,
};

export default SkillIcon;
