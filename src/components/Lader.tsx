"use client";

import { useEffect, useState } from "react";
import NumberTicker from "./ui/number-ticker";
import FlipText from "./ui/flip-text";

const Lader = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(true);
  const [loadingText2, setLoadingText2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingText(false);
      return setLoadingText2(true);
    }, 3000);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  if (loading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black z-50">
        <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
          {loadingText && <NumberTicker value={100} className="text-3xl" />}
          {loadingText2 && (
            <FlipText
              className="text-8xl font-bold -tracking-widest text-purple-600 dark:text-white md:text-7xl md:leading-[5rem]"
              word="SJ."
            />
          )}
        </p>
      </div>
    );
  }

  return <></>;
};

export default Lader;
