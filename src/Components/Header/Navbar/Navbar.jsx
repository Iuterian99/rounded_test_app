import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../../Images/Logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" width="77" height="24" />
      <div className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to="#">
              Home
            </Link>
          </li>
          <li className="navigation__list__item">
            <select className="landings">
              <option autoFocus defaultValue value="landings">
                Landings
              </option>
              <option value="other">other</option>
              <option value="other">other</option>
            </select>
          </li>
          <li className="navigation__list__item">
            <select className="landings">
              <option autoFocus defaultValue value="pages">
                Pages
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to="#">
              Docs
            </Link>
          </li>
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to="#">
              Help
            </Link>
          </li>
        </ul>
        <Link className="navbar__link" to="#">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
