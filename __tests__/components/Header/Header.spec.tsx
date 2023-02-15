import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "@/components/Header/Header";

describe("Should render logo and nav elements", () => {
  it("should render all nav elements", () => {
    render(<Header />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("Nav")).toBeInTheDocument();
  });
});
