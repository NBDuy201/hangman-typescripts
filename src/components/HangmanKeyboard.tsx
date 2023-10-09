import React from "react";
import { GAME_RESULTS } from "~/common/constants";
import { useHangman } from "~/context/HangmanContext";

function generateAlphabet() {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}

const KEYS = generateAlphabet();

const HangmanKeyboard = () => {
  const { setGuestedWords, guestedWords, gameResults } = useHangman();

  return (
    <div className="flex flex-wrap justify-center gap-4 text-xl">
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,_1fr))] text-center gap-4 text-4xl"> */}
      {KEYS.map((key) => {
        const isKeyDisable =
          guestedWords.includes(key) ||
          gameResults !== GAME_RESULTS.IN_PROGRESS;
        return (
          <button
            key={key}
            className={`border-2 rounded-md p-4 uppercase font-bold w-16 border-primary transition-all 
            ${
              isKeyDisable
                ? "opacity-20 cursor-not-allowed"
                : "hover:bg-primary hover:text-white"
            }`}
            onClick={() => setGuestedWords((prv) => [...prv, key])}
            disabled={isKeyDisable}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
