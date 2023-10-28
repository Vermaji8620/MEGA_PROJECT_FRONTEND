import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo3,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo4,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div>
        <div className="flex gap-15 mt-[50px] items-center">
          <div className="w-[45%] flex  flex-col gap-5">
            {timeline.map((element, index) => {
              return (
                <div key={index} className="flex  gap-6">
                  <div className="w-[50px] h-[50px] bg-white flex items-center">
                    <img src={element.logo} alt="" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <h2>{element.description} </h2>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="shadow-blue-200 w-[55%] relative">
            <img
              src={TimelineImage}
              className="rounded-md w-full shadow-white object-cover h-fit"
              alt=""
            />

            <div className="absolute w-[80%] mx-auto text-white uppercase flex h-fit bg-green-500 left-[50%] translate-x-[-50%] translate-y-[-80%]">
              <div className="flex gap-5 items-center border-r border-green-400 px-7">
                <p className="text-4xl font-bold ">10</p>
                <p className="text-green-300 text-4xl">Years of experience</p>
              </div>

              <div className="flex gap-5 items-center border-r border-green-400 px-7">
                <p className="text-4xl font-bold ">250</p>
                <p className="text-green-300 text-4xl">Type of Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
