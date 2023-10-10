import React from "react";
import { GAME_RESULTS, MAX_WRONG_GUESSES } from "~/common/constants";
import words from "~/common/wordList.json";

type HangmanContextType = {
  guestedWords: string[];
  setGuestedWords: React.Dispatch<React.SetStateAction<string[]>>;
  addWord: (word: string) => void;
  winWords: string;
  gameResults: string | undefined;
  numberOfWrongGuesses: number;
  rePlay: () => void;
};

const HangmanContext = React.createContext<HangmanContextType>({
  guestedWords: [],
  setGuestedWords: () => {},
  addWord: () => {},
  winWords: "",
  gameResults: GAME_RESULTS.IN_PROGRESS,
  numberOfWrongGuesses: 0,
  rePlay: () => {},
});

const winWords = words[Math.floor(Math.random() * words.length)];
// const winWords = "test";
console.log("🚀 ~ file: HangmanContext.tsx:24 ~ winWords:", winWords);

function HangmanProvider({ children }: { children: React.ReactNode }) {
  const [guestedWords, setGuestedWords] = React.useState<string[]>([]);
  const wrongGuestedWords = guestedWords?.filter(
    (word) => !winWords.includes(word)
  );
  const numberOfWrongGuesses = wrongGuestedWords?.length ?? 0;

  // ========= Game results =========
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

  // ========= Ultilities =========
  const addWord = React.useCallback(
    (letter: string) => {
      if (
        guestedWords?.includes(letter) ||
        gameResults !== GAME_RESULTS.IN_PROGRESS
      )
        return;

      setGuestedWords((prv) => [...prv, letter]);
    },
    [gameResults, guestedWords]
  );

  function rePlay() {
    setGuestedWords([]);
  }

  const value = {
    guestedWords,
    setGuestedWords,
    addWord,
    winWords,
    gameResults,
    numberOfWrongGuesses,
    rePlay,
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
