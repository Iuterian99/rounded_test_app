import "./Rates.scss";
import Stars from "../../../Images/stars.png";

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
        <div className="rates__right__text">
          <img className="stars" src={Stars} alt="stars" />
          <p className="rates__right__text__paragraph">
            “With Ehya, we’re able to easily track our performance in full
            detail. It’s become an essential tool for us to grow and engage with
            our audience.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
