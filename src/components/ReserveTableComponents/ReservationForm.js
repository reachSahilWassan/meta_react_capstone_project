import { useState } from "react";
import { submitAPI } from "../../Helper";
import { useNavigate } from "react-router-dom";

const ReservationForm = ({availableTimes, dispatch}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [diners, setDiners] = useState("0");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();

    const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);
      dispatch({ type: "UPDATE_TIMES", payload: { date: selectedDate } });
    };

    const timeOptions = availableTimes.map((time, index)=>{
        return (<option key={index}>{time}</option>);
    })

    const handleTableReservation = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("date", date);
        formData.append("time", time);
        formData.append("diners", diners);
        formData.append("occasion", occasion);
        const response = submitAPI(formData);

        if(response) navigate("/booking-confirmed", { state: formData });
    }

  return (
    <section className="bg-[#495E57] py-36">
      <div className="grid gap-4 px-8 py-4 max-w-screen-lg mx-auto">
        <h3 className="text-xl md:text-3xl text-white text-center">
          Find a table for any occasion
        </h3>
        <form
          action=""
          id="reservation-form"
          className="grid gap-4"
          onSubmit={handleTableReservation}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="max-w-sm">
              <label
                htmlFor="date"
                className="block text-sm font-medium mb-2 text-white"
              >
                Date
              </label>
              <input
                onChange={handleDateChange}
                autoComplete="false"
                type="date"
                id="date"
                value={date}
                className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>

            <div className="max-w-sm">
              <label
                htmlFor="res-time"
                className="block text-sm font-medium mb-2 text-white"
              >
                Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                id="res-time"
                autoComplete="false"
                className="py-[0.85rem] px-4 bg-white block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                <option value="">Time</option>
                {timeOptions}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="max-w-sm">
              <label
                htmlFor="diners"
                className="block text-sm font-medium mb-2 text-white"
              >
                Number of Diners
              </label>
              <input
                value={diners}
                onChange={(e) => setDiners(e.target.value)}
                autoComplete="false"
                type="number"
                id="diners"
                className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>

            <div className="max-w-sm">
              <label
                htmlFor="occasion"
                className="block text-sm font-medium mb-2 text-white"
              >
                Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                id="occasion"
                autoComplete="false"
                className="py-[0.85rem] px-4 bg-white block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                <option value="">Occasion</option>
                <option>Birthday</option>
                <option>Party</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mx-auto py-2 px-8 w-56 text-center bg-amber-300 hover:bg-amber-400 rounded-xl"
          >
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;