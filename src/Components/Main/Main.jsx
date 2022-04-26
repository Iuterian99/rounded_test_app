import "./Main.scss";
import Brand from "./CompanyBrands/Brand";
import Posts from "./Posts/Posts";

const Main = () => {
  return (
    <div className="main">
      <Brand />
      <Posts />
    </div>
  );
};

export default Main;
