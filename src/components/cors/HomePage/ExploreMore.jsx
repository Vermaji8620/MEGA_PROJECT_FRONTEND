import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore.js";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard.jsx";

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
    <div className="flex flex-col w-4/5 border gap-4">
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={" power of Code"} />
      </div>

      <p className="text-center font-semibold">
        Learn to build anything you can imagine
      </p>

      <div className="flex gap-2 p-2 m-4 rounded-md bg-gray-700 justify-center">
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

      <div className="flex gap-12 justify-between w-full border absolute bottom-16">
        {courses.map((element, index) => {
          return (
            <div key={index} className="border">
              <CourseCard cardData={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
