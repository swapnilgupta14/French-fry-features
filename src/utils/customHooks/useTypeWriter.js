import { useState, useEffect } from "react";

export const useTypewriter = (words, delay = 150) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(delay);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[loopNum % words.length];
      setDisplayText(
        isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1)
      );
      setTypingSpeed(isDeleting ? delay / 2 : delay);

      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, words, delay]);

  return displayText;
};
