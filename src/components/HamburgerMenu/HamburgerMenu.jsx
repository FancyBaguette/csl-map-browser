import { Link } from "react-router-dom";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({ menuFunction }) => {
  return (
    <>
      <div className="hamburger-menu-overlay" onClick={menuFunction} />
      <nav className="hamburger-menu">
        <button className="hamburger-menu-close-btn" onClick={menuFunction} />
        <ul className="hamburger-menu-nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/maps"}>Maps</Link>
          </li>
          <li>
            <Link to={"/credits"}>Credits</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
