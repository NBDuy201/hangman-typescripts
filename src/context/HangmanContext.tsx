import React from "react";
import { GAME_RESULTS, MAX_WRONG_GUESSES } from "~/common/constants";

type HangmanContextType = {
  guestedWords: string[];
  setGuestedWords: React.Dispatch<React.SetStateAction<string[]>>;
  addWord: (word: string) => void;
  winWords: string;
  gameResults: string | undefined;
  numberOfWrongGuesses: number;
};

const HangmanContext = React.createContext<HangmanContextType>({
  guestedWords: [],
  setGuestedWords: () => {},
  addWord: () => {},
  winWords: "",
  gameResults: GAME_RESULTS.IN_PROGRESS,
  numberOfWrongGuesses: 0,
});

function HangmanProvider({ children }: { children: React.ReactNode }) {
  const winWords = "test";
  const [guestedWords, setGuestedWords] = React.useState<string[]>([]);
  const wrongGuestedWords = guestedWords?.filter(
    (word) => !winWords.includes(word)
  );
  const numberOfWrongGuesses = wrongGuestedWords?.length ?? 0;

  // Game results calculate
  const gameResults = React.useMemo(() => {
    if (winWords.split("").every((letter) => guestedWords.includes(letter))) {
      return GAME_RESULTS.WIN;
    }

    if (numberOfWrongGuesses < MAX_WRONG_GUESSES) {
      return GAME_RESULTS.IN_PROGRESS;
    }

    if (numberOfWrongGuesses === MAX_WRONG_GUESSES) {
      return GAME_RESULTS.LOSE;
    }
  }, [numberOfWrongGuesses, guestedWords]);

  function addWord(word: string) {
    setGuestedWords((prv) => [...prv, word]);
  }

  const value = {
    guestedWords,
    setGuestedWords,
    addWord,
    winWords,
    gameResults,
    numberOfWrongGuesses,
  };

  return (
    <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>
  );
}

function useHangman() {
  const context = React.useContext(HangmanContext);

  if (typeof context === "undefined")
    throw new Error("useHangman must be used within HangmanProvider");

  return context;
}

export { HangmanProvider, useHangman };
