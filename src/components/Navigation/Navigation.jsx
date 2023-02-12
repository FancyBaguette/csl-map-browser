import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = ({ menuFunction }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <span className="nav-brand">
          <Link to={"/"}>Skylines Atlas</Link>
        </span>

        <div>
          <button onClick={menuFunction} className="hamburger-menu-btn" />
          <ul className="nav-list">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/credits"}>Credits</Link>
            </li>
            <li>
              <a href="https://github.com/FancyBaguette/csl-map-browser">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
