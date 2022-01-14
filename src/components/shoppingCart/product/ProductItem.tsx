import React, { useState } from "react";
import { addToCart, isProductAlreadyAdded } from "../../../utils/shoppingCart/manageStorage";
import { ProductLine, ProductName, ProductPrice } from "../styedComponents/ShoppingCartSC";
import ImageAddToCart from "./ImageAddToCart";
import IProduct from "../../../interfaces/IProduct";

interface IProductItem {
  product: IProduct;
  onProductAdded:any;
}

const ProductItem = ({ product, onProductAdded }: IProductItem) => {
  const { id = 0, name = "", price = 0 } = product || {};
  const [isProductSelected, setIsProductSelected] = useState(isProductAlreadyAdded(id));
  
  
  const toggleIsProductSelected=()=>{
    setIsProductSelected(!isProductSelected);
    onProductAdded(id);
  }

  const handleAddToCart=()=>{
    if(isProductAlreadyAdded(id)){
      return;
    }
    addToCart(id);
    toggleIsProductSelected();
  }


  return (
    <ProductLine data-testid="productLine">
      <ProductName>{name}</ProductName>
      <ProductPrice>{`${price} €`}</ProductPrice>
      <ImageAddToCart
        disabled={isProductSelected}
        onClick={handleAddToCart}
      />
    </ProductLine>
  );
};

export default ProductItem;
