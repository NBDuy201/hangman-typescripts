import React from "react";
import HangmanDrawing from "~/components/HangmanDrawing";
import HangmanKeyboard from "~/components/HangmanKeyboard";
import HangmanResults from "~/components/HangmanResults";
import HangmanWords from "~/components/HangmanWords";
import { HangmanProvider } from "~/context/HangmanContext";

const GamePage = () => {
  return (
    <HangmanProvider>
      <div className="h-full p-4 bg-primary rounded-md grid grid-cols-2 gap-x-6">
        {/* Introduction */}
        <div className="bg-white py-4 px-20 rounded-md flex flex-col items-center justify-center text-center">
          <h1 className="question uppercase">
            The <br />
            hangman
          </h1>
          <p className="text-xl mt-10 mb-4">
            A man have been falsely accused of stealing wood in a village. The
            trial day has come, and the fate of the man lies upon your words
          </p>
          <p className="text-xl italic font-semibold">
            Choose your words carefully
          </p>
        </div>
        {/* Game */}
        <div className="bg-white p-4 rounded-md flex flex-col justify-center items-center gap-y-4">
          <HangmanResults />
          <HangmanDrawing />
          <HangmanWords />
          <div className="self-stretch">
            <HangmanKeyboard />
          </div>
        </div>
      </div>
    </HangmanProvider>
  );
};

export default GamePage;
