import React from "react";
import "./PreferencesSection.css";
import preference1 from "./images/preference1.png";
import preference2 from "./images/preference2.png";
import preference3 from "./images/preference3.png";

const PreferencesSection = () => {
  return (
    <section className="preferences__section">
      <div className="container">
        <div className="top__section">
          <div className="top__section__left">
            <span className="preferences__section_before_title">
              Effortless Validation for
            </span>
            <h2 className="preferences__section__title">
              Design Professionals
            </h2>
            <p className="preferences__section__description">
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.{" "}
            </p>
            <ul className="preferences__list">
              <li>
                <strong>Accessory makers</strong>
                <p>
                  While most people enjoy casino gambling, sports betting,
                  lottery and bingo playing for the fun
                </p>
              </li>
              <li>
                <strong>Alterationists</strong>
                <p>
                  If you are looking for a new way to promote your business that
                  won’t cost you more money,
                </p>
              </li>
              <li>
                <strong>Custom Design designers</strong>
                <p>
                  If you are looking for a new way to promote your business that
                  won’t cost you more money,
                </p>
              </li>
            </ul>
          </div>
          <div className="top__section__right">
            <img src={preference1} alt="Design Professionals" />
          </div>
        </div>
        <div className="middle__section"></div>
        <div className="bottom__section"></div>
      </div>
    </section>
  );
};

export default PreferencesSection;
