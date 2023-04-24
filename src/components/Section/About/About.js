import React from "react";
import Button from "../../UI/Button";
import Resume from "../../../assets/Mahdi_Zangeneh_Resume.pdf";

import classes from "./About.module.css";

const About = (props) => {
  return (
    <div className={classes.about} id={props.id}>
      <div className={classes.content}>
        <div className={classes.details}>
          <div className={classes.details__left}>
            <div className={classes.details__title}>
              <span className={classes.details__mini}>- NICE TO MEET YOU</span>
              <h3 className={classes.details__name}>Mahdi Zangeneh</h3>
              <span className={classes.details__job}>Full-Stack developer</span>
            </div>
            <div className={classes.buttons}>
              <Button>
                <a target="_new" href={Resume} alt="Download My CV">
                  Download My CV!
                </a>
              </Button>{" "}
            </div>
          </div>
          <div className={classes.details__right}>
            <div className={classes.details__text}>
              <p>
                Hello! My name is Mahdi Zangeneh. I am a developer who is very
                passionate and dedicated to my work. Also a detail-oriented team
                player with strong organizational skills.
              </p>
              <p>
                With more than 4 years experience as a front-end and 2 years as
                a back-end developer, I have acquired the skills and knowledge
                necessary to make your project a success. I enjoy every step of
                coding and always eager to learn new things.
              </p>
            </div>
            <div className={classes.details__info}>
              <ul>
                <li>
                  <span>Age</span>
                  <span>32</span>
                </li>
                <li>
                  <span>Born In</span>
                  <span>
                    <a href="#home">Tehran, IRAN</a>
                  </span>
                </li>
                <li>
                  <span>Mail</span>
                  <span>
                    <a href="mailto:mahdi.zangeneh91@gmail.com">
                      mahdi.zangeneh91@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>Phone</span>
                  <span>
                    <a href="tel:+601123110159">+60 11 231 10 159</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
