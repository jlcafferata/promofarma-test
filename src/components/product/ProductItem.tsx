import React, { useState } from "react";
import ImageAddToCart from "../shoppingCart/product/ImageAddToCart";
import IProduct from "../../interfaces/IProduct";
import { ProductLine, ProductName, ProductPrice } from "../shoppingCart/styedComponents/ShoppingCartSC";
import {addToCart, isProductAlreadyAdded} from "../../utils/shoppingCart/manageStorage";

interface IProductItem {
  product: IProduct;
}

const ProductItem = ({ product }: IProductItem) => {
  const { id = 0, name = "", price = 0 } = product || {};
  const [isProductSelected, setIsProductSelected] = useState(isProductAlreadyAdded(id));
  
  
  const toggleIsProductSelected=()=>{
    setIsProductSelected(!isProductSelected);
  }

  const handleAddToCart=()=>{
    if(isProductAlreadyAdded(id)){
      return;
    }
    addToCart(id);
    toggleIsProductSelected();
  }


  return (
    <ProductLine>
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
