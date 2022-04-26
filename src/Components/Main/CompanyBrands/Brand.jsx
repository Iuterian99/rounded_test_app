import "./Brand.scss";
import Slack from "../../../Images/slack.png";
import Netflix from "../../../Images/netflix.png";
import Google from "../../../Images/google.png";
import Airbnb from "../../../Images/airbnb.png";
import Uber from "../../../Images/uber.png";

const Brand = () => {
  return (
    <div className="brand">
      <ul className="brand__list">
        <li className="brand__list__item">
          <img className="brand__list__item__img" src={Slack} alt="slack" />
        </li>
        <li className="brand__list__item">
          <img className="brand__list__item__img" src={Netflix} alt="netflix" />
        </li>
        <li className="brand__list__item">
          <img className="brand__list__item__img" src={Google} alt="google" />
        </li>
        <li className="brand__list__item">
          <img className="brand__list__item__img" src={Airbnb} alt="airbnb" />
        </li>
        <li className="brand__list__item">
          <img className="brand__list__item__img" src={Uber} alt="uber" />
        </li>
      </ul>
    </div>
  );
};

export default Brand;
