"use client";
import React from "react";
import { easeInOut, motion, useAnimate } from "framer-motion";

const LoadingScreen = ({ setLoading }) => {
  const [scope, animate] = useAnimate();

  const hanndleAnimate = async () => {
    await animate("#parent", { scale: 25 }, { duration: 1.2 });
    await animate("#parent", { y: "-200vh" }, { duration: 1 });
    await setLoading(false);
  };

  return (
    <>
      <div
        className="relative w-full h-screen flex-center-center bg-hero_bg overflow-hidden"
        ref={scope}
      >
        <motion.div
          className="cup"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 2, ease: easeInOut }}
        >
          <span className="steam"></span>
          <span className="steam"></span>
          <span className="steam"></span>
          <div className="cup-handle"></div>
        </motion.div>
        <motion.div
          id="parent"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary rounded-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1, ease: easeInOut }}
          onAnimationComplete={() => hanndleAnimate()}
        ></motion.div>
      </div>
    </>
  );
};

export default LoadingScreen;
