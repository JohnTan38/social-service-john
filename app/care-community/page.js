import CareCommunityProfile from "../components/homepage/care-community-profile";
import PageNavigation from "../components/navigation/page-navigation";

export const metadata = {
  title: "John Tan - Community Care Executive",
  description:
    "Social service role customization for youth empowerment and community care executive responsibilities.",
};

export default function CareCommunityPage() {
  return (
    <div suppressHydrationWarning>
      <CareCommunityProfile />
      <PageNavigation
        previous={{ href: "/", label: "Home" }}
        next={{ href: "/experience-skills", label: "Experience & Skills" }}
      />
    </div>
  );
}
