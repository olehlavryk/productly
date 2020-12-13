import React from "react";
import Slider from "react-slick";
import "./StoriesSection.css";
import "./slick.css";
import "./slick-theme.css";
import StorySlide from "src/components/StorySlide/StorySlide";
import { stories } from "src/config/config";

const StoriesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: 34,
  };

  return (
    <section className="stories__section">
      <div className="container">
        <div className="stories__title_block">
          <h2 className="stories__title">Marketing Strategies</h2>
          <p className="stories__description">
            Join 40,000+ other marketers and get proven strategies on email
            marketing
          </p>
        </div>
        <Slider {...settings}>
          {stories.map((story) => (
            <StorySlide key={story.id} story={story} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StoriesSection;
