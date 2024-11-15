import TestimonialCard from "./TestimonialCard"

const TestimonialsSection = () => {
  return (
    <div className="wrapper grid gap-4">
      <h2 className="text-2xl md:text-4xl text-gray-600 font-bold text-center">Testimonials</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
    </div>
  );
}

export default TestimonialsSection