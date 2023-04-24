import React, { useEffect, useState } from "react";
import Aside from "./components/Layout/Sidebar/Aside";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1040);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Header navItems={navItems} />
      ) : (
        <Aside navItems={navItems} />
      )}
      <Main navItems={navItems} />
    </>
  );
}

export default App;
