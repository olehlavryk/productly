import React from "react";
import WelcomeSection from "src/components/Sections/WelcomeSection/WelcomeSection";
import ServicesSection from "src/components/Sections/ServicesSection/ServicesSection";

const Main = () => {
  return (
    <main className="content">
      <WelcomeSection />
      <ServicesSection />
    </main>
  );
};

export default Main;
