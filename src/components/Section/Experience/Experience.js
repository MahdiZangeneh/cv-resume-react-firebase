import React, { useState } from "react";
import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button";

import classes from "./Experience.module.css";

const experiences = [
  {
    id: "1",
    title: "Back-End Developer",
    imageUrl:
      "https://www.whipmobility.com/wp-content/uploads/2022/08/WHIP-website-2-1024x724.jpg",
    duration: {
      startDate: "2021",
      endDate: "Present",
    },
    company: "Whip Mobility sdn",
    location: "Selangor, Malaysia",
    description:
      "WHIP  is a SaaS platform focused on delivering digital success for our automotive retail clients.",
    descriptions: [
      "WHIP  is a SaaS platform focused on delivering digital success for our automotive retail clients which empowers auto retailers to interact, sell and service their customers via a comprehensive digital engagement platform (inclusive of private-label app and web) that significantly improves the end-user experience and lowers costs (Shopify for automotive retailers!).",
    ],
    skills: [
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
    id: "2",
    title: "Front End Developer",
    imageUrl: "https://shahrenovin.com/z_themes/979/img/slider_1.png",
    duration: {
      startDate: "2018",
      endDate: "2021",
    },
    company: "ShahreNovin",
    location: "Tehran, Iran",
    description:
      "ShahreNovin Software Company, Provides all-in-one business management software.",
    descriptions: [
      "The activity of ShahreNovin is providing Software As A Service (SAAS) and other cloud services in Iran and some other countries. We design and develop web-based software and services (cloud services) for the use of small and medium-sized (SME) businesses in Iran and any other Farsi language countries such as Uzbekistan, Tajikistan, Afghanistan, and other immigrant communities",
      "Through years of experience in the field of providing various software services to thousands of users from all over the country, we have succeeded in designing and developing the most comprehensive business management infrastructure on the scale of small and medium businesses.",
    ],
    skills: [
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
  {
    id: "3",
    title: "Front End Developer",
    imageUrl: "https://marketifythemes.net/html/elisc/img/experience/1.jpg",
    duration: {
      startDate: "2015",
      endDate: "2018",
    },
    company: "Samanama",
    location: "Tehran, Iran",
    description:
      "Samanama was a company that designed, and developed software services and information solutions.",
    descriptions: [
      "Samanama was a company that designed, and developed software services and information solutions. Among a plethora of services, web design and development, e-commerce solutions, business-to-business applications, business-to-client applications, news portals, and professional video services are a few that was offered.",
    ],
    skills: [
      "HTML",
      "CSS",
      "jQuery",
      "Bootstrap",
      "Foundation",
      "JavaScript",
      "React",
    ],
  },
  {
    id: "4",
    title: "Front-end Developer",
    imageUrl: "https://marketifythemes.net/html/elisc/img/experience/1.jpg",
    duration: {
      startDate: "2014",
      endDate: "2015",
    },
    company: "Freelancer",
    location: "Tehran, Iran",
    description:
      "During this period, I was learning and working as a freelancer which helped me a lot to become more and more familiar with programming world.",
    descriptions: [
      "I was constantly pushing myself to take on new challenges and projects, and every day felt like an opportunity to expand my skill set and knowledge base. Despite the occasional frustrations and setbacks, I found the experience incredibly fulfilling and rewarding, and I looked forward to diving into my work each day with enthusiasm and curiosity. Overall, it was a truly enjoyable period of growth and discovery that helped lay the foundation for my future success in the programming world.",
    ],
    skills: [
      "Html",
      "Css",
      "Javascript",
      "jQuery",
      "Php",
      "Sql",
      "mySQL",
      "Apache",
    ],
  },
];

const Experience = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

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
