import React from "react";
import { motion } from "framer-motion";

export default function Box4() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  return (
    <div className="BoxContainer">
      <motion.div
        className="Box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li className="list" variants={listVariant}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
