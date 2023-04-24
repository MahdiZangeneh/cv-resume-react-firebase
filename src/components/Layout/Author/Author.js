import React from "react";
import author from "../../../assets/author.png";
import classes from "./Author.module.css";

const Author = (props) => {
  return (
    <div className={`${classes.author} ${props.className}`}>
      <div className={classes["author__image"]}>
        <img
          src={author}
          alt="Portrait of Mahdi Zangeneh, front-end and back-end developer"
        />
      </div>
      <div className={classes["author__name"]}>
        <h1 className={classes["author__name-heading"]}>Mahdi Zangeneh</h1>
      </div>
    </div>
  );
};

export default Author;
