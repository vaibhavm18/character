import React, { useState, useEffect } from 'react';

interface Props {
  text: string;
  typingSpeed?: number
}

const TypingEffect = ({ text, typingSpeed = 50 }: Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, typingSpeed]);

  return <span className="max-w-[70%] mx-9 p-2 rounded-xl bg-[#26272B] justify-start">{displayedText}</span>;
};

export default TypingEffect;