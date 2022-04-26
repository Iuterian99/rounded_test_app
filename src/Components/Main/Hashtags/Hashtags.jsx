import "./Hashtags.scss";

const Hashtags = () => {
  return (
    <div className="hashtags">
      <div className="hashtags__title">
        <h3 className="hashtags__title__heading">
          Track any hashtag(s) Performance
        </h3>
        <p className="hashtags__title__paragraph">
          Don’t waste time on search manual tasks. Let Automation do it for you.
          Simplify workflows, reduce errors, and save time.
        </p>
      </div>
      <ul className="hashtags__list">
        <li className="hashtags__item">
          <h4 className="item__heading"></h4>
          <p className="item__paragraph"></p>
        </li>
      </ul>
    </div>
  );
};

export default Hashtags;
