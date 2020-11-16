import React from "react";
import PropTypes from "prop-types";

function SkillIcon(props) {
  return (
    <div className="flex">
      <div className="rounded-full p-2 bg-pink-400 flex align-center mr-4">
        <img src={props.skill1} alt="" className="w-8" />
      </div>
      <div className="rounded-full p-2 bg-pink-400 flex align-center mr-4">
        <img src={props.skill2} alt="" className="w-8" />
      </div>
    </div>
  );
}

SkillIcon.propTypes = {
  skill1: PropTypes.string,
  skill2: PropTypes.string,
};

export default SkillIcon;
