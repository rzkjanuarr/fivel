import Companies from "@/components/Landing/Companies";
import Everything from "@/components/Landing/Everything";
import FivelBusiness from "@/components/Landing/FivelBusiness";
import HeroBanner from "@/components/Landing/HeroBanner";
import JoinFivel from "@/components/Landing/JoinFivel";
import PopularServices from "@/components/Landing/PopularServices";
import Services from "@/components/Landing/Services";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FivelBusiness />
      <JoinFivel />
    </div>
  );
}
