import AppBar from "../../Components/AppBar/AppBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import LeadersSection from "../../Components/LeadersSection/LeadersSection";
import ResultsSection from "../../Components/ResultsSection/ResultsSection";
import DiscoverSection from "../../Components/DiscoverSection/DiscoverSection";
import TutorialsVsCarousel from "../../Components/TutorialsCarousel/VS/TutorialsVsCarousel";
import JoinCommunitySection from "../../Components/JoinCommunitySection/JoinCommunitySection";
import TutorialsOtherCarousel from "../../Components/TutorialsCarousel/Others/TutorialsOtherCarousel";
import HighlightRewardsSection from "../../Components/HighlightRewardsSection/HighlightRewardsSection";
import "./Home.css";
import SeasonNotificationBar from "../../Components/SeasonNotificationBar/SeasonNotificationBar";
import SeasonFloatButton from "../../Components/SeasonFloatButton/SeasonFloatButton";

export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroSection />
      <DiscoverSection />
      <ResultsSection />
      <LeadersSection />
      <HighlightRewardsSection />
      <TutorialsVsCarousel />
      <TutorialsOtherCarousel />
      <JoinCommunitySection />
      <SeasonNotificationBar />
      <SeasonFloatButton />
    </div>
  );
}
