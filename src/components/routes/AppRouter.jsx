import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import ProductInfoPage from '../pages/ProductInfoPage'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route index element = {<ProductPage/>} />
            <Route path="/" element = {<ProductPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/info" element={<ProductInfoPage />} />
          </Routes>
      </Router>
  )
}