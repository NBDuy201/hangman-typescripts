import React from "react";

function generateAlphabet() {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}

const KEYS = generateAlphabet();

const HangmanKeyboard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-xl">
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,_1fr))] text-center gap-4 text-4xl"> */}
      {KEYS.map((key) => (
        <button
          key={key}
          className="border-2 border-primary rounded-md p-4 uppercase font-bold w-16 
          hover:bg-primary hover:text-white transition-all"
          onClick={() => console.log(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default HangmanKeyboard;
