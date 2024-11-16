import { render, screen } from "@testing-library/react";
import {
  initializeTimes,
  updateTimes,
} from "../components/MainComponents/Main";

import { fetchAPI } from "../Helper";

jest.mock("../Helper");

describe("initializeTimes", () => {
  it("returns a non-empty array of available booking times from fetchAPI", () => {
    // Mock the fetchAPI function
    fetchAPI.mockReturnValue(["12:00", "1:00", "2:00"]);

    // Call initializeTimes
    const result = initializeTimes();

    // Assertions
    expect(fetchAPI).toHaveBeenCalled(); // Ensure fetchAPI is called
    expect(result).toEqual(["12:00", "1:00", "2:00"]); // Validate the output
  });
});


describe("updateTimes", () => {
  it("returns updated times from fetchAPI based on the selected date", () => {
    // Mock the fetchAPI function
    const mockDate = new Date();
    fetchAPI.mockReturnValue(["6:00", "7:00", "8:00"]);

    // Create a mock state
    const initialState = ["12:00", "1:00", "2:00"];

    // Dispatch with a payload containing the date
    const action = { type: "UPDATE_TIMES", payload: { date: mockDate } };

    // Call updateTimes
    const result = updateTimes(initialState, action);

    // Assertions
    expect(fetchAPI).toHaveBeenCalledWith(mockDate); // Ensure fetchAPI is called with correct date
    expect(result).toEqual(["6:00", "7:00", "8:00"]); // Validate the output
  });
});
