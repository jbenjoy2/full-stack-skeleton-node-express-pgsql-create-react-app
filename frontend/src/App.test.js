import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders proper starting text", () => {
  render(<App />);
  const mainText = screen.getByText(/start editing/i);
  console.log(mainText);
});
