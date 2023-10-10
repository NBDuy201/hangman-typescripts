import { GAME_RESULTS } from "~/common/constants";
import { useHangman } from "~/context/HangmanContext";
import { AiOutlineReload } from "react-icons/ai";

const HangmanResults = () => {
  const { gameResults, rePlay } = useHangman();

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

  return (
    <div className="w-full flex justify-center items-center">
      <div className="invisible mr-auto p-2 bg-primary text-white flex gap-x-2 items-center w-fit ">
        <AiOutlineReload />
      </div>
      <h2 className="uppercase">Final judgement: {renderResult()}</h2>
      <button
        onClick={rePlay}
        className={`border p-2 rounded-md bg-primary text-white flex gap-x-2 items-center w-fit ml-auto text-xl
      ${gameResults === GAME_RESULTS.IN_PROGRESS ? "invisible" : "visible"}`}
      >
        <AiOutlineReload />
      </button>
    </div>
  );
};

export default HangmanResults;
