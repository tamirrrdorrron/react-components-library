import React from "react";
import "./button.css";

interface ButtonProps {
  type?: "primary" | "secondary" | "danger" | "default";
  btnText: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, btnText, onClick }) => {
  let buttonColorClass = "";

  switch (type) {
    case "primary":
      buttonColorClass = "bg-blue-500 hover:bg-blue-700";
      break;
    case "secondary":
      buttonColorClass = "bg-green-500 hover:bg-green-700";
      break;
    case "danger":
      buttonColorClass = "bg-red-500 hover:bg-red-700";
      break;
    default:
      buttonColorClass = "bg-gray-500 hover:bg-gray-700";
  }

  return (
    <button
      className={`cursor-pointer px-4 py-2 text-white rounded focus:outline-none ${buttonColorClass} btn`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;