import React from "react";

import classes from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={classes.container}>
      <div className={classes.socials}>
        <ul className={classes.list}>
          <li>
            <a href="https://www.linkedin.com/in/mahdi-zangeneh-7548ba10a/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/">
              <i className="fab fa-gitlab"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.text}>
        <p>Coypright © 2023</p>
      </div>
    </div>
  );
};

export default Copyright;
