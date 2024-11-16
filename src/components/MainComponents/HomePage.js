import HeroSection from "./HeroSection";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSection";

const HomePage = () => {
  return (
    <div className="mx-8 mb-8 lg:mx-16 grid gap-20">
      <HeroSection></HeroSection>
      <div className="border"></div>
      <SpecialsSection></SpecialsSection>
      <div className="border"></div>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default HomePage;
