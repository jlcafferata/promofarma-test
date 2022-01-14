import styled from "styled-components";

const ProductLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;
  width: 80%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ProductName = styled.div`
  display: flex;
  font-size: 1rem;
  width: 40%;
  justify-content: flex-start;
  align-items: center;
`;

const ProductPrice = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 800;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
`;

const ProductImage = styled.div`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductsAdded = styled.div`
  display: flex;
  flex-direction: column;
  border: outset;
  border-radius: 10px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ProductItemAdded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const TotalProducts = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TotalProductsTitle = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  width: auto;
`;

const TotalProductsCount = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
  display: flex;
  align-self: center;
`;

const TotalPrice = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 800;
  width: 55%;
  justify-content: flex-end;
`;

const ProductsAddedTitle = styled.div`
  font-size: 1.2rem;
  color: #8cbf00;
  display: flex;
  border-bottom: 0.15rem solid;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`;

export {
  ProductLine,
  ProductName,
  ProductImage,
  ProductPrice,
  MainLayout,
  ProductsList,
  ProductsAdded,
  ProductsAddedTitle,
  ProductItemAdded,
  TotalProducts,
  TotalProductsTitle,
  TotalProductsCount,
  TotalPrice,
};

