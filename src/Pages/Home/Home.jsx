import AppBar from "../../Components/AppBar/AppBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import LeadersSection from "../../Components/LeadersSection/LeadersSection";
import ResultsSection from "../../Components/ResultsSection/ResultsSection";
import DiscoverSection from "../../Components/DiscoverSection/DiscoverSection";
import TutorialsVsCarousel from "../../Components/TutorialsCarousel/VS/TutorialsVsCarousel";
import TutorialsOtherCarousel from "../../Components/TutorialsCarousel/Others/TutorialsOtherCarousel";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroSection />
      <DiscoverSection />
      <ResultsSection />
      <LeadersSection />
      <TutorialsVsCarousel />
      <TutorialsOtherCarousel />
    </div>
  );
}
