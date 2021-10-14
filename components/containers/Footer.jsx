import React from "react";
import PropTypes from "prop-types";
import SocialLink from "../SocialLink";
import LastUpdate from "../LastUpdate";

function Footer(props) {
  return (
    <footer className="py-8 text-center" style={{ backgroundColor: "#CDB2EF" }}>
      <h4 className="font-bold text-sm text-black" style={{ color: "#463160" }}>
        raharditya.com - 2021
      </h4>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
