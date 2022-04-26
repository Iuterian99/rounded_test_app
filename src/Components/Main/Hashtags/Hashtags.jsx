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
          <div className="hashtags__item__context">
            <h4 className="context__heading heading1">Hashtag Growth</h4>
            <p className="context__paragraph">
              Follow a hashtag growth total posts, videos and images.
            </p>
          </div>
        </li>
        <li className="hashtags__item">
          <div className="hashtags__item__context">
            <h4 className="context__heading heading2">
              Influencers by Hashtag
            </h4>
            <p className="context__paragraph">
              Identify the most influential people posting with your hashtag.
            </p>
          </div>
        </li>
        <li className="hashtags__item">
          <div className="hashtags__item__context">
            <h4 className="context__heading heading3">Most Influental Post</h4>
            <p className="context__paragraph">
              See the most influential posts on hashtag you are following on.
            </p>
          </div>
        </li>
        <li className="hashtags__item">
          <div className="hashtags__item__context">
            <h4 className="context__heading heading4">Hashtag Location</h4>
            <p className="context__paragraph">
              Visualize where people are posting using your hashtag made.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Hashtags;
