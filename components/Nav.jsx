import React from "react";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <nav className="padding-both">
      <h3>RHDT</h3>

      <div className="menu">
        {/* <small>Menu</small>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
        </div> */}
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
