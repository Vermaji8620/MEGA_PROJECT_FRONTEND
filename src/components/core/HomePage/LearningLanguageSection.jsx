import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.svg";
import Compare_with_others from "../../../assets/Images/Compare_with_others.png";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";

const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px] mb-32">
      <div className="flex flex-col gap-5">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for <HighlightText text={"learning any language"} />
        </div>
        <div className="text-center text-black mx-auto text-base w-[70%] ">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex items-center justify-center mt-5">
          <img src={knowYourProgress} className="-mr-32" alt="" />
          <img src={Compare_with_others} className="-mr-32" alt="" />
          <img src={Plan_your_lessons} className="-ml-16" alt="" />
        </div>
        <div className="flex justify-center">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
