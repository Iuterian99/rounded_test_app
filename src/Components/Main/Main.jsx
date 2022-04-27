import "./Main.scss";
import Brand from "./CompanyBrands/Brand";
import Posts from "./Posts/Posts";
import Hashtags from "./Hashtags/Hashtags";
import Rates from "./Rates/Rates";
import Social from "./Social/Social";

const Main = () => {
  return (
    <div className="main">
      <Brand />
      <Posts />
      <Hashtags />
      <Rates />
      <Social />
    </div>
  );
};

export default Main;
