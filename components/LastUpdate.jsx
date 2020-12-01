import React from "react";
import PropTypes from "prop-types";

function LastUpdate(props) {
  return (
    <div className="rounded-lg last-update py-2 px-5 text-center">
      <small className="text-xs">Last updated:</small>
      <h6 className="text-sm font-semibold">{props.update}</h6>
    </div>
  );
}

LastUpdate.propTypes = {
  update: PropTypes.string,
};

export default LastUpdate;
