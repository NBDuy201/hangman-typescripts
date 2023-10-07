import React from "react";

interface VerticalLineProps {
  className?: string;
}

const VerticalLine = ({ className = "" }: VerticalLineProps) => {
  return <div className={`w-1 h-full bg-primary ${className}`} />;
};

export default VerticalLine;
