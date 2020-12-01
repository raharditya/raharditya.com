import React from "react";
import PropTypes from "prop-types";
import SocialLink from "../SocialLink";
import LastUpdate from "../LastUpdate";

function Footer(props) {
  return (
    <footer className="h-20">
      <div className="container px-8  py-4 m-auto flex justify-between items-center">
        <div className="flex gap-5">
          <SocialLink
            img="/assets/social/sos-ig.svg"
            socialUrl="https://instagram.com/a.raharditya"
          />
          <SocialLink
            img="/assets/social/sos-github.svg"
            socialUrl="https://github.com/asebodi"
          />
          <SocialLink
            img="/assets/social/sos-linkedin.svg"
            socialUrl="https://instagram.com"
          />
        </div>

        <div>
          <h3 className="font-extrabold text-2xl text-red-500">RHDT</h3>
        </div>

        <LastUpdate update="November 2020" />
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
