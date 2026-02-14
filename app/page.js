import AboutSection from "./components/homepage/about";
import CareCommunityProfile from "./components/homepage/care-community-profile";
import HeroSection from "./components/homepage/hero-section";
import PageNavigation from "./components/navigation/page-navigation";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <CareCommunityProfile />
      <PageNavigation
        next={{ href: "/care-community", label: "Community Care Executive" }}
      />
    </div>
  );
}
