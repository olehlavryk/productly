import React from "react";
import Button from "src/components/Button/Button";
import "./TeamSection.css";
import avatar1 from "./images/avator1.png";
import avatar2 from "./images/avator2.png";
import avatar3 from "./images/avator3.png";
import avatar4 from "./images/avator4.png";
import avatar5 from "./images/avator5.png";

const TeamSection = () => {
  return (
    <section className="team__section">
      <div className="container">
        <div className="team__section__content">
          <h2 className="content__title">Need a super hero?</h2>
          <p className="content__description">
            Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
          <Button className="content__action__btn">Contact our expert</Button>
        </div>
        <div className="team__members__list">
          <div className="member1 member">
            <div className="member__content">
              <img src={avatar1} alt="Member 1" />
              <span className="point__cloud point__cloud__right">
                I can take care of your pitch
              </span>
            </div>
          </div>
          <div className="member2 member">
            <div className="member__content">
              <span className="point__cloud point__cloud__left">
                I can design you website
              </span>
              <img src={avatar2} alt="Member 2" />
            </div>
          </div>
          <div className="member3 member">
            <div className="member__content">
              <span className="point__cloud point__cloud__left">
                I will define the profile of your users
              </span>
              <img src={avatar3} alt="Member 3" />
            </div>
          </div>
          <div className="member4 member">
            <div className="member__content">
              <span className="point__cloud point__cloud__left">
                I can prototype your app
              </span>
              <img src={avatar4} alt="Member 4" />
            </div>
          </div>
          <div className="member5 member">
            <div className="member__content">
              <span className="point__cloud point__cloud__left">
                I can help marketing strategy
              </span>
              <img src={avatar5} alt="Member 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
