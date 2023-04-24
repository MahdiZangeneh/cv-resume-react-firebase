import React, { useEffect, useState } from "react";
import Aside from "./components/Layout/Sidebar/Aside";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavigations = async () => {
      const response = await fetch(
        "https://cv-resume-react-default-rtdb.asia-southeast1.firebasedatabase.app/navigations.json"
      );
      const responseData = await response.json();
      const loadedNavigations = [];

      for (const key in responseData) {
        loadedNavigations.push({
          fId: key,
          id: responseData[key].id,
          label: responseData[key].label,
        });
      }

      setNavItems(loadedNavigations);
    };

    fetchNavigations();
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
