import React from "react";
import VerticalLine from "./shape/VerticalLine";
import HorizontalLine from "./shape/HorizontalLine";
import Circle from "./shape/Circle";
import { useHangman } from "~/context/HangmanContext";

const circleDiameterClass = `w-[3.5rem] h-[3.5rem]`;

const Head = () => {
  return (
    <Circle
      className={`right-0 translate-x-1/2 top-[20%] ${circleDiameterClass}`}
    />
  );
};
const Body = () => {
  return (
    <VerticalLine className="absolute right-0 top-[calc(20%+3.5rem)] !h-[25%]" />
  );
};
const LeftArm = () => {
  return (
    <HorizontalLine className="absolute top-[calc(30%+3.5rem)] -right-[1%] !w-[10%] origin-top -rotate-45" />
  );
};
const RightArm = () => {
  return (
    <HorizontalLine className="absolute top-[calc(30%+3.5rem)] -right-[8.5%] !w-[10%] origin-top rotate-45" />
  );
};
const LeftLeg = () => {
  return (
    <HorizontalLine className="absolute top-[calc(25%+20%+3%+3.5rem)] -right-[1%] !w-[10%] origin-top -rotate-45" />
  );
};
const RightLeg = () => {
  return (
    <HorizontalLine className="absolute top-[calc(25%+20%+3%+3.5rem)] -right-[8.5%] !w-[10%] origin-top rotate-45" />
  );
};

const BODY_PARTS = [
  <Head />,
  <Body />,

  <LeftArm />,
  <RightArm />,

  <LeftLeg />,
  <RightLeg />,
];

const HangmanDrawing = () => {
  const { numberOfWrongGuesses } = useHangman();
  return (
    <div className="relative h-[80%] w-[60%] flex items-center justify-center -translate-x-1/4">
      {/* Execution shape */}
      <VerticalLine />
      <HorizontalLine className="absolute bottom-0 !w-[40%]" />
      <HorizontalLine className="absolute top-0 left-1/2 !w-1/2" />
      <VerticalLine className="absolute !h-[20%] top-0 right-0" />

      {/* Man shape */}
      {BODY_PARTS.map((item, index) => (
        <div
          key={index}
          className={numberOfWrongGuesses <= index ? "hidden" : ""}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HangmanDrawing;
