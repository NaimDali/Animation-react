import React from "react";
import { motion } from "framer-motion";

export default function Box3() {
  return (
    <div className="BoxContainer">
      <motion.div
        className="Box"
        drag
        dragConstraints={{
          right: 20,
          left: 20,
          top: 5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
    </div>
  );
}
