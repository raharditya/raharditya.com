import React from "react";
import PropTypes from "prop-types";

function SkillItem(props) {
  return (
    <div className="w-full min-h-16 bg-blue-200 flex ">
      <div className="flex-1 pl-4 py-4 ">
        <div className="flex">
          <div className="rounded-full p-2">
            <img src="" alt="" />
          </div>
          <div className="rounded-full p-2">
            <img src="" alt="" />
          </div>
        </div>

        <h3 className="text-xl font-bold">Web Development</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, fuga.
          Consectetur, et sunt? Tenetur, culpa tempora optio in qui voluptate
          reiciendis minima incidunt quia, molestiae nisi, beatae eaque libero
          nostrum.
        </p>
      </div>

      <div className="flex-1">
        <img src="" alt="" />
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default SkillItem;
