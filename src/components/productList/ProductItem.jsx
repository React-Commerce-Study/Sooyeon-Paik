import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ProductItem({ key, image, storeName, productName, price }) {
console.log(key)
console.log(image)
console.log(storeName)
  return (
    <InfoLink to="/info" state={{ image: image, storeName: storeName, productName: productName, price: price }}>
     <ProductItems>
      <ProductItemInfo>
        <div className="image-cover">
        <StyledImage src={image} alt="상품 이미지" />
        </div>
        <StyledStore>{storeName}</StyledStore>
        <StyledName>{productName}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </ProductItemInfo>
      </ProductItems>
    </InfoLink>
  );
}

const InfoLink = styled(Link)`
  display: block;
  max-width: 380px;
`

const ProductItems = styled.ul`
  margin: 0 auto;
`

const ProductItemInfo = styled.li`
max-width: 100%;
  display: flex;
  flex-direction: column;

  .image-cover {
    max-width: 380px;
    height: 380px;
    margin-bottom: 16px;
    
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
`;

const StyledStore = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledPrice = styled.strong`
  font-size: 16px;
  font-weight: bold;
  &:after {
    content:"원";
    margin-left: 1px;
  }
`;