"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "@iconify/react";
import { EventsData } from "@src/data/data";
import { motion, AnimatePresence } from "framer-motion";

// Variants for slider animations
const sliderVariants = {
  initial: { opacity: 0, scale: 0, y: "72%" },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Variants for thumbnail animation
const thumbnailVariants = {
  hidden: { opacity: 1, scale: 1 },
  grow: {
    scaleY: 1,
    opacity: 1,
    y: "-10%",
    transition: { type: "linear", stiffness: 300 },
  },
  return: {
    scale: 1,
    opacity: 1,
    transition: { type: "linear", stiffness: 300 },
  },
};

const detailsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.6 },
  },
};

const EventsCarouselItem = ({ img, aurther, title, topic, description }) => {
  return (
    <motion.div
      className="w-full h-full relative item"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full h-full absolute bg-black/70"></div>
      <img src={img} alt="event" className="w-full h-full object-cover" />
      <motion.div
        className="absolute px-[10%] box-border text-white top-[20%]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={detailsVariants}
      >
        <div className="font-bold tracking-[10px]">{aurther}</div>
        <div className="text-[5em] font-bold leading-[1.3em] [text-shadow:_0_5px_10px_#000000B3]">
          {title}
        </div>
        <div className="text-[4em] font-bold leading-[1.3em] text-primary_light [text-shadow:_0_5px_10px_#000000B3]">
          {topic}
        </div>
        <div className="w-[45%]">{description}</div>
        <div className="flex gap-5 mt-5">
          <Button className="uppercase">
            SEE MORE <FiArrowUpRight className="inline text-xl ml-1" />
          </Button>
          <Button className="uppercase">
            Register <FiArrowUpRight className="inline text-xl ml-1" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EventThumbnailItem = ({ img, title, topic, isActive, onClick }) => {
  return (
    <motion.div
      className="w-[150px] h-[220px] shrink-0 relative rounded-[20px] overflow-hidden cursor-pointer"
      onClick={onClick}
      variants={thumbnailVariants}
      initial="hidden"
      animate={isActive ? "grow" : "return"}
    >
      <div className="w-full h-full absolute bg-gradient-to-t from-black/80 to-transparent"></div>
      <img src={img} className="w-full h-full object-cover" alt={title} />
      <div className="text-white absolute bottom-2.5 inset-x-2.5">
        <div className="font-medium">{title}</div>
        <div className="text-primary_light font-semibold">{topic}</div>
      </div>
    </motion.div>
  );
};

const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % EventsData.slice(0, 5).length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + EventsData.slice(0, 5).length) %
        EventsData.slice(0, 5).length
    );
  };

  // Auto-pagination every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <EventsCarouselItem
            key={currentIndex}
            {...EventsData[currentIndex]}
          />
        </AnimatePresence>
      </div>

      <div className="absolute w-max z-[100] flex gap-5 left-2/4 bottom-[50px]">
        {EventsData.slice(0, 5).map((item, idx) => (
          <EventThumbnailItem
            key={idx}
            {...item}
            isActive={currentIndex === idx}
            onClick={() => setCurrentIndex(idx)} // Set clicked thumbnail as active slide
          />
        ))}
      </div>

      <div className="absolute z-[100] w-[300px] max-w-[30%] flex gap-2.5 items-center right-[52%] top-[80%]">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-10 h-10 bg-[#eee4] text-white font-bold transition-[0.5s] rounded-[50%] border-[none] hover:bg-white hover:text-black"
        >
          <Icon icon="ooui:arrow-next-rtl" width={20} />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 bg-[#eee4] text-white font-bold transition-[0.5s] rounded-[50%] border-[none] hover:bg-white hover:text-black"
        >
          <Icon icon="ooui:arrow-next-ltr" width={20} />
        </button>
      </div>
    </div>
  );
};

export default EventSlider;
