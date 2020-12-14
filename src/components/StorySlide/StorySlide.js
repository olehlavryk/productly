import React from "react";
import T from "prop-types";
import "./StorySlide.css";

const StorySlide = ({ story }) => {
  const { preview, url, author, date, title } = story;

  return (
    <div className="story__slide">
      <a href={url} className="story__preview">
        <img src={preview} alt={title} className="img__responsive" />
      </a>
      <div className="story__meta_box">
        <span className="story__author">
          By <strong>{author}</strong>
        </span>
        <span className="story__date">{date}</span>
      </div>
      <h3 className="story__title">
        <a href={url}>{title}</a>
      </h3>
    </div>
  );
};

StorySlide.propTypes = {
  story: T.shape({
    id: T.string,
    url: T.string,
    preview: T.string,
    author: T.string,
    date: T.string,
    title: T.string,
  }).isRequired,
};

export default StorySlide;
