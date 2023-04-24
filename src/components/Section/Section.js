import React from "react";

import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <section className={`${classes.section} ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
};

export default Section;
