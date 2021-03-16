import React from "react";
import preference1 from "./images/preference1.png";
import preference2 from "./images/preference2.png";
import preference3 from "./images/preference3.png";
import { Icon } from "src/components/Icons/Icon";
import "./PreferencesSection.css";

const PreferencesSection = () => {
  return (
    <section className="preferences__section">
      <div className="container">
        <div className="top__section section">
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
              personality of the person.
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
            <img
              src={preference1}
              alt="Design Professionals"
              className="img__responsive"
            />
          </div>
        </div>
        <div className="middle__section section">
          <div className="middle__section_left">
            <img
              src={preference2}
              alt="Product Managers section"
              className="img__responsive"
            />
          </div>
          <div className="middle__section__right">
            <span className="preferences__section_before_title">
              Easier decision making for
            </span>
            <h2 className="preferences__section__title">Product Managers</h2>
            <p className="preferences__section__description">
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </p>
            <ul className="preferences__bullets__list">
              <li>
                <Icon name="bullet" className="preferences__bullet" />
                <p>Never worry about overpaying for your energy again.</p>
              </li>
              <li>
                <Icon name="bullet" className="preferences__bullet" />
                <p>
                  We will only switch you to energy companies that we trust and
                  will treat you right
                </p>
              </li>
              <li>
                <Icon name="bullet" className="preferences__bullet" />
                <p>
                  We track the markets daily and know where the savings are.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom__section section">
          <div className="bottom__section__left">
            <span className="preferences__section_before_title">
              Optimisation for
            </span>
            <h2 className="preferences__section__title">Marketers</h2>
            <p className="preferences__section__description">
              Few would argue that, despite the advancements of feminism over
              the past three decades, women still face a double standard when it
              comes to their behavior.
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
          <div className="bottom__section__right">
            <img
              src={preference3}
              alt="Accessory makers"
              className="img__responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferencesSection;
