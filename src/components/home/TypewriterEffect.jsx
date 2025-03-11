import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed = 80, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <div className={className}>{displayedText}</div>;
};

export default TypewriterEffect;
