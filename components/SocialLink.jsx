import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function SocialLink(props) {
  return (
    <Link href={props.socialUrl}>
      <a noreferrer noopener target="_blank">
        <div className="social-link h-10 w-10 p-1 rounded-lg flex items-center justify-center">
          <img src={props.img} alt="" className="w-3/4" />
        </div>
      </a>
    </Link>
  );
}

SocialLink.propTypes = {
  img: PropTypes.string,
};

export default SocialLink;
