import React, { useState, useEffect } from "react";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const [activeItem, setActiveItem] = useState(props.navItems.fId);

  useEffect(() => {
    const handleScrollAndClick = (id) => {
      setActiveItem(id);
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    };

    props.navItems.forEach((navItem) => {
      const navLink = document.querySelector(`#${navItem.id}`);
      navLink.addEventListener("click", (event) => {
        handleScrollAndClick(navItem.id);
      });
    });

    const handleScroll = () => {
      props.navItems.forEach((navItem) => {
        const section = document.getElementById(navItem.id);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveItem(navItem.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      props.navItems.forEach((navItem) => {
        const navLink = document.querySelector(`#${navItem.id}`);
        navLink.removeEventListener("click", (event) => {
          event.preventDefault();
          handleScrollAndClick(navItem.id);
        });
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.navItems]);

  const handleItemClick = (id, event) => {
    event.preventDefault();
    setActiveItem(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes["nav__list"]}>
        {props.navItems.map((item) => (
          <li
            className={`${classes["nav__item"]} ${
              activeItem === item.id ? classes["nav__item--current"] : ""
            }`}
            key={item.id}
          >
            <a
              href={`#${item.label.toLowerCase()}`}
              onClick={(event) => handleItemClick(item.id, event)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
