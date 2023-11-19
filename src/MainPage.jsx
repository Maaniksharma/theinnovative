import Jumbotron from "./components/Jumbotron.jsx";
import AboutUs from "./components/AboutUs.jsx";
import BlueBg from "./components/BlueBg.jsx";
import StyleCircle from "./components/subComponents/StyleCircle.jsx";
import InstCard from "./components/InstCard.jsx";
import Courses from "./components/Courses.jsx";
import SuccessStories from "./components/SucessStories.jsx";

const data = [
  "100% Practical Course",
  "Well Experienced Teacher",
  "100% Success Rate",
  "100% Job Assistance",
];
const Instructers = [
  {
    name: "Mr Manu Sharma",
    image: "InstProfile1.webp",
    description:
      "Introducing Manu Sharma, our inspiring English instructor. With a remarkable 12 years of teaching experience and the powerful combination of a Master's in English and an MBA in marketing, Manu brings a easy, unique approach to English learning. Join us at The Innovative Institute to experience Manu's dynamic teaching style. Learn from the best to become the best in English.",
  },
];

const MainPage = () => {
  return (
    <div className="">
      <Jumbotron />
      <div className="md:flex md:pr-8 items-center gap-8 bg-sky-100 pb-8 md:pb-0">
        <AboutUs />
        <img
          src="/TheInnovativeGroupPhoto.webp"
          className="rounded aboutimage shadow-lg shadow-gray-400"
        />
      </div>
      <BlueBg title={"Why Only Choose Us"}>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center text-center">
              <StyleCircle content={item} />
            </div>
          ))}
        </div>
      </BlueBg>
      <div className="mb-12">
        <div className="text-4xl text-center font-bold text-gray-800 mt-10 md:text-5xl">
          Our Instructors
        </div>
        {Instructers.map((item, index) => (
          <div key={index} className="flex justify-center mt-10">
            <InstCard
              name={item.name}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <BlueBg title={"Courses we offer"} className="mt-4">
        <Courses />
      </BlueBg>
      <SuccessStories />
    </div>
  );
};

export default MainPage;
