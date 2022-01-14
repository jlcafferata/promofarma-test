import { render, screen } from "@testing-library/react";
import products from "../../test/mock-data.json";
import ShoppingCart from "./index";

describe("MainScreen", () => {
  it("renders shoppingCart appropriately", () => {
    render(<ShoppingCart items={products} />);
    expect(screen.getByTestId("productList")).toBeInTheDocument();
  });
  it("not to show any productItem if there is not products", () => {
    render(<ShoppingCart />);
    expect(screen.queryAllByText("€")).toHaveLength(0);
  });
});
