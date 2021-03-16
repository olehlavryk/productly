import React from "react";
import Button from "src/components/Button/Button";
import { Icon } from "src/components/Icons/Icon";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services__section">
      <div className="container">
        <h2 className="services__title">
          We design tools to unveil your superpowers
        </h2>
        <ul className="services__list">
          <li>
            <Icon name="testService" />
            <h3 className="services__list_title">First click tests</h3>
            <p>While most people enjoy casino gambling,</p>
          </li>
          <li>
            <Icon name="designService" />
            <h3 className="services__list_title">Design surveys</h3>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </li>
          <li>
            <Icon name="preferenceService" />
            <h3 className="services__list_title">Preference tests</h3>
            <p>The Myspace page defines the individual.</p>
          </li>
          <li>
            <Icon name="fastTestService" />
            <h3 className="services__list_title">Five second tests</h3>
            <p>Personal choices and the overall personality of the person.</p>
          </li>
        </ul>
        <Button className="services__action_btn">Sign up now</Button>
      </div>
    </section>
  );
};

export default ServicesSection;
