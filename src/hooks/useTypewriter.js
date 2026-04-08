import { useState, useEffect } from "react";

export function useTypewriter(words, speed = 80, pause = 2200) {
  const [display, setDisplay]   = useState("");
  const [idx, setIdx]           = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, display.length + 1));
        if (display.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(word.slice(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, deleting ? 40 : speed);

    return () => clearTimeout(timeout);
  }, [display, deleting, idx, words, speed, pause]);

  return display;
}
