import Companies from "@/components/Companies";
import Everything from "@/components/Everything";
import HeroBanner from "@/components/HeroBanner";
import JoinFivel from "@/components/JoinFivel";
import PopularServices from "@/components/PopularServices";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <JoinFivel />
    </div>
  );
}
