import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ProductItem({ key, image, storeName, productName, price }) {
console.log(key)
console.log(image)
console.log(storeName)
  return (
    <Link to= "/info"
      state= {{ storeName: storeName }}
>
      <ProductItemContainer>
        <StyledImage src={image} alt="상품 이미지" />
        <StyledStore>{storeName}</StyledStore>
        <StyledName>{productName}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </ProductItemContainer>
    </Link>
  );
}

const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const StyledStore = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledName = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
