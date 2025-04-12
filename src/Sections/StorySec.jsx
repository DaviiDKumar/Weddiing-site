import React, { useState } from "react";
import "../Css/StorySec.css";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRing } from "react-icons/fa";

const StorySec = () => {
  const [activeTab, setActiveTab] = useState("firstdate");

  const tabContent = {
    firstdate: {
      image: "/Images/FDAte.jpg", // make sure you have this image
      icon: <FaHeart className="story-icon" />,
      title: "Our First Date",
      date: "August 22, 2021",
      location: "Cafe Mocha, Pune",
      brideText: "I still remember walking in and spotting him at the corner table — nervous smile, eyes full of curiosity. We laughed, we talked, and something just clicked.",
      groomText: "She was radiant — sipping coffee, making shy jokes, and turning an ordinary Sunday into a day I’ll never forget.",
      quote: "That coffee turned into hours, and those hours turned into forever.",
    },
    engagement: {
      image: "/Images/Engg.jpg",
      icon: <FaRing className="story-icon" />,
      title: "The Day We Said Yes!",
      date: "February 10, 2024",
      location: "The Fern, Udaipur",
      text: "On a day wrapped in golden light and heartfelt promises, we exchanged rings and began a new chapter of our love story.",
      quote: "It all started with a yes — and a sparkle in our eyes.",
    },
  };

  const current = tabContent[activeTab];

  return (
    <section className="story-section" id="our-story">
      <div className="story-tabs-wrapper">
        <div className="story-toggle">
          <button
            className={activeTab === "firstdate" ? "active" : ""}
            onClick={() => setActiveTab("firstdate")}
          >
            First Date
          </button>
          <button
            className={activeTab === "engagement" ? "active" : ""}
            onClick={() => setActiveTab("engagement")}
          >
            Engagement
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="story-content"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <img src={current.image} alt={activeTab} className="story-image" />

            <div className="story-text-content">
              <h2 className="story-title">
                {current.icon} {current.title}
              </h2>
              <p className="story-meta">
                📅 {current.date} &nbsp;&nbsp; 📍 {current.location}
              </p>

              {activeTab === "firstdate" ? (
                <div className="story-description">
                  <p><strong>Her:</strong> {current.brideText}</p>
                  <p><strong>Him:</strong> {current.groomText}</p>
                </div>
              ) : (
                <p className="story-description">{current.text}</p>
              )}

              <p className="story-quote">💬 {current.quote}</p>
            </div>
          </motion.div>

        </AnimatePresence>
      </div>
    </section>
  );
};

export default StorySec;
