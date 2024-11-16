import { render, screen } from '@testing-library/react';
import App from './App';
import RestaurantInfo from './components/ReserveTableComponents/RestaurantInfo';

test("Renders the Booking Page heading", () => {
  render(<RestaurantInfo />);
  const headingElement = screen.getByText(/Little Lemon Chicago/i);
  expect(headingElement).toBeInTheDocument();
});
