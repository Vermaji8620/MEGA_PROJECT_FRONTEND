import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto }) => {
  return (
    <div>
      <Link to={linkto}>
        <div
          className={`text-center rounded-md font-bold text-[13px] px-6 py-3 ${
            active ? "bg-yellow-500 text-black" : "bg-gray-700"
          } hover: scale-95 transition-all duration-200`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;
