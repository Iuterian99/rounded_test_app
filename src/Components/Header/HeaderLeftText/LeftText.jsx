import { Link } from "react-router-dom";
import "./LeftText.scss";
const LeftText = () => {
  return (
    <div className="leftText">
      <h1 className="leftText__heading1">
        We help you <br /> grow your business{" "}
        <span className="faster">faster</span>
      </h1>
      <p className="leftText__paragraph">
        Ehya is the Instagram analytics platform teams use to stay focused on
        the goals, track engagement for report your business .
      </p>
      <div className="leftText__bottom">
        <button className="leftText__button" type="button">
          See how it works
        </button>
        <Link className="leftText__link" to="#">
          Get a free demo
        </Link>
      </div>
    </div>
  );
};

export default LeftText;
