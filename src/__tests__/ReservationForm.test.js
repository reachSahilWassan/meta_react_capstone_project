import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ReservationForm from "../components/ReserveTableComponents/ReservationForm";
import { submitAPI } from "../Helper";


const mockSubmitAPI = jest.fn();
jest.mock("../Helper", () => ({
  submitAPI: (data) => mockSubmitAPI(data),
}));


const availableTimes = ["18:00", "19:00", "20:00"];
const mockDispatch = jest.fn();

const renderComponent = () =>
  render(
    <BrowserRouter>
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    </BrowserRouter>
  );

describe("ReservationForm", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows error messages for invalid inputs", async () => {
    renderComponent();

    // Click the submit button without filling in any fields
    const submitButton = screen.getByRole("button", { name: /reserve table/i });
    fireEvent.click(submitButton);

    // Verify that error messages are displayed
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/select at least 1 diner/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });

  test("submits the form successfully with valid inputs", async () => {
    renderComponent();

    // Fill in valid inputs
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const dinersInput = screen.getByLabelText(/number of diners/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    fireEvent.change(dinersInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /reserve table/i });
    fireEvent.click(submitButton);

    // Ensure no errors are displayed
    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();

    // Verify the API call is made
    expect(mockSubmitAPI).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2024-12-25",
        time: "19:00",
        diners: "2",
        occasion: "Birthday",
      })
    );
  });

  test("does not call the API if there are validation errors", async () => {
    renderComponent();

    // Fill in only one field
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /reserve table/i });
    fireEvent.click(submitButton);

    // Verify that error messages for missing fields are displayed
    expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/select at least 1 diner/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();

    // Verify the API call is not made
    expect(mockSubmitAPI).not.toHaveBeenCalled();
  });
});