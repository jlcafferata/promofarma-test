import { useState } from "react";
import { getStoredProducts } from "../../utils/shoppingCart/manageStorage";
import ProductAddedList from "./cart/ProductAddedList";
import IProductItem from "../../interfaces/IProduct";
import ProductItem from "./product/ProductItem";
import {
  MainLayout,
  ProductsAdded,
  ProductsAddedTitle,
  ProductsList,
} from "./styedComponents/ShoppingCartSC";

interface IProductList {
  items?: IProductItem[];
}

const ShoppingCart = ({ items=[] }: IProductList) => {
  const [, setProductSelected] = useState<number>();

  const handleProductAdded = (productId: number) => {
    setProductSelected(productId);
  };

  const haveAnyProductInCart = getStoredProducts().length > 0;

  return (
    <MainLayout>
      <ProductsList data-testid="productList">
        {items.map((productItem, idx) => (
          <ProductItem
            key={idx}
            product={productItem}
            onProductAdded={handleProductAdded}
          />
        ))}
      </ProductsList>
      {haveAnyProductInCart && (
        <ProductsAdded data-testid="productsAdded">
          <ProductsAddedTitle>MI CESTA:</ProductsAddedTitle>
          <ProductAddedList items={items} />
        </ProductsAdded>
      )}
    </MainLayout>
  );
};
export default ShoppingCart;
