import React from "react";

const TickInCircle = ({
  size = 48,
  color = "text-purlpe-300",
  bg = "bg-purple-100",
  text = "Success",
  textColor = "text-black",
  fontSize = "text-base",
  gap = "gap-3",
}) => {
  return (
    <div className={`flex items-center ${gap}`}>
      <div
        className={`flex items-center justify-center rounded-full ${bg} ${color}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="w-2/3 h-2/3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>
      <span className={`${textColor} ${fontSize}`}>{text}</span>
    </div>
  );
};

export default TickInCircle;
