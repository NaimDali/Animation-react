import React from "react";
import { motion } from "framer-motion";

export default function Box1() {
  return (
    <div className="BoxContainer">
      <motion.div
        className="Box"
        animate={{
          x: 400,
          rotate: 360,
          opacity: 1,
        }}
        initial={{
          x: 0,
          opacity: 0.2,
        }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
      ></motion.div>
    </div>
  );
}
