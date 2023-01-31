import react from "react";
import "./Button.css";

const Button = ({ text, variant, onClick }) => {
  return (
    <span
      className={variant === "fill" ? "button" : "button-normal"}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default Button;
