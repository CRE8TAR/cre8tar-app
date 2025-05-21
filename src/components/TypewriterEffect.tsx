
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
  startOnScroll?: boolean;
  threshold?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  delay = 50, 
  className,
  startOnScroll = false,
  threshold = 0.3
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [shouldStart, setShouldStart] = useState(!startOnScroll);
  const elementRef = useRef<HTMLDivElement>(null);

  // Setup Intersection Observer for scroll-triggered typing
  useEffect(() => {
    if (startOnScroll && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldStart(true);
            observer.disconnect();
          }
        },
        { threshold }
      );
      
      observer.observe(elementRef.current);
      return () => observer.disconnect();
    }
  }, [startOnScroll, threshold]);

  // Type character by character
  useEffect(() => {
    // Only start typing when shouldStart is true
    if (!shouldStart || index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setDisplayText((current) => current + text.charAt(index));
      setIndex((current) => current + 1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index, text, delay, shouldStart]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((current) => !current);
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </div>
  );
};

export default TypewriterEffect;
