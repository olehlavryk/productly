import React from "react";
import WelcomeSection from "src/components/Sections/WelcomeSection/WelcomeSection";
import ServicesSection from "src/components/Sections/ServicesSection/ServicesSection";
import PreferencesSection from "src/components/Sections/PreferencesSection/PreferencesSection";

const Main = () => {
  return (
    <main className="content">
      <WelcomeSection />
      <ServicesSection />
      <PreferencesSection />
    </main>
  );
};

export default Main;
