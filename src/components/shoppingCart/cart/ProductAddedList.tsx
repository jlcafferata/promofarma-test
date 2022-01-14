import React from "react";
import IProductItem from "../../../interfaces/IProduct";
import {
  isProductAlreadyAdded
} from "../../../utils/shoppingCart/manageStorage";
import {
  ProductItemAdded,
  ProductName,
  ProductPrice,
  TotalPrice,
  TotalProducts,
  TotalProductsCount,
  TotalProductsTitle
} from "../styedComponents/ShoppingCartSC";

interface IProductList {
  items?: IProductItem[];
}

const ProductAddedList = ({ items=[] }: IProductList) => {
  let totalize = 0;
  let productCounts = 0;

  return (
    <>
      {items &&
        items.map((product) => {
          if (isProductAlreadyAdded(product.id)) {
            totalize += product.price;
            productCounts++;
            return (
              <ProductItemAdded>
                <img alt="Producto" src={product.image} width="100rem" />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{`${product.price} €`}</ProductPrice>
              </ProductItemAdded>
            );
          } 
          return null;
        })}
      {totalize > 0 && (
        <TotalProducts>
          <TotalProductsTitle>TOTAL</TotalProductsTitle>
          <TotalProductsCount>
            ({`${productCounts} producto${productCounts > 1 ? "s" : ""}`})
          </TotalProductsCount>
          <TotalPrice> {`${totalize.toFixed(2)} €`}</TotalPrice>
        </TotalProducts>
      )}
    </>
  );
};

export default ProductAddedList;
