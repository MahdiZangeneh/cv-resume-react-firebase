import React, { useState, useEffect } from "react";
import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button";

import classes from "./Experience.module.css";

const Experience = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchNavigations = async () => {
      const response = await fetch(
        "https://cv-resume-react-default-rtdb.asia-southeast1.firebasedatabase.app/experiences.json"
      );
      const responseData = await response.json();
      const loadedExperiences = [];

      for (const key in responseData) {
        loadedExperiences.push({
          fId: key,
          id: responseData[key].id,
          company: responseData[key].company,
          description: responseData[key].description,
          descriptions: responseData[key].descriptions,
          duration: responseData[key].duration,
          imageUrl: responseData[key].imageUrl,
          location: responseData[key].company,
          skills: responseData[key].skills,
          title: responseData[key].title,
        });
      }

      setExperiences(loadedExperiences);
    };

    fetchNavigations();
  });

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className={classes.experience} id={props.id}>
      <div className={classes.content}>
        <div className={classes.experience__title}>
          <span>- Experience</span>
          <h3>Places I worked so far!</h3>
        </div>
        <div className={classes.experience__list}>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.id}>
                <Card
                  className={classes.hover}
                  onClick={() => {
                    showModalHandler();
                    handleExperienceClick(experience);
                  }}
                >
                  <div className={classes.job}>
                    <div className={classes.job__info}>
                      <span>{`-${experience.duration.startDate} -${experience.duration.endDate}`}</span>
                      <h3>{`${experience.title}`}</h3>
                    </div>
                    <div className={classes.job__place}>
                      <span>{`-${experience.location}`}</span>
                    </div>
                  </div>
                  <div className={classes.description}>
                    <p>{experience.description}</p>
                    <Button className={classes["button--customised"]}>
                      Read More
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          {modalIsShown && (
            <Modal onModalBackdropClick={hideModalHandler}>
              <div className={classes.modal__image}>
                <div
                  style={{
                    backgroundImage: `url(${selectedExperience.imageUrl})`,
                  }}
                ></div>
              </div>
              <div className={classes.modal__tags}>
                {selectedExperience.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
              <div className={classes.modal__info}>
                <span>{selectedExperience.company}</span>
                <span>{`-${selectedExperience.duration.startDate} -${selectedExperience.duration.endDate}`}</span>
                <h3>{selectedExperience.title}</h3>
              </div>
              <div className={classes.modal__description}>
                {selectedExperience.descriptions.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
