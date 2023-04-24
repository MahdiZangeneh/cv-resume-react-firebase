import React from "react";
import classes from "./Skill.module.css";

const skills = [
  {
    header: "Back-end",
    titles: [
      "NodeJs",
      "NestJs",
      "MongoDB",
      "Mongoose",
      "Typegoose",
      "JavaScript",
      "TypeScript",
      "Amazon Web Services",
      "Firestore",
      "Firebase",
      "REST API",
      "JSON",
      "Agile Methodologies",
      "Axios",
      "Git",
      "Postman",
    ],
  },
  {
    header: "Front-end",
    titles: [
      "ReactJs",
      "Jacascript",
      "TypeScript",
      "jQuery",
      "Typescript",
      "JSON",
      "REST API",
      "Html",
      "Css",
      "Redux",
      "Hooks",
      "SCSS",
      "Styled-Component",
      "Bootstrap",
      "PWA",
    ],
  },
];
const Skill = () => {
  return (
    <div className={classes.skill}>
      <div className={classes.content}>
        <div className={classes.skill__title}>
          <span>- Skills</span>
          <h3>My Skills</h3>
        </div>
        <div className={classes.skill__list}>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <div className={classes.skill__inner}>
                  <div className={classes["skill__inner--header"]}>
                    <h3>{skill.header}</h3>
                  </div>
                  <div className={classes["skill__inner--title"]}>
                    {skill.titles.map((title, index) => (
                      <span key={index}>{title}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
