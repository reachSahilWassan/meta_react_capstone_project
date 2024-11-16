import RestaurantButtons from "./RestaurantButtons";
import image8 from "../../static/images/restaurant food.jpg"
import image9 from "../../static/images/restaurant_inside.jpg"
import image10 from "../../static/images/mario-and-adrian.jpg"

const RestaurantInfo = () => {
  return (
    <div className="wrapper grid gap-4 px-8 py-4">
      <header>
        <h1 className="text-4xl md:text-6xl text-gray-600">
          Little Lemon Chicago
        </h1>
        <p>Italian, Mexican, North Indian, Chinese, Desserts, Tea, Beverages</p>
        <p className="text-gray-500">
          935 W Webster Ave, Chicago, IL 60614-3626
        </p>
      </header>

      <div className="grid grid-cols-2 sm:flex gap-6 mt-4">
        <RestaurantButtons icon={<i className="fa-solid fa-compass"></i>}>
          Directions
        </RestaurantButtons>
        <RestaurantButtons icon={<i className="fa-solid fa-share"></i>}>
          Share
        </RestaurantButtons>
        <RestaurantButtons icon={<i className="fa-solid fa-star"></i>}>
          Reviews
        </RestaurantButtons>
        <RestaurantButtons icon={<i className="fa-solid fa-phone"></i>}>
          Call
        </RestaurantButtons>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-full md:grid-cols-3 gap-4">
        <img
          src={image8}
          alt=""
          className="h-48 md:h-72 rounded-lg w-full object-cover"
        />
        <img
          src={image9}
          alt=""
          className="h-48 md:h-72 rounded-lg  w-full object-cover"
        />
        <img
          src={image10}
          alt=""
          className="h-48 md:h-72 rounded-lg  w-full object-cover"
        />
      </div>
    </div>
  );
}

export default RestaurantInfo;