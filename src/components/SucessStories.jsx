import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SuccessStory from "./subComponents/SuccessStory";

const STORIES = [
  {
    name: "Riya's Journey: Beyond Borders",
    story:
      "Riya, an Indian dreamer, sought a world beyond borders. At The Innovative, she discovered more than language; it was a pathway to her aspirations. With engaging lessons, Riya's confidence soared. Empowered by The Innovative, she conquered the IELTS, unlocking doors to a global future. Today, Riya thrives, embracing opportunities abroad. Her journey echoes at The Innovative, inspiring dreams to take flight.",
  },
  {
    name: "Aryan's Dream: Connecting Worlds",
    story:
      "Aryan, from India, wanted to explore the world. At The Innovative, he learned more than language. With fun classes and kind teachers, Aryan felt more confident. The Innovative helped him pass the IELTS test, allowing him to study abroad. Now, Aryan's living his dream overseas. His story inspires others at The Innovative to dream big too.",
  },
  {
    name: "Sneha's Success: From Interview Nerves to Victory",
    story:
      "Sneha had big dreams for her career but needed help with interviews. At The Innovative, she got more than just lessons; it was her ticket to success. With practice and friendly advice, Sneha grew more confident. Thanks to The Innovative, she aced her dream job interview. Today, Sneha’s enjoying her job, showing others at The Innovative that dreams do come true.",
  },
];

const SuccessStories = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {STORIES.map((story) => {
          return (
            <div key={story.name}>
              <SuccessStory name={story.name} story={story.story} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SuccessStories;
