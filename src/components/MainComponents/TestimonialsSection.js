import TestimonialCard from "./TestimonialCard"

const testimonialsArr = [
  "I absolutely love dining at Little Lemon Restaurant! The ambiance is cozy and inviting, and the staff always go above and beyond to make us feel welcome. Their lemon-infused dishes are a delightful twist on classic recipes, and every bite bursts with fresh, vibrant flavors. The dessert menu is heavenly, with the lemon tart being my absolute favorite. It's become my go-to spot for both casual lunches and special celebrations!",
  "Little Lemon Restaurant is a hidden gem! The food is consistently delicious, and the attention to detail in every dish is remarkable. The zesty lemon touch in their recipes makes the flavors pop, leaving you wanting more. The service is impeccable, and the staff are friendly and attentive. Whether it's a family dinner or a date night, this place never disappoints. Highly recommend the lemon-herb chicken—it's to die for!",
  "I can't say enough good things about Little Lemon Restaurant. From the cheerful décor to the outstanding food, everything is perfect. Their commitment to using fresh, quality ingredients shines through in every dish. The lemon ricotta pancakes are a must-try for brunch lovers! The staff always make us feel like part of the family, and the atmosphere is warm and inviting. It's a true culinary treasure in our town!",
];

const TestimonialsSection = () => {
    const testimonialCards = testimonialsArr.map((testimonial, index)=>{
        return <TestimonialCard testimonial={testimonial} key={index}></TestimonialCard>;
    });
    return (
        <div className="wrapper grid gap-4">
        <h2 className="text-2xl md:text-4xl text-gray-600 font-bold text-center">Testimonials</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialCards}
        </div>
        </div>
    );
}

export default TestimonialsSection