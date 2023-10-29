import { Link } from "react-router-dom";

const ElementInsideFooter = ({ elementt }) => {
  return (
    <div>
      <Link to={elementt.link}>{elementt.title}</Link>
    </div>
  );
};

export default ElementInsideFooter;
