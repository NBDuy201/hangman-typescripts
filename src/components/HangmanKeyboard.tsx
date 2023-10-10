import React from "react";
import { GAME_RESULTS } from "~/common/constants";
import { useHangman } from "~/context/HangmanContext";

function generateAlphabet() {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}

const KEYS = generateAlphabet();

const HangmanKeyboard = () => {
  const { guestedWords, gameResults, addWord } = useHangman();

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const { key } = e;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addWord(key);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [addWord]);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-xl">
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
            onClick={() => addWord(key)}
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
