import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.svg";
import GoogleLogo from "../../Images/google-logo.png";
import Twitter from "../../Images/twitter.png";
import Instagram from "../../Images/instagram.png";
import LinkedLn from "../../Images/linkedLn.png";
import Heart from "../../Images/Heart.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__item">
          <img src={Logo} alt="Logo" width="90" height="28" />
          <p className="footer__list__item__paragraph">
            Build a modern and creative website with crealand
          </p>
          <ul className="footer__list__item__website-lists">
            <li className="footer__list__item__website-lists__items">
              <Link
                className="footer__list__item__website-lists__items__link"
                to="#"
              >
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  width="42"
                  height="40"
                />
              </Link>
            </li>
            <li className="footer__list__item__website-lists__items">
              <Link
                className="footer__list__item__website-lists__items__link"
                to="#"
              >
                <img src={Twitter} alt="Google Logo" width="42" height="40" />
              </Link>
            </li>
            <li className="footer__list__item__website-lists__items">
              <Link
                className="footer__list__item__website-lists__items__link"
                to="#"
              >
                <img src={Instagram} alt="Google Logo" width="42" height="40" />
              </Link>
            </li>
            <li className="footer__list__item__website-lists__items">
              <Link
                className="footer__list__item__website-lists__items__link"
                to="#"
              >
                <img src={LinkedLn} alt="Google Logo" width="42" height="40" />
              </Link>
            </li>
          </ul>
        </li>
        <li className="footer__list__item">
          <h5 className="footer__list__item__heading">Product</h5>
          <Link className="footer__list__item__link" to="#">
            Landingpage
          </Link>
          <Link className="footer__list__item__link" to="#">
            Features
          </Link>
          <Link className="footer__list__item__link" to="#">
            Documentation
          </Link>
          <Link className="footer__list__item__link" to="#">
            Referral Program
          </Link>
          <Link className="footer__list__item__link" to="#">
            Pricing
          </Link>
        </li>
        <li className="footer__list__item">
          <h5 className="footer__list__item__heading">Services</h5>
          <Link className="footer__list__item__link" to="#">
            Documentation
          </Link>
          <Link className="footer__list__item__link" to="#">
            Design
          </Link>
          <Link className="footer__list__item__link" to="#">
            Themes
          </Link>
          <Link className="footer__list__item__link" to="#">
            Illustrations
          </Link>
          <Link className="footer__list__item__link" to="#">
            UI Kit
          </Link>
        </li>
        <li className="footer__list__item">
          <h5 className="footer__list__item__heading">Company</h5>
          <Link className="footer__list__item__link" to="#">
            About
          </Link>
          <Link className="footer__list__item__link" to="#">
            Terms
          </Link>
          <Link className="footer__list__item__link" to="#">
            Privacy Policy
          </Link>
          <Link className="footer__list__item__link" to="#">
            Careers
          </Link>
        </li>
        <li className="footer__list__item">
          <h5 className="footer__list__item__heading">More</h5>
          <Link className="footer__list__item__link" to="#">
            Documentation
          </Link>
          <Link className="footer__list__item__link" to="#">
            License
          </Link>
          <Link className="footer__list__item__link" to="#">
            Documentation
          </Link>
          <Link className="footer__list__item__link" to="#">
            Changelog
          </Link>
        </li>
      </ul>
      <div className="footer__bottom">
        <img
          className="footer__bottom__img"
          src={Heart}
          alt="Heart logo"
          width="56"
          height="56"
        />
        <p className="footer__bottom__paragraph">
          Copyright © 2021. Crafted with love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
