import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@/components/Hero/Hero";

describe("Should render logo and nav elements", () => {
  it("should render all nav elements", () => {
    render(<Hero />);

    const sliderHeading = screen.getByTestId("slider-heading");

    expect(sliderHeading).toBeInTheDocument();
    expect(sliderHeading).toHaveTextContent(/Boys Development Project/);
  });
});
