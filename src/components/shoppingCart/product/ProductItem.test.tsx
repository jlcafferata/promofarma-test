import { render, screen } from "@testing-library/react";
import products from "../../../test/mock-data.json";
import ProductItem from "./ProductItem";

describe("ProductItem", () => {
  it("has to show just one productItem", () => {
    render(<ProductItem product={products[0]} onProductAdded />);
    expect(screen.getAllByTestId("productLine")).toHaveLength(1);
  });
});
