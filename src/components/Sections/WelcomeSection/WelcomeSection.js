import React from "react";
import Button from "src/components/Button/Button";
import "./WelcomeSection.css";
import welcomeImg from "./images/welcome_bg.png";

const WelcomeSection = () => {
  return (
    <section className="welcome__section">
      <div className="container">
        <div className="left__side">
          <h1>The Design Thinking superpowers</h1>
          <p>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="btn__group">
            <Button size="m" className="left__side_action_btn">
              Get started
            </Button>
            <a href="/#" className="left__side_video_link">
              Watch the video
            </a>
          </div>
        </div>
        <div className="right__side">
          <img
            src={welcomeImg}
            className="right__side__preview img__responsive"
            alt="Welcome section"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
