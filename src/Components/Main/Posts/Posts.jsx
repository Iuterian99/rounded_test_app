import "./Posts.scss";
import { Link } from "react-router-dom";
import Phone from "../../../Images/phones.svg";

const Posts = () => {
  return (
    <div className="posts">
      <ul className="posts__list">
        <li className="posts__list__item">
          <img
            className="posts__list__item__img"
            src={Phone}
            alt="phone"
            width="494"
            height="551"
          />
          <div className="posts__list__item__text">
            <h2 className="posts__list__item__text__heading">
              Measure Impressions and Reach Post
            </h2>
            <p className="posts__list__item__text__paragraph">
              Graphs displaying your performance for metrics like follower
              evolution, average engagement rate per post and reach and
              impressions to give you the insights.
            </p>
            <Link className="posts__list__item__text__link" to="#">
              Learn about graphs
              <svg
                className="posts__list__item__text__link__arrow"
                width="21"
                height="12"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.2C0.558172 5.2 0.2 5.55817 0.2 6C0.2 6.44183 0.558172 6.8 1 6.8L1 5.2ZM20.5657 6.56569C20.8781 6.25327 20.8781 5.74674 20.5657 5.43432L15.4745 0.343147C15.1621 0.0307275 14.6556 0.0307274 14.3431 0.343147C14.0307 0.655566 14.0307 1.1621 14.3431 1.47452L18.8686 6L14.3431 10.5255C14.0307 10.8379 14.0307 11.3444 14.3431 11.6569C14.6556 11.9693 15.1621 11.9693 15.4745 11.6569L20.5657 6.56569ZM1 6.8L20 6.8L20 5.2L1 5.2L1 6.8Z"
                  fill="blue"
                />
              </svg>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
