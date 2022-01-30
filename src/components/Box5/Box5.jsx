import React from "react";
import { motion } from "framer-motion";

export default function Box5() {
  return (
    <div className="BoxContainer">
      <motion.div
        className="Box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        initial={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}
