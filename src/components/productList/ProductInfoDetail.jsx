import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const ProductInfoDetail = () => {
  const location = useLocation();
  const productInfoDetail = location.state;
    console.log(productInfoDetail)
    console.log(location)
  return (
    <>

      {/* <ProductImg src={productInfoDetail.image} alt="상품 이미지" />
      <StoreName>{productInfoDetail.storeName}</StoreName>
      <ProductName>{productInfoDetail.productName}</ProductName>
      <Price>{productInfoDetail.price}</Price> */}
    </>
  );
};

const ProductImg = styled.img``;

const StoreName = styled.h3``;

const ProductName = styled.p``;

const Price = styled.strong``;

export default ProductInfoDetail;
