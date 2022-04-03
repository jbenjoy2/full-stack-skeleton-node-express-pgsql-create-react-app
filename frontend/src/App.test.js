import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct starting test", () => {
  render(<App />);
  const mainText = screen.getByText(/start editing/i);
  expect(mainText).toBeInTheDocument();
});
