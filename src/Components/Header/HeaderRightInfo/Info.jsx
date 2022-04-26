import "./Info.scss";
import circle from "../../../Images/header__circle.svg";
import diagramsImg from "../../../Images/header__group.svg";
const Info = () => {
  return (
    <div className="info">
      <img
        className="info__circle"
        src={circle}
        alt="circle"
        width="432"
        height="432"
      />
      <img
        className="info__diagrams-img"
        src={diagramsImg}
        alt="diagrams"
        width="1038"
      />
    </div>
  );
};

export default Info;
