
import { Routes, Route } from "react-router-dom";
import ReserveTable from "../ReserveTableComponents/ReserveTable";
import HomePage from "./HomePage";
import ConfirmedBooking from "../ConfirmedBooking";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "../../Helper";

export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
}

// Reducer to handle available times
export const updateTimes = (state, action) => {
  const date = new Date(action.payload.date)
  switch (action.type) {
    case "UPDATE_TIMES":
      // Logic to update times based on action.payload.date
      // For now, return the same times regardless of date
      return fetchAPI(date);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );


  return (
    <main className="">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/reserve-a-table"
          element={
            <ReserveTable availableTimes={availableTimes} dispatch={dispatch} />
          }
        ></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
