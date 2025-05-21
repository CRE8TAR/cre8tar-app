
import React from 'react';
import TypewriterEffect from './TypewriterEffect';

interface ScrollTypingEffectProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  className?: string;
  delay?: number;
  threshold?: number;
}

const ScrollTypingEffect: React.FC<ScrollTypingEffectProps> = ({
  text,
  tag = 'div',
  className = '',
  delay = 40,
  threshold = 0.3
}) => {
  // Map of HTML tags
  const TagComponent = tag;
  
  return (
    <TagComponent className={className}>
      <TypewriterEffect 
        text={text}
        delay={delay}
        startOnScroll={true}
        threshold={threshold}
      />
    </TagComponent>
  );
};

export default ScrollTypingEffect;
