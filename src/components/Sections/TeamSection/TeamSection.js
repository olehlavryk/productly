import React from "react";
import Button from "src/components/Button/Button";
import TeamMember from "src/components/TeamMember/TeamMember";
import "./TeamSection.css";
import { members } from "src/config/config";

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
          {members.map((member, index) => (
            <TeamMember
              key={member.id}
              member={member}
              className={`member${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
