import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem.jsx';
import { getProducts } from "../../api/Apis.js"

export default function ProductInfo() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async() => {
      try {
        const data = await getProducts();
        setProducts(data.results);
        console.log(data.results);
      }
      catch (error) {
        console.log("데이터를 가져오는 중 오류가 발생했습니다", error)
      }
  }
  useEffect(() => {
  fetchProduct();
},
    []
   );

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

const ProductList = styled.section`
max-width: 1280px;
margin: 80px auto;
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 70px;
  `