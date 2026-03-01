import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
const About = () => {
  return (
    <div className="page about-page">
      <HeroSection />
      <ValueSection />
      <TeamSection />
      <hr className="divide" />
      <ContactSection />
    </div>
  );
};

export default About;
