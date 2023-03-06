import React from "react";
import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import { Header } from "@/components/Header/Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  const navLinks = [
    "Home",
    "About",
    "Programme",
    "Resources",
    "Blog",
    "Contact",
  ];

  it("renders the header logo", () => {
    const { getByText } = render(<Header />);
    const logo = getByText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("opens and closes the navigation menu when hamburger icon is clicked", () => {
    const { getByLabelText, getByText, queryByText } = render(<Header />);
    const hamburgerIcon = getByLabelText("Toggle Navigation");
    fireEvent.click(hamburgerIcon);
    navLinks.forEach((link) => {
      expect(getByText(link)).toBeInTheDocument();
    });
    fireEvent.click(hamburgerIcon);
    navLinks.forEach(async (link) => {
      await waitFor(() => {
        expect(queryByText(link)).not.toBeInTheDocument();
      });
    });
  });

  it("renders all navigation links", () => {
    const { getByText } = render(<Header />);
    navLinks.forEach((link) => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });
});
