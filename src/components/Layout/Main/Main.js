import React from "react";
import Home from "../../Section/Home/Home";
import About from "../../Section/About/About";
import Section from "../../Section/Section";

import classes from "./Main.module.css";
import Experience from "../../Section/Experience/Experience";
import Skill from "../../Section/Skill/Skill";
import Contact from "../../Section/Contact/Contact";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes["main__inner"]}>
        {props.navItems.map((navItem) => (
          <Section className={classes.section} id={navItem.id} key={navItem.id}>
            {navItem.id === "home" && <Home />}
            {navItem.id === "about" && <About />}
            {navItem.id === "experiences" && <Experience />}
            {navItem.id === "skills" && <Skill />}
            {navItem.id === "contact" && <Contact />}
          </Section>
        ))}
      </div>
    </main>
  );
};

export default Main;
