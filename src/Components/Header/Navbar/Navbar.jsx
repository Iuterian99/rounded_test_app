import "./Navbar.scss";
import Logo from "../../../Images/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" width="77" height="24" />
      <div className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">Home</li>
          <li className="navigation__list__item">Landings</li>
          <li className="navigation__list__item">Pages</li>
          <li className="navigation__list__item">Docs</li>
          <li className="navigation__list__item">Help</li>
        </ul>
        <button className="navbar__btn" type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
