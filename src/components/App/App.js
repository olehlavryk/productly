import React from "react";
import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import "./css/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/* <main>
        <div className="container">Content</div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer> */}
    </>
  );
};

export default App;
