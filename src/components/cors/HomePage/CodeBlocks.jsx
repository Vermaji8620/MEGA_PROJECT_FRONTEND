import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      {/* section 1 */}
      <div className="w-1/2 flex flex-col gap-8">
        {heading}
        <div className="text-gray-500 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-6 items-center justify-center">
              {toString(ctabtn1.btnText)}
              <BsFillArrowRightCircleFill />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {toString(ctabtn2.btnText)}
          </CTAButton>
        </div>
      </div>

      {/* section 2 */}

      <div className="flex text-[10px] h-fit w-1/2 ">
        <div className=" text-center flex text-sm justify-center  flex-col w-[10%] text-yellow-500 font-semibold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex  flex-col gap-2 font-semibold ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            speed={50}
            style={{
              // fontSize: "10px",
              width: "290px",
              display: "block",
              whiteSpace: "pre-line",
            }}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

CodeBlocks.propTypes = {
  position: PropTypes.string.isRequired,
  heading: PropTypes.object.isRequired,
  subheading: PropTypes.string.isRequired,
  ctabtn1: PropTypes.object.isRequired,
  ctabtn2: PropTypes.object.isRequired,
  codeblock: PropTypes.string.isRequired,
  codeColor: PropTypes.string.isRequired,
};
export default CodeBlocks;
