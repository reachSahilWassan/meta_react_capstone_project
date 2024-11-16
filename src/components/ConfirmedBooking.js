import RestaurantButtons from "./ReserveTableComponents/RestaurantButtons";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = ()=>{
    const location = useLocation();
    const formData = Object.fromEntries(location.state.entries());
    console.log(formData)
    return (
      <section className="mx-8 max-w-full lg:max-w-screen-lg md:mx-auto mb-8 grid gap-8">
        {formData ? (
          <>
            <h1 className="text-4xl md:text-6xl text-gray-600">
              Your booking has been confirmed.
            </h1>

            <div className="grid grid-cols-2 sm:flex gap-6 mt-4">
              <RestaurantButtons icon={<i className="fa-solid fa-compass"></i>}>
                Directions
              </RestaurantButtons>

              <RestaurantButtons icon={<i className="fa-solid fa-star"></i>}>
                Reviews
              </RestaurantButtons>
              <RestaurantButtons icon={<i className="fa-solid fa-phone"></i>}>
                Call
              </RestaurantButtons>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <p>Booking on: {formData.date} </p>
              <p>At: {formData.time}</p>
              <p>Diners: {formData.diners}</p>
              <p>Occasion: {formData.occasion}</p>
            </div>
          </>
        ) : (
          <p>No reservation details available.</p>
        )}
      </section>
    );
}

export default ConfirmedBooking;