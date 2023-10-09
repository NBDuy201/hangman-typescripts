import React from "react";
import { useHangman } from "~/context/HangmanContext";

const HangmanWords = () => {
  const { guestedWords, winWords } = useHangman();

  return (
    <div className="uppercase flex gap-x-4 font-bold text-4xl mb-8">
      {winWords.split("").map((letter, index) => (
        <span
          key={index}
          className="letter-container border-b-2 border-primary"
        >
          <span
            className={`letter ${
              guestedWords?.includes(letter) ? "visible" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
