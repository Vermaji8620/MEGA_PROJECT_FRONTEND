import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import HighlightText from "../components/cors/HomePage/HighlightText";
import CTAButton from "../components/cors/HomePage/Button";
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/cors/HomePage/CodeBlocks";
import TimelineSection from "../components/cors/HomePage/TimelineSection";
import LearningLanguageSection from "../components/cors/HomePage/LearningLanguageSection";
import InstructorSection from "../components/cors/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/cors/HomePage/ExploreMore";

const Home = () => {
  return (
    <div className="border">
      {/* section 1 */}
      <div className="border mx-auto w-11/12 flex flex-col items-center relative text-gray-400 justify-between">
        <Link to={"/signup"}>
          <div className=" mt-16 p-1 border mx-auto rounded-full font-bold bg-stone-600 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex  gap-10 justify-center items-center rounded-full px-10 py-[5px] hover:bg-black">
              <p>Become an instructor</p>
              <BsFillArrowRightCircleFill />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-10">
          Empower your future with <HighlightText text={"coding skills"} />
        </div>

        <div className="border w-4/5 mx-auto text-center font-bold mt-10 text-gray-500">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a demo
          </CTAButton>
        </div>
        <div className="my-14">
          <video src={banner} type="video/mp4" autoPlay loop muted></video>
        </div>
        {/* code section 1 */}
        <div className="w-[95%]">
          <CodeBlocks
            position={"lg: flex-row "}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"coding potential"} /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`
              <!DOCTYPE html>
              <html>
              <head>
              <title>Example</title>
              <linkrel="stylesheet"href="styles.css">
              </head>
              <body>
              <h1><a href="/">Header</a>
              </h1>
              <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
              </nav>`}
            codeColor={"text-yellow-200"}
          />
          <CodeBlocks
            position={"lg: flex-row flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"coding potential"} /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`
              <!DOCTYPE html>
              <html>
              <head>
              <title>Example</title>
              <linkrel="stylesheet"href="styles.css">
              </head>
              <body>
              <h1><a href="/">Header</a>
              </h1>
              <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
              </nav>`}
            codeColor={"text-yellow-200"}
          />
        </div>

        <ExploreMore />
        
      </div>

      {/* section 2 */}
      <div className="bg-white w-full text-black ">
        <div className="homepage_bg h-[310px] ">
          <div className="w-11/12 max-w-maxContent justify-center flex items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-5 items-center">
                  Explore Full Catalogue
                  <BsFillArrowRightCircleFill />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 flex flex-col items-center mx-auto max-w-maxContent">
          <div className="flex gap-5 justify-center">
            <div className="text-4xl font-semibold w-[45%]">
              Get the Skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />{" "}
            </div>

            <div className="flex flex-col items-start gap-10 w-[40%]">
              <div className="text-16px">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex items-center justify-between text-white gap-8 flex-col">
        <InstructorSection />
        <h2 className="text-center font-semibold text-4xl ">
          Review from Other Learners
        </h2>
      </div>

      {/* footer */}
      <div className="border mx-auto w-11/12 flex flex-col items-center relative text-gray-400 justify-between">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
