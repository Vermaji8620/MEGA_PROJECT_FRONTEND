import { BsArrowRight } from "react-icons/bs";
import Instructor from "../../../assets/Images/Instructor.png";
import CTAButton from "./Button";
import HighlightText from "./HighlightText";

const InstructorSection = () => {
  return (
    <div className="mt-16 w-4/5">
      <div className="flex gap-20 items-center">
        <div className="w-1/2">
          <img src={Instructor} alt="" />
        </div>

        <div className="w-1/2 flex flex-col gap-10 ">
          <div className="text-4xl font-semibold w-1/2">
            Become an <HighlightText text={"Instructor"} />
          </div>
          <p className=" font-medium w-4/5 text-gray-400 text-[16px]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="flex justify-start font-bold">
            <CTAButton active={true} linkto={"/signup"}>
              <div className=" flex items-center gap-4">
                Start Learning today
                <BsArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
