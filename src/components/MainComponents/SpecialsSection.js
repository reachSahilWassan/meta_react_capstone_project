
import { Link } from "react-router-dom";
import DishCard from "./DishCard";

const SpecialsSection = () => {
  return (
    <section className="grid gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl text-gray-600 font-bold">
          Specials
        </h2>

        <Link className="bg-[#495E57] hover:bg-gray-950 text-white px-8 py-4 rounded-lg mt-4 inline-block">
          Online Menu
        </Link>
      </div>

      <div className="wrapper grid gap-5 lg:gap-16 grid-cols-1 md:grid-cols-3">
        <DishCard dishName="Greek Salad" price="$12.89"></DishCard>
        <DishCard dishName="Brushetta" price="$5.99"></DishCard>
        <DishCard dishName="Lemon Dessert" price="$10.19"></DishCard>
      </div>
    </section>
  );
}

export default SpecialsSection