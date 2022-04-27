import { Link } from "react-router-dom";
import "./LeftText.scss";
const LeftText = () => {
  return (
    <div className="left-text">
      <h1 className="left-text__heading1">
        We help you <br /> grow your business
        <span className="faster">faster</span>
      </h1>
      <p className="left-text__paragraph">
        Ehya is the Instagram analytics platform teams use to stay focused on
        the goals, track engagement for report your business .
      </p>
      <div className="left-text__bottom">
        <button className="left-text__button" type="button">
          See how it works
        </button>
        <Link className="left-text__link" to="#">
          Get a free demo
        </Link>
      </div>
    </div>
  );
};

export default LeftText;
