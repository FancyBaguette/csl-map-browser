import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Credits from "./views/credits/Credits.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import "./App.scss";
import MapList from "./views/maplist/MapList.jsx";
import MapPage from "./views/mappage/MapPage.jsx";
import { useEffect, useState } from "react";
import Portal from "react-portal/lib/Portal.js";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.jsx";

const App = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  // Closes the hamburger menu on "Escape" keypress
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }
  });

  const location = useLocation();

  // Closes the hamburger menu on route change
  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [location]);

  return (
    <>
      <Navigation menuFunction={toggleHamburgerMenu} />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps/:name" element={<MapPage />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>

      {isHamburgerMenuOpen && (
        <Portal>
          <HamburgerMenu menuFunction={toggleHamburgerMenu} />
        </Portal>
      )}
    </>
  );
};

export default App;
