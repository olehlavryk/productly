import React from "react";
import Button from "src/components/Button/Button";
import "./TeamSection.css";

const TeamSeaction = () => {
  return (
    <section className="team__section">
      <h2>Need a super hero?</h2>
      <p>
        Do you require some help for your project: Conception workshop,
        prototyping, marketing strategy, landing page, Ux/UI?
      </p>
      <Button>Contact our expert</Button>
    </section>
  );
};
