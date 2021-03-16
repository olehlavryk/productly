import React from "react";
import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import BurgerMenu from "src/components/BurgerMenu/BurgerMenu";
import "./css/App.css";

const App = () => {
  return (
    <div id="outer-container">
      <BurgerMenu right outerContainerId={"outer-container"} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
