import React from "react";

const HangmanWords = () => {
  const words = "words";
  const guestedWords = ["w", "o", "t", "s"];

  return (
    <div className="uppercase flex gap-x-4 font-bold text-4xl">
      {words.split("").map((letter, index) => (
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
