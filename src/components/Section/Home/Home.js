import React from "react";
import Button from "../../UI/Button";
import Resume from "../../../assets/Mahdi_Zangeneh_Resume.pdf";
import author from "../../../assets/author-big.png";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.home} id={props.id}>
      <div className={classes.content}>
        <div className={classes.details}>
          <div className={classes.details__left}>
            <div className={classes.details__title}>
              <h3>
                Hi, I'm
                <span className={classes.details__titleBlue}> Mahdi!</span>
              </h3>
              <h3 className={classes.details__titleJob}>
                Full-Stack Developer
              </h3>
              <h3 className={classes.details__titleLocation}>
                Living in Malaysia
              </h3>
            </div>
            <div className={classes.details__subtitle}>
              <p>
                I'm a full-stack developer living in Malaysia for now with
                <span className={classes.details__subtitleBlue}>
                  {" "}
                  6+ years{" "}
                </span>
                of experience.
              </p>
            </div>
            <div className={classes.details__buttons}>
              <Button>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Download My CV!
                </a>
              </Button>
              <Button isLight={true}>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
            <div className={classes.details__info}>
              <ul>
                <li>
                  <a href="tel:+601123110159">+60 11 231 10 159</a>
                </li>
                <li>
                  <a href="mailto:mahdi.zangeneh91@gmail.com">
                    mahdi.zangeneh91@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#home">Petaling Jaya, Selangor, Malaysia</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.details__right}>
            <img src={author} alt="Mahdi Zangeneh, full-stack developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
