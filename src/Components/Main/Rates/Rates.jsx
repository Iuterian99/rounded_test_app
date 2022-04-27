import "./Rates.scss";
import Stars from "../../../Images/stars.png";
import JaquonHart from "../../../Images/jaquanHart.png";
import LeftNav from "../../../Images/left-navigator.png";
import RightNav from "../../../Images/right-navigator.png";
import DoubleQuote from "../../../Images/doubleQuote.png";

const Rates = () => {
  return (
    <div className="rates">
      <div className="rates__left">
        <h3 className="rates__left__heading">
          Powering the growth of 100+ business & retailers in Indonesia.
        </h3>
        <p className="rates__left__paragraph">
          From single store, startups, to large multi-store brands.
        </p>
      </div>
      <div className="rates__right">
        <img src={DoubleQuote} alt="Double Quote Signiture" />
        <div className="rates__right__text">
          <img
            className="stars"
            src={Stars}
            alt="stars"
            width="122"
            height="18"
          />
          <p className="rates__right__text__paragraph">
            “With Ehya, we’re able to easily track our performance in full
            detail. It’s become an essential tool for us to grow and engage with
            our audience.”
          </p>
          <ul className="rates__right__text__list">
            <button
              className="rates__right__text__list__left-btn"
              type="button"
            >
              <img
                src={LeftNav}
                alt="left navigator sign"
                width="24"
                height="24"
              />
            </button>
            <li className="rates__right__text__list__item">
              <div className="rates__right__text__list__item__user-img">
                <img
                  src={JaquonHart}
                  alt="jaquon Hart"
                  width="56"
                  height="56"
                />
              </div>
              <div className="rates__right__text__list__item__user-info">
                <h5 className="rates__right__text__list__item__user-info__heading">
                  Jaquon Hart
                </h5>
                <p className="rates__right__text__list__item__user-info__paragraph">
                  Digital Marketing Executive, Hypebeast
                </p>
              </div>
            </li>
            <button
              className="rates__right__text__list__right-btn"
              type="button"
            >
              <img
                src={RightNav}
                alt="left navigator sign"
                width="100"
                height="100"
              />
            </button>
          </ul>
          <ul className="dot-list">
            <li className="full-dot"></li>
            <li className="empty-dot"></li>
            <li className="empty-dot"></li>
            <li className="empty-dot"></li>
            <li className="empty-dot"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rates;
