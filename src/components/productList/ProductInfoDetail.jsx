import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Button from "../common/button/Button"

const ProductInfoDetail = () => {
  const [count, setCount] = useState(1);
  const location = useLocation();

  const handlePlusCount = () => {
    setCount(count + 1);
  }

  const handleMinusCount = () => {
    if(count > 1) {
  setCount(count - 1);
    }
  }

  const productInfoDetail = location.state;
    const totalPrice = Number(productInfoDetail.price.replaceAll(/,/g, '')) * count;

  return (  
    <> 
    <ProductWrapper>
      <h2 className="a11y-hidden">상품 상세 페이지</h2>
      <div className="img-wrapper">
      <ProductImg src={productInfoDetail.image} alt="상품 이미지" />
      </div>
      <div className="product-info">
      <StoreName>{productInfoDetail.storeName}</StoreName>
      <ProductName>{productInfoDetail.productName}</ProductName>
      <Price>{productInfoDetail.price}</Price>
      <p className="delivery-info">택배배송 / 무료배송</p>
      <div className="button-wrapper">
        <div className="buttons">
          <PlusBtn onClick={handlePlusCount}>+</PlusBtn>
          <Count>{count}</Count>
          <MinusBtn onClick={handleMinusCount}>-</MinusBtn>
        </div>
      </div>
      <div className="total-wrapper">
        <span>총 상품 금액</span>
        <div className="total-info">
        <strong className="total-count">총 수량 {count} 개</strong>
        <Price>{totalPrice.toLocaleString()}</Price>
        </div>
      </div>
      <Button>바로 구매</Button>
      <Button>장바구니</Button>
      </div>
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.main`
max-width: 1280px;
margin: 80px auto 0;
display: flex;
gap: 50px;
font-family: 'SpoqaHanSansNeo-Regular';

.product-info {
  width: 630px;
}

.delivery-info{
font-size: var(--fs-md);
color: var(--subtext-color);
margin-bottom: 20px;
}

.button-wrapper {
  padding: 30px 0;
  box-shadow: 0 -1px 0 0 var(--border-color), 0 1px 0 0 var(--border-color);
}

.total-wrapper {
  display: flex;
  justify-content: space-between;
}

.total-count {
  color: var(--subtext-color);
  font-weight: 700;
  margin-right: 12px;
  &:after {
    content: "|";
    color: var(--subtext-color);
    margin-left: 11px;
  }
}
`

const ProductImg = styled.img`
width: 600px;
height: 600px;
`;

const StoreName = styled.span`
font-size: var(--fs-lg);
color: var(--subtext-color);
margin-bottom: 16px;
`;

const ProductName = styled.p`
font-size: var(--fs-title);
margin-bottom: 20px;
`;

const Price = styled.strong`
font-size: var(--fs-title);
font-weight: 700;
/* display: block;
margin-bottom: 138px;  */
&:after {
  content: "원";
  font-weight: 400;
  font-size: var(--fs-lg);
  margin-left: 2px;
}
`;

const PlusBtn = styled.button``;

const Count = styled.span``

const MinusBtn = styled.button``

export default ProductInfoDetail;
