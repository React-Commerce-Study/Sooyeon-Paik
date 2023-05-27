import React, { useState, useEffect } from 'react';

export default function ProductItem() {
  const [products, setProducts] = useState([]);

  const url = 'https://openmarket.weniv.co.kr/products'

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.result);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다.', error);
      }
    };
    getProducts();
  }, []);

  
  return (
    <></>
  );
}
