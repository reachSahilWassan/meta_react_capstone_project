import RestaurantInfo from "./RestaurantInfo";
import ReservationForm from "./ReservationForm";

const ReserveTable = (props) =>{
    return (
      <>
        <RestaurantInfo></RestaurantInfo>
        <ReservationForm availableTimes={props.availableTimes} dispatch={props.dispatch}></ReservationForm>
      </>
    );
}

export default ReserveTable;