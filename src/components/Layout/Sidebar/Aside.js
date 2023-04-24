import React from "react";

import classes from "./Aside.module.css";
import Copyright from "../Copyright/Copyright";
import Nav from "../Nav/Nav";
import Author from "../Author/Author";

const Aside = (props) => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes["sidebar__inner"]}>
        <Author />
        <Nav navItems={props.navItems} />
        <Copyright />
      </div>
    </aside>
  );
};

export default Aside;
