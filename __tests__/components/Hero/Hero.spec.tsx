import "@testing-library/jest-dom";
import { Hero } from "@/components/Hero/Hero";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Hero", () => {
  it("renders slider heading", () => {
    render(<Hero />);
    const headingElement = screen.getByTestId("slider-heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders slides", () => {
    render(<Hero />);
    const slideElements = screen.getAllByRole("img");
    expect(slideElements.length).toBe(3);
  });

  it("clicking on next button updates active slide", () => {
    render(<Hero />);
    const nextButton = screen.getByLabelText("Next slide");
    fireEvent.click(nextButton);
    const slideElements = screen.getAllByRole("img");
    expect(slideElements[1]).toHaveAttribute("alt", "Slide 1");
  });

  it("clicking on previous button updates active slide", () => {
    render(<Hero />);
    const prevButton = screen.getByLabelText("Previous slide");
    fireEvent.click(prevButton);
    const slideElements = screen.getAllByRole("img");
    expect(slideElements[2]).toHaveAttribute("alt", "Slide 2");
  });

  it("clicking on slide indicator updates active slide", () => {
    render(<Hero />);
    const slideIndicator = screen.getAllByRole("button")[1];
    fireEvent.click(slideIndicator);
    const slideElements = screen.getAllByRole("img");
    expect(slideElements[1]).toHaveAttribute("alt", "Slide 1");
  });
});
