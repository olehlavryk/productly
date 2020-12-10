import React from "react";
import "./Header.css";
import { Icon } from "src/components/Icons/Icon";
import Button from "src/components/Button/Button";

const Header = () => {
  const mainMenuList = ["Product", "Customers", "Pricing", "Resources"];

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="header__logo">
          <a href="/#">
            <Icon name="logo" />
          </a>
        </div>

        {/* Header Navigation */}
        <nav className="header__nav">
          <ul className="header__nav__list">
            {mainMenuList.map((item) => (
              <li key={item}>
                <a href="/#">{item}</a>
              </li>
            ))}
          </ul>

          <ul className="header__nav__buttons">
            <li>
              <Button mode="outline">Sign in</Button>
            </li>
            <li>
              <Button>Sign up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
