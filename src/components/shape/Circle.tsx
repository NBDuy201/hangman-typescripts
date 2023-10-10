interface CircleProps {
  className?: string;
}

const Circle = ({ className = "" }: CircleProps) => {
  return (
    <div
      className={`absolute rounded-full border-4 border-primary ${className}`}
    />
  );
};

export default Circle;
