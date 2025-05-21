
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 50, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // If we've typed the complete text, stop
    if (index >= text.length) return;

    // Type character by character
    const timeoutId = setTimeout(() => {
      setDisplayText((current) => current + text.charAt(index));
      setIndex((current) => current + 1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, text, delay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((current) => !current);
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </div>
  );
};

export default TypewriterEffect;
