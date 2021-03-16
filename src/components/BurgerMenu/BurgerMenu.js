import React from "react";
import { slide as Menu } from "react-burger-menu";
import { mainMenuList } from "src/config/config";
import "./BurgerMenu.css";

const BurgerMenu = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      {mainMenuList.map((item) => (
        <a href="/#">{item}</a>
      ))}
    </Menu>
  );
};

export default BurgerMenu;
