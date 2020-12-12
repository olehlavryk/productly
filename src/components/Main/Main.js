import React from "react";
import WelcomeSection from "src/components/Sections/WelcomeSection/WelcomeSection";
import ServicesSection from "src/components/Sections/ServicesSection/ServicesSection";
import PreferencesSection from "src/components/Sections/PreferencesSection/PreferencesSection";
import TeamSection from "src/components/Sections/TeamSection/TeamSection";

const Main = () => {
  return (
    <main className="content">
      <WelcomeSection />
      <ServicesSection />
      <PreferencesSection />
      <TeamSection />
    </main>
  );
};

export default Main;
