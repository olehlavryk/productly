import React from "react";
import T from "prop-types";
import "./Button.css";

const Button = ({ children, size, mode, ...props }) => {
  return (
    <button
      size={size}
      {...props}
      className={`button__${mode} button__size__${size} button ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
};

Button.prototype = {
  children: T.string.isRequired,
  size: T.string,
  mode: T.string,
};

Button.defaultProps = {
  size: "s",
  mode: "primary",
};

export default Button;
