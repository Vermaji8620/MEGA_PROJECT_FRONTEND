import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore.js";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={" power of Code"} />
      </div>

      <p className="text-center font-semibold">
        Learn to build anything you can imagine
      </p>

      <div className="flex gap-2 p-2 m-4 rounded-md bg-gray-700">
        {tabsName.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => setMyCards(element)}
              className={`cursor-pointer p-2 rounded-md ${
                element === currentTab
                  ? "bg-black text-white font-bold"
                  : "hover:bg-black text-white transition duration-300"
              }`}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="lg:h-[150px]"></div>

      {/* <div className="flex gap-10 justify-between w-full absolute">
        {courses.map((element, index) => {
          return (
            <div key={index}>
              <CourseCard
                cardData={element}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ExploreMore;
