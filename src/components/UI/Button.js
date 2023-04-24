import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClasses = props.isLight
    ? `${classes.button} ${classes["button--light"]} ${props.className}`
    : `${classes.button} ${classes["button--dark"]} ${props.className}`;
  return (
    <button disabled={props.disabled} className={buttonClasses}>
      {props.children}
    </button>
  );
};

export default Button;
