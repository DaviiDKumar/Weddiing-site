import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import "../Css/HeartLoader.css";

const HeartLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setDone(true);
                    setTimeout(onComplete, 1200);
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // ~5 seconds

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="heart-loader-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* Blurred hearts */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className={`blurred-heart heart-${i + 1}`} />
                    ))}

                    <div className="floating-heart-container">

                        <div className="heart-shape" />


                        <div className="progress-bar-container">
                            <motion.div
                                className="progress-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                            />
                        </div>
                        <motion.div
                            className="love-text"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Loading
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeartLoader;
