import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ProjectItem(props) {
  return (
    <motion.div
      className="project-item"
      initial={{ opacity: props.idx == props.pos ? 0 : 1 }}
      animate={{ opacity: props.idx == props.pos ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="item-thumbnail">
        <motion.img
          src={props.data.thumbnail}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
      </div>

      <motion.h2
        className="item-title"
        initial={{
          opacity: props.idx == props.pos ? 0 : 1,
          y: props.idx == props.pos ? 30 : 0,
        }}
        animate={{
          opacity: props.idx == props.pos ? 1 : 0,
          y: props.idx == props.pos ? 0 : 30,
        }}
        transition={{ duration: 0.5 }}
      >
        {props.data.title}
      </motion.h2>

      <motion.div
        className="item-tags"
        initial={{ opacity: props.idx == props.pos ? 0 : 1 }}
        animate={{ opacity: props.idx == props.pos ? 1 : 0 }}
        transition={{
          duration: 0.5,
          delay: props.idx == props.pos ? 0.4 : 0,
        }}
      >
        {props.data.tags.map((tag, idx) => (
          <small key={idx} className="tag-item">
            {tag}
          </small>
        ))}
      </motion.div>

      <div className="item-description">
        {props.data.description.map((desc, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: props.idx == props.pos ? 0 : 1 }}
            animate={{ opacity: props.idx == props.pos ? 1 : 0 }}
            transition={{
              duration: 0.5,
              delay: props.idx == props.pos ? 0.9 + 0.2 * idx : 0,
            }}
          >
            {desc}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
