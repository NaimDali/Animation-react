import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box2() {
  const [ismoving, setismoving] = useState(false);
  return (
    <div className="BoxContainer">
      <motion.div
        className="Box"
        onClick={() => {
          setismoving(!ismoving);
        }}
        animate={{
          x: ismoving ? 400 : 0,
          rotate: ismoving ? 360 : 0,
          opacity: ismoving ? 1 : 0.2,
        }}
        initial={{
          x: 0,
          opacity: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      ></motion.div>
    </div>
  );
}
