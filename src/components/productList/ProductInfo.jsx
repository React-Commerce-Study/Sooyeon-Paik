import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem.jsx';

export default function ProductInfo() {
  const [products, setProducts] = useState([]);

  const url = 'https://openmarket.weniv.co.kr/products/';

  async function getProducts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data.results);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductList>
      {products.map((item, index) => (
        <ProductItem
          key={item.product_id}
          image={item.image}
          storeName={item.store_name}
          productName={item.product_name}
          price={item.price.toLocaleString()}
        />
      ))}
    </ProductList>
  );
}

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 20px;
`;
