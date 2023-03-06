import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer/Footer";

describe("Footer component", () => {
  test("renders footer content", () => {
    render(<Footer />);
    const textElements = screen.getAllByText(
      /Boys' Development Project|0208 693 7684|270 Lordship Lane|Dulwich, London SE22 8LY/
    );
    expect(textElements).toHaveLength(4);
    const socialIcons = screen.getAllByRole("img");
    expect(socialIcons).toHaveLength(4);
  });
});
