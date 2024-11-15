import HeroSection from "./MainComponents/HeroSection";
import SpecialsSection from "./MainComponents/SpecialsSection";
import TestimonialsSection from "./MainComponents/TestimonialsSection";

const Main = () => {
  return (
    <main className="mx-8 lg:mx-16 grid gap-8">
      <HeroSection></HeroSection>
      <SpecialsSection></SpecialsSection>
      <TestimonialsSection></TestimonialsSection>
    </main>
  );
};

export default Main;
