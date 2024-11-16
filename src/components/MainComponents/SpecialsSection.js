
import { Link } from "react-router-dom";
import DishCard from "./DishCard";
import image6 from "../../static/images/image6.jpg"
import image7 from "../../static/images/image7.jpg"
import image9 from "../../static/images/image9.jpg"

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
        <DishCard
          dishName="Greek Fish"
          price="$12.89"
          image={image6}
        ></DishCard>
        <DishCard dishName="Garlic Bread" price="$5.99" image={image7}></DishCard>
        <DishCard
          dishName="Lemon Pasta"
          price="$10.19"
          image={image9}
        ></DishCard>
      </div>
    </section>
  );
}

export default SpecialsSection