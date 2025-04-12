import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";
import "../Css/Blessings.css";

const blessingsData = [
  { message: "Wishing you a lifetime of love and laughter!", name: "Auntie Neeta" },
  { message: "Congratulations on finding your forever!", name: "Uncle Raj" },
  { message: "May your days be filled with sunshine and love.", name: "Priya & Mohan" },
  { message: "You two are perfect together ❤️", name: "Bestie Aanya" },
  { message: "Here's to endless joy and a beautiful journey ahead!", name: "Grandma & Grandpa" },
  { message: "From college mates to soulmates – congrats!", name: "Team Batch 2016" },
  { message: "Love always wins. Happy wedding!", name: "Aarti Chachi" },
  { message: "Cheers to new beginnings!", name: "Jay & Meena" },
  { message: "Blessings for a magical life ahead!", name: "Family Sharma" },
];

const getCardsPerView = () => {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};

const Blessings = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) =>
      prev === 0 ? blessingsData.length - cardsPerView : prev - cardsPerView
    );
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) =>
      prev + cardsPerView >= blessingsData.length ? 0 : prev + cardsPerView
    );
  };

  const visibleBlessings = blessingsData.slice(
    startIndex,
    startIndex + cardsPerView
  );

  return (
    <section className="blessings-section" id="blessings">
      <div className="blessings-overlay" />
      <h2 className="blessings-heading">💌 Heartfelt Blessings</h2>

      <div className="blessings-wrapper">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={startIndex}
            className="blessings-grid"
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {visibleBlessings.map((blessing, index) => (
              <motion.div
                className="blessing-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="blessing-message">"{blessing.message}"</p>
                <p className="blessing-name">— {blessing.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-controls">
        <button className="nav-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="nav-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Blessings;
