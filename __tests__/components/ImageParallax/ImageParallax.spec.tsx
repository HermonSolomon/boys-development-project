import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageParallax from "@/components/ImageParallax/ImageParallax";

describe("ImageParallax", () => {
  it("should render the component with default props", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;

    const { getByTestId, getByText } = render(
      <ImageParallax
        title={title}
        children={children}
        blur={true}
        imageUrl="test,jpg"
        strength={500}
      />
    );

    expect(getByTestId("image-parallax")).toBeInTheDocument();
    expect(getByTestId("image-parallax2")).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument(); // check title prop is rendered correctly
    expect(getByText("Test Children")).toBeInTheDocument(); // check children prop is rendered correctly
    fireEvent.scroll(window, { target: { pageYOffset: 10 } });

    expect(getByTestId("image-parallax2")).toHaveStyle(
      // check strength prop is applied correctly
      "transform: translateY(5000px)"
    ); // expected value based on strength prop of 500  and pageYOffset of 10  (10 * 500)   = 5000px   )   )   )   )   )   )   )
  });

  it("should update the offsetY when scrolling", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <ImageParallax
        title={title}
        children={children}
        blur={true}
        imageUrl="test.jpg"
      />
    );

    fireEvent.scroll(window, { target: { pageYOffset: 10 } });

    expect(getByTestId("image-parallax2")).toHaveStyle(
      "transform: translateY(3000px)"
    );
  });

  it("should update the offsetY when scrolling with custom strength", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <ImageParallax
        title={title}
        children={children}
        blur={true}
        imageUrl="test.jpg"
        strength={500}
      />
    );

    fireEvent.scroll(window, { target: { pageYOffset: 10 } });
    expect(getByTestId("image-parallax2")).toHaveStyle(
      "transform: translateY(5000px)"
    );
  });

  it("should apply blur if blur is set to true", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <ImageParallax
        title={title}
        children={children}
        blur={true}
        imageUrl="test.jpg"
      />
    );

    expect(getByTestId("image-parallax")).toHaveStyle("filter: blur(3000px)");
  });

  it("should not blur when blur prop is set to false", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <ImageParallax
        title={title}
        children={children}
        blur={false}
        imageUrl="test.jpg"
      />
    );
    expect(getByTestId("image-parallax2")).not.toHaveStyle(
      "filter: blur(3000px)"
    );
  });
});
