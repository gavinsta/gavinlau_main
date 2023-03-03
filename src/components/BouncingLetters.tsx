import React, { useState, useRef, useEffect } from 'react';

interface Props {
  text: string;
}

const BouncingLetters: React.FC<Props> = ({ text }) => {
  const [letters, setLetters] = useState<string[]>([]);
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    setLetters(text.split(''));
  }, [text]);

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      const y = 20 * Math.sin(2 * Math.PI * (index / letters.length));
      letter.style.transform = `translateY(${y}px)`;
    });
  }, [letters]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {letters.map((letter, index) => (
        <span
          ref={(el) => (letterRefs.current[index] = el!)}
          key={letter + index}
          style={{ display: 'inline-block', margin: '0 10px' }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default BouncingLetters;