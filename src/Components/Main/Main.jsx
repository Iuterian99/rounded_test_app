import "./Main.scss";
import Brand from "./CompanyBrands/Brand";
import Posts from "./Posts/Posts";
import Hashtags from "./Hashtags/Hashtags";

const Main = () => {
  return (
    <div className="main">
      <Brand />
      <Posts />
      <Hashtags />
    </div>
  );
};

export default Main;
