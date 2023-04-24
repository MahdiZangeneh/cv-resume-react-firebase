import React from "react";
import Button from "../../UI/Button";

import useInput from "../../../hooks/use-input";

import classes from "./Contact.module.css";

const Contact = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <div className={classes.contact}>
      <div className={classes.content}>
        <div className={classes.details}>
          <div className={classes.left}>
            <div className={classes.left__title}>
              <span>- Let's Connect</span>
              <h3>Get in touch</h3>
            </div>
            <div className={classes.left__text}>
              <p>
                I'm currently avaliable to take on new projects, so feel free to
                send me a message about anything that you want to run past me.
                You can contact anytime at 24/7
              </p>
            </div>
            <div className={classes.left__info}>
              <ul>
                <li>
                  <a href="tel:+60112310159">+60 11 231 10 159</a>
                </li>
                <li>
                  <a href="mailto:mahdi.zangeneh91@gmail.com">
                    Mahdi.zangeneh91@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#contact">Selangor, Malaysia</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.right}>
            <form onSubmit={formSubmissionHandler}>
              <div className={classes.form__control}>
                <div className={classes.input__container}>
                  <input
                    className={nameInputHasError ? `${classes.invalid}` : ""}
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                  />
                  {nameInputHasError && <span>Name must not be empty.</span>}
                </div>
                <div className={classes.input__container}>
                  <input
                    className={emailInputHasError ? `${classes.invalid}` : ""}
                    id="email"
                    type="email"
                    placeholder="Your email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                  />
                  {emailInputHasError && (
                    <span>
                      Email must not be empty and must be a valid email.
                    </span>
                  )}
                </div>

                <textarea defaultValue="Write something..."></textarea>
              </div>
              <Button disabled={!formIsValid} className={classes["button--lg"]}>
                Submit now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
