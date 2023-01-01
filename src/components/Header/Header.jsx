import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ menuFunction }) => {
  return (
    <header className="header">
      <nav className="header-inner">
        <span className="header-brand">
          <Link to={"/"}>CSL Map Browser</Link>
        </span>

        <div>
          <button onClick={menuFunction} className="hamburger-menu-btn" />
          <ul className="nav-list">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
