import React from "react";

interface HorizontalLineProps {
  className?: string;
}

const HorizontalLine = ({ className = "" }: HorizontalLineProps) => {
  return <div className={`h-1 w-full bg-primary ${className}`} />;
};

export default HorizontalLine;
