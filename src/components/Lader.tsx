"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberTicker from "./ui/number-ticker";
import FlipText from "./ui/flip-text";

const Lader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(true);
  const [loadingText2, setLoadingText2] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      localStorage.setItem("hasLoadedBefore", "true");

      const textTimer = setTimeout(() => {
        setLoadingText(false);
        setLoadingText2(true);
      }, 3000);

      const loadingTimer = setTimeout(() => {
        setLoading(false);
      }, 5000);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(loadingTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {loadingText && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NumberTicker value={100} className="text-3xl" />
              </motion.div>
            )}
            {loadingText2 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FlipText
                  className="text-8xl font-bold -tracking-widest text-purple-600 dark:text-white md:text-7xl md:leading-[5rem]"
                  word="SJ."
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="main-content"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lader;
