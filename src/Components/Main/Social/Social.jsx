import "./Social.scss";
import { Link } from "react-router-dom";
import People from "../../../Images/social__people.svg";

const Social = () => {
  return (
    <div className="social">
      <div className="social__left-info">
        <h3 className="social__left-info__heading">
          Grow your brand presence on social media 😍
        </h3>
        <p className="social__left-info__paragraph">
          Join with more 1200+ happy customers
        </p>
        <div className="social__left-info__people">
          <img src={People} alt="People" width="137" height="37" />
          <Link className="social__left-info__people__link" to="#">
            and others
          </Link>
        </div>
      </div>
      <button className="social__btn" type="button">
        Get your trial now
      </button>
    </div>
  );
};

export default Social;
