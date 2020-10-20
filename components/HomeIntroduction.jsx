import React from "react";
import PropTypes from "prop-types";

function HomeIntroduction(props) {
  return (
    <section>
      <p className="subtitle">i'm a</p>
      <h1 className="title">Front-end developer</h1>
      <h1 className="title">Back-end developer</h1>
      <h1 className="title">Web designer</h1>
      <p>
        based in <span className="focus -text">Yogyakarta, Indonesia</span>
      </p>
    </section>
  );
}

HomeIntroduction.propTypes = {};

export default HomeIntroduction;
