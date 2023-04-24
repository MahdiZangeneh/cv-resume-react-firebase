import React, { useState } from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import Author from "../Author/Author";
import Copyright from "../Copyright/Copyright";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={classes.header}>
      <span className={classes.header__logo}>M.ZANGENEH</span>
      <div className={classes.header__menuContainer} onClick={handleClick}>
        <div
          className={`${classes.header__menuBar} ${
            isOpen ? classes.header__menuBarChange : ""
          }`}
        ></div>
        <div
          className={`${classes.header__menuBar} ${
            isOpen ? classes.header__menuBarChange : ""
          }`}
        ></div>
        <div
          className={`${classes.header__menuBar} ${
            isOpen ? classes.header__menuBarChange : ""
          }`}
        ></div>
      </div>
      <div
        className={`${classes.header__sideNavContainer} ${
          isOpen ? classes.header__sideNavContainerOpen : ""
        }`}
      >
        <Author />
        <Nav navItems={props.navItems} />
        <Copyright />
      </div>
    </header>
  );
};

export default Header;
