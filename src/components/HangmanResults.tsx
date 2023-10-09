import React from "react";
import { GAME_RESULTS } from "~/common/constants";
import { useHangman } from "~/context/HangmanContext";

const HangmanResults = () => {
  const { gameResults } = useHangman();

  function renderResult() {
    switch (gameResults) {
      case GAME_RESULTS.WIN:
        return <span className="text-green-500">Release</span>;
      case GAME_RESULTS.LOSE:
        return <span className="text-red-500">Executed</span>;
      case GAME_RESULTS.IN_PROGRESS:
        return <span className="text-blue-500">In progress</span>;

      default:
        break;
    }
  }

  return <h2 className="uppercase">Final judgement: {renderResult()}</h2>;
};

export default HangmanResults;
