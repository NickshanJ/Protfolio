import React, { useState, useEffect } from 'react';

function DynamicText({ texts, typingSpeed = 100, pauseDuration = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting) {
      if (displayText.length < texts[currentTextIndex].length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, texts, typingSpeed, pauseDuration, currentTextIndex]);

  return <span>{displayText}</span>;
}

export default DynamicText;
